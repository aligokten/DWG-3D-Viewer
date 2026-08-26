"""3B üretim motorları.

`Trellis2Engine` gerçek TRELLIS.2 boru hattını (GPU gerekir) sarmalar.
`MockEngine` aynı arayüzü GPU'suz taklit eder; arayüz geliştirme, sürekli
tümleştirme ve duman testi için kullanılır.
"""

from __future__ import annotations

import math
import os
from typing import Dict, List, Optional, Protocol, Tuple

import numpy as np
from PIL import Image, ImageDraw

from .config import ENVMAPS, MODES, PIPELINE_TYPES, STEPS, Settings
from .glb import write_placeholder_glb


class Engine(Protocol):
    """Panelin motordan beklediği en küçük arayüz."""

    name: str

    def load(self) -> None: ...

    def preprocess_image(self, image: Image.Image) -> Image.Image: ...

    def generate(
        self,
        image: Image.Image,
        seed: int,
        resolution: str,
        ss_params: dict,
        shape_params: dict,
        tex_params: dict,
    ) -> Tuple[dict, Dict[str, List]]: ...

    def extract_glb(self, state: dict, decimation_target: int, texture_size: int, out_path: str) -> str: ...


# --------------------------------------------------------------------------- #
# Gerçek motor
# --------------------------------------------------------------------------- #

class Trellis2Engine:
    """microsoft/TRELLIS.2-4B boru hattı (Linux + CUDA + >=24GB VRAM)."""

    name = "trellis2"

    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.pipeline = None
        self.envmap: Optional[dict] = None
        self._render_utils = None
        self._sparse = None
        self._o_voxel = None

    def load(self) -> None:
        if self.pipeline is not None:
            return
        # OpenEXR okuma, HDRI'lar için gerekli.
        os.environ.setdefault("OPENCV_IO_ENABLE_OPENEXR", "1")
        os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "expandable_segments:True")

        import cv2
        import torch
        import o_voxel
        from trellis2.modules import sparse
        from trellis2.pipelines import Trellis2ImageTo3DPipeline
        from trellis2.renderers import EnvMap
        from trellis2.utils import render_utils

        self._render_utils = render_utils
        self._sparse = sparse
        self._o_voxel = o_voxel

        pipeline = Trellis2ImageTo3DPipeline.from_pretrained(self.settings.model)
        pipeline.cuda()
        self.pipeline = pipeline

        envmap = {}
        for key, rel_path in ENVMAPS.items():
            path = self.settings.path(*rel_path.split("/"))
            if not os.path.isfile(path):
                raise FileNotFoundError(
                    f"HDRI bulunamadı: {path}. TRELLIS2_ROOT değişkenini TRELLIS.2 deposunu "
                    "gösterecek şekilde ayarlayın."
                )
            raw = cv2.cvtColor(cv2.imread(path, cv2.IMREAD_UNCHANGED), cv2.COLOR_BGR2RGB)
            envmap[key] = EnvMap(torch.tensor(raw, dtype=torch.float32, device="cuda"))
        self.envmap = envmap

    def preprocess_image(self, image: Image.Image) -> Image.Image:
        self.load()
        return self.pipeline.preprocess_image(image)

    def generate(
        self,
        image: Image.Image,
        seed: int,
        resolution: str,
        ss_params: dict,
        shape_params: dict,
        tex_params: dict,
    ) -> Tuple[dict, Dict[str, List]]:
        import torch

        self.load()
        outputs, latents = self.pipeline.run(
            image,
            seed=seed,
            preprocess_image=False,
            sparse_structure_sampler_params=ss_params,
            shape_slat_sampler_params=shape_params,
            tex_slat_sampler_params=tex_params,
            pipeline_type=PIPELINE_TYPES[resolution],
            return_latent=True,
        )
        mesh = outputs[0]
        mesh.simplify(16777216)  # nvdiffrast üçgen sınırı
        snapshots = self._render_utils.render_snapshot(
            mesh, resolution=1024, r=2, fov=36, nviews=STEPS, envmap=self.envmap
        )
        state = self._pack_state(latents)
        torch.cuda.empty_cache()
        return state, snapshots

    def extract_glb(self, state: dict, decimation_target: int, texture_size: int, out_path: str) -> str:
        import torch

        self.load()
        shape_slat, tex_slat, res = self._unpack_state(state)
        mesh = self.pipeline.decode_latent(shape_slat, tex_slat, res)[0]
        glb = self._o_voxel.postprocess.to_glb(
            vertices=mesh.vertices,
            faces=mesh.faces,
            attr_volume=mesh.attrs,
            coords=mesh.coords,
            attr_layout=self.pipeline.pbr_attr_layout,
            grid_size=res,
            aabb=[[-0.5, -0.5, -0.5], [0.5, 0.5, 0.5]],
            decimation_target=decimation_target,
            texture_size=texture_size,
            remesh=True,
            remesh_band=1,
            remesh_project=0,
            use_tqdm=True,
        )
        glb.export(out_path, extension_webp=True)
        torch.cuda.empty_cache()
        return out_path

    # --- gizli durum paketleme (gradio State içinde saklanır) ---

    @staticmethod
    def _pack_state(latents) -> dict:
        shape_slat, tex_slat, res = latents
        return {
            "shape_slat_feats": shape_slat.feats.cpu().numpy(),
            "tex_slat_feats": tex_slat.feats.cpu().numpy(),
            "coords": shape_slat.coords.cpu().numpy(),
            "res": res,
        }

    def _unpack_state(self, state: dict):
        import torch

        shape_slat = self._sparse.SparseTensor(
            feats=torch.from_numpy(state["shape_slat_feats"]).cuda(),
            coords=torch.from_numpy(state["coords"]).cuda(),
        )
        tex_slat = shape_slat.replace(torch.from_numpy(state["tex_slat_feats"]).cuda())
        return shape_slat, tex_slat, state["res"]


