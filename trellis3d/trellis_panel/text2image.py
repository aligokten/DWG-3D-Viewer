"""Metin → görsel aşaması.

TRELLIS.2 yalnızca görselden 3B üretir. Metinden 3B için panel iki aşama
çalıştırır: önce metinden tek nesneli bir görsel, sonra o görselden 3B model.
"""

from __future__ import annotations

import math
from typing import Optional, Protocol

import numpy as np
from PIL import Image, ImageDraw

from .config import Settings

# 3B'ye uygun görseller için istem kalıbı: tek, ortalanmış, sade zeminli nesne.
PROMPT_SUFFIX = (
    "single object, centered, full object visible, plain light gray background, "
    "studio lighting, high detail, product photo"
)
DEFAULT_NEGATIVE = (
    "multiple objects, cropped, cut off, text, watermark, busy background, "
    "human, blurry, low quality"
)


def compose_prompt(prompt: str) -> str:
    """Kullanıcı istemini 3B üretimine uygun hale getirir."""
    prompt = (prompt or "").strip().rstrip(",")
    if not prompt:
        raise ValueError("Metin istemi boş olamaz.")
    return f"{prompt}, {PROMPT_SUFFIX}"


class TextToImage(Protocol):
    name: str

    def load(self) -> None: ...

    def generate(
        self, prompt: str, negative_prompt: str, steps: int, guidance: float, seed: int
    ) -> Image.Image: ...


class DiffusersTextToImage:
    """diffusers tabanlı metin→görsel (SDXL veya FLUX)."""

    name = "diffusers"

    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.pipeline = None

    def load(self) -> None:
        if self.pipeline is not None:
            return
        import torch

        model = self.settings.text_to_image_model
        dtype = torch.bfloat16 if "flux" in model.lower() else torch.float16
        if "flux" in model.lower():
            from diffusers import FluxPipeline as PipelineCls
        else:
            from diffusers import AutoPipelineForText2Image as PipelineCls
        pipeline = PipelineCls.from_pretrained(model, torch_dtype=dtype)
        pipeline.to("cuda")
        # 3B boru hattıyla aynı GPU'yu paylaştığı için belleği kıs.
        if hasattr(pipeline, "enable_model_cpu_offload"):
            pipeline.enable_model_cpu_offload()
        self.pipeline = pipeline

    def generate(
        self, prompt: str, negative_prompt: str, steps: int, guidance: float, seed: int
    ) -> Image.Image:
        import torch

        self.load()
        generator = torch.Generator(device="cuda").manual_seed(int(seed))
        kwargs = dict(
            prompt=compose_prompt(prompt),
            num_inference_steps=int(steps),
            guidance_scale=float(guidance),
            generator=generator,
            width=1024,
            height=1024,
        )
        # FLUX negatif istem almaz.
        if "flux" not in self.settings.text_to_image_model.lower():
            kwargs["negative_prompt"] = negative_prompt or DEFAULT_NEGATIVE
        image = self.pipeline(**kwargs).images[0]
        return image.convert("RGB")


class MockTextToImage:
    """GPU'suz demo: istemden türetilen soyut bir nesne görseli üretir."""

    name = "mock"

    def __init__(self, settings: Optional[Settings] = None) -> None:
        self.settings = settings

    def load(self) -> None:  # pragma: no cover
        return None

    def generate(
        self, prompt: str, negative_prompt: str, steps: int, guidance: float, seed: int
    ) -> Image.Image:
        compose_prompt(prompt)  # boş istem denetimi
        rng = np.random.default_rng((int(seed) + hash(prompt.strip())) % (2**32))
        size = 1024
        image = Image.new("RGB", (size, size), (232, 232, 236))
        draw = ImageDraw.Draw(image)
        color = tuple(int(c) for c in rng.integers(60, 210, size=3))
        # İstemden türeyen köşe sayısıyla basit bir gövde çiz.
        sides = 3 + (abs(hash(prompt.strip())) % 6)
        radius = size * 0.3
        points = [
            (
                size / 2 + radius * math.cos(2 * math.pi * i / sides - math.pi / 2),
                size / 2 + radius * math.sin(2 * math.pi * i / sides - math.pi / 2),
            )
            for i in range(sides)
        ]
        draw.polygon(points, fill=color, outline=(40, 40, 46))
        draw.ellipse((size * 0.2, size * 0.72, size * 0.8, size * 0.86), fill=(206, 206, 212))
        draw.text((24, 24), f"DEMO metin→görsel\n{prompt.strip()[:60]}", fill=(40, 40, 46))
        return image


def build_text_to_image(settings: Settings) -> TextToImage:
    if settings.mock:
        return MockTextToImage(settings)
    return DiffusersTextToImage(settings)
