"""TRELLIS.2 paneli: metinden 3B ve görselden 3B üretim arayüzü.

Yerleşim, TRELLIS.2 deposundaki referans demo ile aynıdır: solda istem ve
ayarlar sütunu, ortada Önizleme/Dışa aktarma adımları, sağda örnekler.
"""

from __future__ import annotations

import inspect
import os
import shutil
from dataclasses import dataclass
from datetime import datetime
from typing import Callable, Dict, List, Optional, Tuple

import gradio as gr
import numpy as np
from PIL import Image

from .assets import example_images, mode_icons
from .config import MAX_SEED, RESOLUTIONS, TMP_DIR, Settings
from .engine import build_engine
from .text2image import DEFAULT_NEGATIVE, build_text_to_image
from .ui import CSS, EMPTY_HTML, HEAD, build_previewer_html

# Gradio 6, `css`/`head` parametrelerini Blocks yerine launch() üzerine taşıdı;
# panel her iki sürümde de aynı görünsün diye imzaya bakıp doğru yere veriyoruz.
_STYLE_ON_LAUNCH = {"css", "head"} <= set(inspect.signature(gr.Blocks.launch).parameters)
STYLE_KWARGS = {"css": CSS, "head": HEAD}


TEXT_EXAMPLES = [
    "cilalı seramik bir vazo, mavi sırlı, ince uzun boyun",
    "ahşap gövdeli antika bir masa saati, pirinç detaylar",
    "kırmızı deri koltuk, tek kişilik, modern tasarım",
    "taş oyma bir aslan heykeli, aşınmış yüzey",
    "retro bir fotoğraf makinesi, deri kaplama, metal düğmeler",
]


@dataclass
class Handlers:
    """Duman testinin ve arayüzün paylaştığı geri çağırmalar."""

    preprocess_image: Callable
    text_to_image: Callable
    generate: Callable
    extract_glb: Callable


def _session_dir(req: Optional[gr.Request]) -> str:
    session = getattr(req, "session_hash", None) or "local"
    path = os.path.join(TMP_DIR, str(session))
    os.makedirs(path, exist_ok=True)
    return path