# --------------------------------------------------------------------------- #
# Sahte motor (GPU'suz)
# --------------------------------------------------------------------------- #

_CUBE = [
    (-1, -1, -1), (1, -1, -1), (1, 1, -1), (-1, 1, -1),
    (-1, -1, 1), (1, -1, 1), (1, 1, 1), (-1, 1, 1),
]
_QUADS = [
    (0, 1, 2, 3), (4, 5, 6, 7), (0, 1, 5, 4),
    (1, 2, 6, 5), (2, 3, 7, 6), (3, 0, 4, 7),
]


class MockEngine:
    """GPU olmadan aynı arayüzü sunan basit önizleme motoru."""

    name = "mock"

    def __init__(self, settings: Settings) -> None:
        self.settings = settings

    def load(self) -> None:  # pragma: no cover - yapacak bir şey yok
        return None

    def preprocess_image(self, image: Image.Image) -> Image.Image:
        # Gerçek motordaki arka plan ayıklamanın yerine kare kırpma + RGBA.
        image = image.convert("RGBA")
        side = min(image.size)
        left = (image.width - side) // 2
        top = (image.height - side) // 2
        return image.crop((left, top, left + side, top + side)).resize((518, 518))

    def generate(
        self,
        image: Image.Image,
        seed: int,
        resolution: str,
        ss_params: dict,
        shape_params: dict,
        tex_params: dict,
    ) -> Tuple[dict, Dict[str, List]]:
        rng = np.random.default_rng(seed)
        tint = rng.uniform(0.45, 1.0, size=3)
        snapshots: Dict[str, List] = {}
        for mode in MODES:
            snapshots[mode["render_key"]] = [
                self._render_view(mode, tint, step) for step in range(STEPS)
            ]
        state = {
            "mock": True,
            "seed": int(seed),
            "resolution": resolution,
            "tint": tint.tolist(),
            "steps": {
                "sparse_structure": ss_params,
                "shape": shape_params,
                "texture": tex_params,
            },
        }
        return state, snapshots

    def extract_glb(self, state: dict, decimation_target: int, texture_size: int, out_path: str) -> str:
        tint = state.get("tint", [0.8, 0.5, 0.3])
        return write_placeholder_glb(out_path, base_color=(*tint, 1.0))

    # --- basit döndürülen küp çizimi ---

    @staticmethod
    def _render_view(mode: dict, tint: np.ndarray, step: int, size: int = 720) -> Image.Image:
        yaw = 2 * math.pi * step / STEPS
        pitch = math.radians(20)
        cos_y, sin_y = math.cos(yaw), math.sin(yaw)
        cos_p, sin_p = math.cos(pitch), math.sin(pitch)

        def project(v):
            x, y, z = v
            x, y = x * cos_y - y * sin_y, x * sin_y + y * cos_y
            y, z = y * cos_p - z * sin_p, y * sin_p + z * cos_p
            scale = size * 0.22
            return (size / 2 + x * scale, size / 2 - z * scale, y)

        projected = [project(v) for v in _CUBE]
        base = np.array(mode["color"], dtype=float) / 255.0
        base = np.clip(base * 0.55 + np.asarray(tint) * 0.45, 0, 1)

        image = Image.new("RGB", (size, size), (16, 16, 20))
        draw = ImageDraw.Draw(image)
        # Ressam algoritması: uzak yüzeyden yakına doğru çiz.
        faces = sorted(_QUADS, key=lambda q: -sum(projected[i][2] for i in q) / 4)
        for face_index, quad in enumerate(faces):
            shade = 0.45 + 0.55 * ((face_index + 1) / len(faces))
            color = tuple(int(255 * min(1.0, c * shade)) for c in base)
            draw.polygon([(projected[i][0], projected[i][1]) for i in quad], fill=color,
                         outline=(30, 30, 36))
        draw.text((16, size - 28), f"DEMO • {mode['name']} • görünüm {step + 1}/{STEPS}",
                  fill=(210, 210, 214))
        return image


def build_engine(settings: Settings) -> Engine:
    """Ayarlara göre gerçek ya da sahte motoru döner."""
    if settings.mock:
        return MockEngine(settings)
    return Trellis2Engine(settings)
