"""TRELLIS.2 paneli: metinden 3B ve görselden 3B üretim arayüzü.

Görsel dil, referans tasarımdan alınmıştır: solda ikon rayı ve koyu kenar
çubuğu, ortada sekme çipleri, kahraman bölümü, kart ızgarası ve degrade
çerçeveli yazım alanı.
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
from . import theme
from .text2image import DEFAULT_NEGATIVE, build_text_to_image
from .ui import CSS, EMPTY_HTML, HEAD, build_previewer_html

# Gradio 6, `css`/`head` parametrelerini Blocks yerine launch() üzerine taşıdı;
# panel her iki sürümde de aynı görünsün diye imzaya bakıp doğru yere veriyoruz.
_STYLE_ON_LAUNCH = {"css", "head"} <= set(inspect.signature(gr.Blocks.launch).parameters)
STYLE_KWARGS = {"css": CSS + theme.DARK_CSS, "head": HEAD + theme.FORCE_DARK_JS}


TEXT_EXAMPLES = [
    "cilalı seramik bir vazo, mavi sırlı, ince uzun boyun",
    "ahşap gövdeli antika bir masa saati, pirinç detaylar",
    "kırmızı deri koltuk, tek kişilik, modern tasarım",
    "taş oyma bir aslan heykeli, aşınmış yüzey",
    "retro bir fotoğraf makinesi, deri kaplama, metal düğmeler",
]

MODE_CHOICES = [("✦  Metin → 3B", "text"), ("▣  Görsel → 3B", "image")]


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
    demo_mode = settings.mock

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

    # --------------------------- arayüz yardımcıları --------------------------- #

    def record_run(cards: List[dict], source: str, prompt: str, resolution: str, seed: int):
        """Kart ızgarasına yeni bir üretim ekler (en yeni başa)."""
        icon = "✦" if source == "text" else "▣"
        title = (prompt or "").strip() or "Görselden üretim"
        cards = [
            {
                "icon": icon,
                "title": title[:40] + ("…" if len(title) > 40 else ""),
                "desc": f"{'Metin' if source == 'text' else 'Görsel'} → 3B · {resolution}³ · seed {int(seed)}",
                "meta": datetime.now().strftime("%d %B %H:%M"),
            },
            *cards,
        ][:6]
        return cards, theme.cards_html(cards)

    def attach_image(file) -> Tuple[Optional[Image.Image], dict, str, str]:
        """Ekle düğmesinden gelen görseli ön işler ve modu görsele çevirir."""
        if file is None:
            return None, gr.update(visible=False), "image", ""
        path = getattr(file, "name", file)
        processed = engine.preprocess_image(Image.open(path))
        return (
            processed,
            gr.update(value=processed, visible=True),
            "image",
            f"Görsel eklendi: {os.path.basename(str(path))}",
        )

    integrations = theme.integrations_html([
        ("◆", settings.model.split("/")[-1], not demo_mode),
        ("✦", settings.text_to_image_model.split("/")[-1], not demo_mode),
        ("▦", "o-voxel · GLB", not demo_mode),
    ])
    stages = theme.integrations_html([
        ("1", "Seyrek yapı", False),
        ("2", "Biçim", False),
        ("3", "Malzeme", False),
    ])
    credits = theme.credits_html(
        "Demo motoru etkin" if demo_mode else "GPU motoru hazır",
        "TRELLIS.2-4B · 1024³" if not demo_mode else "GPU olmadan önizleme",
        45 if demo_mode else 100,
        "demo" if demo_mode else "hazır",
    )

    # -------------------------------- arayüz --------------------------------- #

    blocks_kwargs = {} if _STYLE_ON_LAUNCH else STYLE_KWARGS
    with gr.Blocks(title="TRELLIS.2 Paneli", delete_cache=(600, 600), **blocks_kwargs) as demo:
        attached_image = gr.State(None)
        run_cards = gr.State([])
        output_buf = gr.State()

        with gr.Row(elem_id="app-shell"):
            # --- 1) ikon rayı --- #
            with gr.Column(scale=0, min_width=96, elem_id="rail"):
                gr.HTML(theme.RAIL_HTML)

            # --- 2) kenar çubuğu --- #
            with gr.Column(scale=0, min_width=320, elem_id="sidebar"):
                gr.HTML(theme.SIDEBAR_HEAD_HTML)
                new_run_btn = gr.Button("＋  Yeni üretim  ✦", elem_id="new-run-btn")
                gr.HTML('<div class="sidebar-divider"></div>')

                gr.HTML(theme.section_label("Üretim modu"))
                source_mode = gr.Radio(
                    choices=MODE_CHOICES, value="text", show_label=False,
                    container=False, elem_id="mode-list",
                )

                gr.HTML(theme.section_label("Aşamalar") + stages)
                gr.HTML('<div class="sidebar-divider"></div>')
                gr.HTML(theme.section_label("Modeller") + integrations)

                gr.HTML(theme.SIDEBAR_FOOT_HTML + credits)

            # --- 3) ana bölüm --- #
            with gr.Column(scale=10, elem_id="main"):
                with gr.Tabs() as stage_tabs:
                    with gr.Tab("Önizleme", id=0):
                        with gr.Column(elem_classes=["stage"]):
                            resolution = gr.Dropdown(
                                RESOLUTIONS, value="1024", show_label=False,
                                container=False, elem_id="model-chip",
                            )
                            hero = gr.HTML(theme.HERO_HTML)
                            preview_output = gr.HTML(EMPTY_HTML, visible=False)
                            cards_view = gr.HTML(theme.cards_html([]))

                    with gr.Tab("Dışa aktar", id=1):
                        with gr.Column(elem_classes=["stage"]):
                            glb_output = gr.Model3D(
                                label="Çıkarılan GLB", height=480, show_label=False,
                                display_mode="solid", clear_color=(0.06, 0.06, 0.08, 1.0),
                                elem_id="glb-view",
                            )
                            with gr.Row(elem_id="composer-actions"):
                                download_btn = gr.DownloadButton(label="⤓  GLB indir")

                with gr.Row(elem_id="suggestions"):
                    suggestion_btns = [gr.Button(f"✎  {text}") for text in TEXT_EXAMPLES[:4]]

                with gr.Column(elem_id="composer"):
                    with gr.Column(elem_id="composer-inner"):
                        gr.HTML(theme.notice_html(
                            "Demo motoru: üretim GPU olmadan taklit ediliyor"
                            if demo_mode else
                            "TRELLIS.2 GPU motoru hazır — üretim birkaç dakika sürebilir"
                        ))
                        attach_preview = gr.Image(
                            show_label=False, interactive=False, visible=False,
                            height=90, elem_id="attach-thumb", container=False,
                        )
                        text_prompt = gr.Textbox(
                            show_label=False, lines=2, container=False,
                            placeholder="Ne üretelim? Örn. cilalı seramik bir vazo, mavi sırlı…",
                        )
                        with gr.Row(elem_id="composer-actions"):
                            attach_btn = gr.UploadButton("⎘  Ekle", file_types=["image"])
                            advanced_btn = gr.Button("⚙  Gelişmiş")
                            extract_btn = gr.Button("⬚  GLB çıkar")
                            run_btn = gr.Button("Üret", elem_id="run-btn", variant="primary")

                status = gr.Markdown("", elem_classes=["status-bar"])
                gr.HTML(theme.DISCLAIMER_HTML)

                with gr.Accordion("Gelişmiş ayarlar", open=False, elem_id="advanced") as advanced:
                    with gr.Row():
                        seed = gr.Slider(0, MAX_SEED, label="Seed", value=0, step=1)
                        randomize_seed = gr.Checkbox(label="Seed'i rastgele seç", value=True)
                    with gr.Row():
                        decimation_target = gr.Slider(
                            100000, 1000000, label="Üçgen hedefi", value=500000, step=10000
                        )
                        texture_size = gr.Slider(1024, 4096, label="Doku boyutu", value=2048, step=1024)

                    gr.Markdown("**Metin → görsel aşaması**")
                    negative_prompt = gr.Textbox(label="Negatif istem", lines=2, value=DEFAULT_NEGATIVE)
                    with gr.Row():
                        t2i_steps = gr.Slider(10, 60, label="Görsel adımı", value=30, step=1)
                        t2i_guidance = gr.Slider(1.0, 12.0, label="Görsel rehberlik", value=6.0, step=0.1)

                    gr.Markdown("**Aşama 1: Seyrek yapı üretimi**")
                    with gr.Row():
                        ss_guidance_strength = gr.Slider(1.0, 10.0, label="Rehberlik gücü", value=7.5, step=0.1)
                        ss_guidance_rescale = gr.Slider(0.0, 1.0, label="Rehberlik ölçeği", value=0.7, step=0.01)
                        ss_sampling_steps = gr.Slider(1, 50, label="Örnekleme adımı", value=12, step=1)
                        ss_rescale_t = gr.Slider(1.0, 6.0, label="Rescale T", value=5.0, step=0.1)
                    gr.Markdown("**Aşama 2: Biçim üretimi**")
                    with gr.Row():
                        shape_guidance_strength = gr.Slider(1.0, 10.0, label="Rehberlik gücü", value=7.5, step=0.1)
                        shape_guidance_rescale = gr.Slider(0.0, 1.0, label="Rehberlik ölçeği", value=0.5, step=0.01)
                        shape_sampling_steps = gr.Slider(1, 50, label="Örnekleme adımı", value=12, step=1)
                        shape_rescale_t = gr.Slider(1.0, 6.0, label="Rescale T", value=3.0, step=0.1)
                    gr.Markdown("**Aşama 3: Malzeme üretimi**")
                    with gr.Row():
                        tex_guidance_strength = gr.Slider(1.0, 10.0, label="Rehberlik gücü", value=1.0, step=0.1)
                        tex_guidance_rescale = gr.Slider(0.0, 1.0, label="Rehberlik ölçeği", value=0.0, step=0.01)
                        tex_sampling_steps = gr.Slider(1, 50, label="Örnekleme adımı", value=12, step=1)
                        tex_rescale_t = gr.Slider(1.0, 6.0, label="Rescale T", value=3.0, step=0.1)

                    if examples:
                        gr.Examples(
                            examples=examples, inputs=[attach_preview],
                            examples_per_page=18, label="Örnek görseller",
                        )

        # ------------------------------ olaylar ------------------------------ #

        demo.load(start_session)
        demo.unload(end_session)

        for button, text in zip(suggestion_btns, TEXT_EXAMPLES):
            button.click(lambda value=text: (value, "text"), outputs=[text_prompt, source_mode])

        attach_btn.upload(
            attach_image,
            inputs=[attach_btn],
            outputs=[attached_image, attach_preview, source_mode, status],
        )

        advanced_btn.click(lambda: gr.Accordion(open=True), outputs=[advanced])

        new_run_btn.click(
            lambda: ("", None, gr.update(visible=False), gr.update(visible=False),
                     gr.update(visible=True), ""),
            outputs=[text_prompt, attached_image, attach_preview, preview_output, hero, status],
        )

        run_btn.click(
            get_seed, inputs=[randomize_seed, seed], outputs=[seed],
        ).then(
            lambda: gr.Tabs(selected=0), outputs=[stage_tabs],
        ).then(
            generate,
            inputs=[
                source_mode, attached_image, text_prompt, negative_prompt, t2i_steps, t2i_guidance,
                seed, resolution,
                ss_guidance_strength, ss_guidance_rescale, ss_sampling_steps, ss_rescale_t,
                shape_guidance_strength, shape_guidance_rescale, shape_sampling_steps, shape_rescale_t,
                tex_guidance_strength, tex_guidance_rescale, tex_sampling_steps, tex_rescale_t,
            ],
            outputs=[output_buf, preview_output, attach_preview, status],
        ).then(
            lambda: (gr.update(visible=True), gr.update(visible=False)),
            outputs=[preview_output, hero],
        ).then(
            record_run,
            inputs=[run_cards, source_mode, text_prompt, resolution, seed],
            outputs=[run_cards, cards_view],
        )

        extract_btn.click(
            lambda: gr.Tabs(selected=1), outputs=[stage_tabs],
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