def create_panel(settings: Settings) -> Tuple[gr.Blocks, Handlers]:
    engine = build_engine(settings)
    text_to_image = build_text_to_image(settings)
    modes = mode_icons(settings)
    examples = example_images(settings)

    # ----------------------------- geri çağırmalar ----------------------------- #

    def start_session(req: Optional[gr.Request] = None) -> None:
        _session_dir(req)

    def end_session(req: Optional[gr.Request] = None) -> None:
        path = _session_dir(req)
        shutil.rmtree(path, ignore_errors=True)

    def get_seed(randomize_seed: bool, seed: int) -> int:
        return int(np.random.randint(0, MAX_SEED)) if randomize_seed else int(seed)

    def preprocess_image(image: Optional[Image.Image]) -> Optional[Image.Image]:
        if image is None:
            return None
        return engine.preprocess_image(image)

    def run_text_to_image(
        prompt: str, negative_prompt: str, steps: int, guidance: float, seed: int
    ) -> Image.Image:
        """Metinden tek nesneli görsel üretir, ardından 3B için ön işler."""
        raw = text_to_image.generate(prompt, negative_prompt, int(steps), float(guidance), int(seed))
        return engine.preprocess_image(raw)

    def generate(
        source: str,
        image: Optional[Image.Image],
        prompt: str,
        negative_prompt: str,
        t2i_steps: int,
        t2i_guidance: float,
        seed: int,
        resolution: str,
        ss_guidance_strength: float,
        ss_guidance_rescale: float,
        ss_sampling_steps: int,
        ss_rescale_t: float,
        shape_guidance_strength: float,
        shape_guidance_rescale: float,
        shape_sampling_steps: int,
        shape_rescale_t: float,
        tex_guidance_strength: float,
        tex_guidance_rescale: float,
        tex_sampling_steps: int,
        tex_rescale_t: float,
        req: Optional[gr.Request] = None,
    ) -> Tuple[dict, str, Optional[Image.Image], str]:
        """Seçili kaynağa göre 3B varlığı üretir; durum + önizleyici HTML döner."""
        if source == "text":
            if not (prompt or "").strip():
                raise gr.Error("Önce bir metin istemi yazın.")
            image = run_text_to_image(prompt, negative_prompt, t2i_steps, t2i_guidance, seed)
            preview_image = image
        else:
            if image is None:
                raise gr.Error("Önce bir görsel yükleyin.")
            preview_image = None

        state, snapshots = engine.generate(
            image,
            seed=int(seed),
            resolution=resolution,
            ss_params={
                "steps": int(ss_sampling_steps),
                "guidance_strength": float(ss_guidance_strength),
                "guidance_rescale": float(ss_guidance_rescale),
                "rescale_t": float(ss_rescale_t),
            },
            shape_params={
                "steps": int(shape_sampling_steps),
                "guidance_strength": float(shape_guidance_strength),
                "guidance_rescale": float(shape_guidance_rescale),
                "rescale_t": float(shape_rescale_t),
            },
            tex_params={
                "steps": int(tex_sampling_steps),
                "guidance_strength": float(tex_guidance_strength),
                "guidance_rescale": float(tex_guidance_rescale),
                "rescale_t": float(tex_rescale_t),
            },
        )
        html = build_previewer_html(snapshots, modes)
        kaynak = "metin" if source == "text" else "görsel"
        status = f"Üretildi — kaynak: {kaynak}, çözünürlük: {resolution}, seed: {int(seed)}."
        return state, html, preview_image, status

    def extract_glb(
        state: Optional[dict],
        decimation_target: int,
        texture_size: int,
        req: Optional[gr.Request] = None,
    ) -> Tuple[str, str, str]:
        if not state:
            raise gr.Error("Önce bir model üretin.")
        user_dir = _session_dir(req)
        now = datetime.now()
        timestamp = now.strftime("%Y-%m-%dT%H%M%S") + f".{now.microsecond // 1000:03d}"
        glb_path = os.path.join(user_dir, f"trellis2_{timestamp}.glb")
        engine.extract_glb(state, int(decimation_target), int(texture_size), glb_path)
        size = os.path.getsize(glb_path)
        boyut = f"{size / (1024 * 1024):.1f} MB" if size >= 1024 * 1024 else f"{size / 1024:.0f} KB"
        return glb_path, glb_path, f"GLB hazır: {os.path.basename(glb_path)} ({boyut})."

    # -------------------------------- arayüz --------------------------------- #

    blocks_kwargs = {} if _STYLE_ON_LAUNCH else STYLE_KWARGS
    with gr.Blocks(title="TRELLIS.2 Paneli", delete_cache=(600, 600), **blocks_kwargs) as demo:
        gr.Markdown(
            """
            ## Metin & Görsel → 3B Varlık — [TRELLIS.2](https://microsoft.github.io/TRELLIS.2)
            * **Görsel → 3B**: Tercihen arka planı ayıklanmış tek nesneli bir görsel yükleyin.
            * **Metin → 3B**: İstemden önce bir görsel üretilir, ardından o görselden 3B model çıkarılır.
            * Sonuçtan memnunsanız **GLB çıkar** ile dışa aktarıp indirin.
            """,
            elem_classes=["panel-title"],
        )

        source_state = gr.State("image")

        with gr.Row():
            with gr.Column(scale=1, min_width=380):
                with gr.Tabs(elem_classes=["prompt-tabs"]) as prompt_tabs:
                    with gr.Tab("Görsel → 3B", id="image") as image_tab:
                        image_prompt = gr.Image(
                            label="Görsel istem", format="png", image_mode="RGBA",
                            type="pil", height=360,
                        )
                    with gr.Tab("Metin → 3B", id="text") as text_tab:
                        text_prompt = gr.Textbox(
                            label="Metin istem", lines=3,
                            placeholder="Örn. cilalı seramik bir vazo, mavi sırlı",
                        )
                        negative_prompt = gr.Textbox(
                            label="Negatif istem", lines=2, value=DEFAULT_NEGATIVE,
                        )
                        with gr.Row():
                            t2i_steps = gr.Slider(10, 60, label="Görsel adımı", value=30, step=1)
                            t2i_guidance = gr.Slider(1.0, 12.0, label="Görsel rehberlik", value=6.0, step=0.1)
                        t2i_preview = gr.Image(
                            label="Üretilen ara görsel", type="pil", height=240,
                            interactive=False, elem_classes=["t2i-preview"],
                        )
                        gr.Examples(examples=[[p] for p in TEXT_EXAMPLES], inputs=[text_prompt])

                resolution = gr.Radio(RESOLUTIONS, label="Çözünürlük", value="1024")
                seed = gr.Slider(0, MAX_SEED, label="Seed", value=0, step=1)
                randomize_seed = gr.Checkbox(label="Seed'i rastgele seç", value=True)
                decimation_target = gr.Slider(
                    100000, 1000000, label="Üçgen hedefi (decimation)", value=500000, step=10000
                )
                texture_size = gr.Slider(1024, 4096, label="Doku boyutu", value=2048, step=1024)

                generate_btn = gr.Button("Üret", variant="primary")
                status = gr.Markdown("", elem_classes=["status-bar"])

                with gr.Accordion(label="Gelişmiş ayarlar", open=False):
                    gr.Markdown("Aşama 1: Seyrek yapı üretimi")
                    with gr.Row():
                        ss_guidance_strength = gr.Slider(1.0, 10.0, label="Rehberlik gücü", value=7.5, step=0.1)
                        ss_guidance_rescale = gr.Slider(0.0, 1.0, label="Rehberlik ölçeği", value=0.7, step=0.01)
                        ss_sampling_steps = gr.Slider(1, 50, label="Örnekleme adımı", value=12, step=1)
                        ss_rescale_t = gr.Slider(1.0, 6.0, label="Rescale T", value=5.0, step=0.1)
                    gr.Markdown("Aşama 2: Biçim üretimi")
                    with gr.Row():
                        shape_guidance_strength = gr.Slider(1.0, 10.0, label="Rehberlik gücü", value=7.5, step=0.1)
                        shape_guidance_rescale = gr.Slider(0.0, 1.0, label="Rehberlik ölçeği", value=0.5, step=0.01)
                        shape_sampling_steps = gr.Slider(1, 50, label="Örnekleme adımı", value=12, step=1)
                        shape_rescale_t = gr.Slider(1.0, 6.0, label="Rescale T", value=3.0, step=0.1)
                    gr.Markdown("Aşama 3: Malzeme üretimi")
                    with gr.Row():
                        tex_guidance_strength = gr.Slider(1.0, 10.0, label="Rehberlik gücü", value=1.0, step=0.1)
                        tex_guidance_rescale = gr.Slider(0.0, 1.0, label="Rehberlik ölçeği", value=0.0, step=0.01)
                        tex_sampling_steps = gr.Slider(1, 50, label="Örnekleme adımı", value=12, step=1)
                        tex_rescale_t = gr.Slider(1.0, 6.0, label="Rescale T", value=3.0, step=0.1)

            with gr.Column(scale=10):
                with gr.Walkthrough(selected=0) as walkthrough:
                    with gr.Step("Önizleme", id=0):
                        preview_output = gr.HTML(
                            EMPTY_HTML, label="3B varlık önizlemesi", show_label=True, container=True
                        )
                        extract_btn = gr.Button("GLB çıkar", variant="primary")
                    with gr.Step("Dışa aktar", id=1):
                        glb_output = gr.Model3D(
                            label="Çıkarılan GLB", height=724, show_label=True,
                            display_mode="solid", clear_color=(0.25, 0.25, 0.25, 1.0),
                        )
                        download_btn = gr.DownloadButton(label="GLB indir")

            with gr.Column(scale=1, min_width=180):
                if examples:
                    gr.Examples(
                        examples=examples,
                        inputs=[image_prompt],
                        fn=preprocess_image,
                        outputs=[image_prompt],
                        run_on_click=True,
                        examples_per_page=18,
                    )
                else:
                    gr.Markdown(
                        "Örnek görseller için `TRELLIS2_ROOT` değişkenini TRELLIS.2 deposuna "
                        "ayarlayın ya da `trellis3d/assets/example_image/` klasörüne görsel koyun."
                    )

        output_buf = gr.State()

        # ------------------------------ olaylar ------------------------------ #

        demo.load(start_session)
        demo.unload(end_session)

        image_tab.select(lambda: "image", outputs=[source_state])
        text_tab.select(lambda: "text", outputs=[source_state])

        image_prompt.upload(preprocess_image, inputs=[image_prompt], outputs=[image_prompt])

        generate_btn.click(
            get_seed, inputs=[randomize_seed, seed], outputs=[seed],
        ).then(
            lambda: gr.Walkthrough(selected=0), outputs=[walkthrough],
        ).then(
            generate,
            inputs=[
                source_state, image_prompt, text_prompt, negative_prompt, t2i_steps, t2i_guidance,
                seed, resolution,
                ss_guidance_strength, ss_guidance_rescale, ss_sampling_steps, ss_rescale_t,
                shape_guidance_strength, shape_guidance_rescale, shape_sampling_steps, shape_rescale_t,
                tex_guidance_strength, tex_guidance_rescale, tex_sampling_steps, tex_rescale_t,
            ],
            outputs=[output_buf, preview_output, t2i_preview, status],
        )

        extract_btn.click(
            lambda: gr.Walkthrough(selected=1), outputs=[walkthrough],
        ).then(
            extract_glb,
            inputs=[output_buf, decimation_target, texture_size],
            outputs=[glb_output, download_btn, status],
        )

    # app.py bu sözlüğü doğrudan demo.launch()'a geçirir.
    demo.panel_launch_kwargs = STYLE_KWARGS if _STYLE_ON_LAUNCH else {}

    handlers = Handlers(
        preprocess_image=preprocess_image,
        text_to_image=run_text_to_image,
        generate=generate,
        extract_glb=extract_glb,
    )
    return demo, handlers
