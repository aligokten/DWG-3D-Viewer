"""Duman testi: paneli sahte motorla uçtan uca çalıştırır (GPU gerekmez).

Kontrol edilenler: arayüz kurulumu, metin→3B ve görsel→3B akışları, önizleyici
HTML'inin tüm mod/görüş karelerini içermesi ve geçerli bir GLB üretimi.
"""

from __future__ import annotations

import os
import struct
import sys

from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from trellis_panel.config import DEFAULT_MODE, DEFAULT_STEP, MODES, STEPS, TMP_DIR, Settings
from trellis_panel.panel import create_panel

DEFAULT_ARGS = dict(
    negative_prompt="", t2i_steps=20, t2i_guidance=6.0, seed=7, resolution="1024",
    ss_guidance_strength=7.5, ss_guidance_rescale=0.7, ss_sampling_steps=12, ss_rescale_t=5.0,
    shape_guidance_strength=7.5, shape_guidance_rescale=0.5, shape_sampling_steps=12,
    shape_rescale_t=3.0,
    tex_guidance_strength=1.0, tex_guidance_rescale=0.0, tex_sampling_steps=12, tex_rescale_t=3.0,
)


def check(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)
    print(f"  ✓ {message}")


def check_previewer_html(html: str) -> None:
    check(html.count("previewer-main-image") == len(MODES) * STEPS,
          f"önizleyici {len(MODES) * STEPS} kare içeriyor")
    check(html.count("mode-btn") == len(MODES), f"{len(MODES)} render modu düğmesi var")
    check(f'id="view-m{DEFAULT_MODE}-s{DEFAULT_STEP}" class="previewer-main-image visible"' in html,
          "açılışta yalnız varsayılan mod/görüş görünür")
    check(html.count("visible") == 1, "tek bir kare görünür durumda")


def check_glb(path: str) -> None:
    check(os.path.isfile(path), f"GLB dosyası yazıldı: {os.path.basename(path)}")
    with open(path, "rb") as handle:
        magic, version, length = struct.unpack("<III", handle.read(12))
    check(magic == 0x46546C67 and version == 2, "GLB başlığı geçerli (glTF v2)")
    check(length == os.path.getsize(path), "GLB uzunluk alanı dosya boyutuyla uyumlu")


def main() -> int:
    settings = Settings(mock=True)
    demo, handlers = create_panel(settings)
    check(demo is not None, "arayüz kuruldu")

    print("\nMetin → 3B:")
    state, html, preview_image, status = handlers.generate(
        "text", None, "cilalı seramik bir vazo", **DEFAULT_ARGS
    )
    check(isinstance(preview_image, Image.Image), "ara görsel üretildi")
    check(state.get("seed") == DEFAULT_ARGS["seed"], "seed duruma yazıldı")
    check("metin" in status, "durum çubuğu kaynağı bildiriyor")
    check_previewer_html(html)

    print("\nGörsel → 3B:")
    source = Image.new("RGB", (640, 480), (180, 120, 90))
    processed = handlers.preprocess_image(source)
    check(processed.size == (518, 518), "yüklenen görsel ön işlendi")
    state2, html2, preview2, status2 = handlers.generate(
        "image", processed, "", **DEFAULT_ARGS
    )
    check(preview2 is None, "görsel modunda ara görsel üretilmiyor")
    check("görsel" in status2, "durum çubuğu kaynağı bildiriyor")
    check_previewer_html(html2)

    print("\nGLB dışa aktarma:")
    glb_path, download_path, glb_status = handlers.extract_glb(state2, 500000, 2048)
    check(glb_path == download_path, "indirme düğmesi aynı dosyayı gösteriyor")
    check("GLB hazır" in glb_status, "durum çubuğu GLB'yi bildiriyor")
    check_glb(glb_path)

    print("\nHata durumları:")
    for source_name, payload in (("text", ""), ("image", None)):
        try:
            handlers.generate(source_name, None, payload, **DEFAULT_ARGS)
        except Exception as exc:  # gr.Error
            check("Önce" in str(exc), f"boş {source_name} girdisi anlaşılır hata veriyor")
        else:
            raise AssertionError(f"boş {source_name} girdisi hata vermeliydi")

    print(f"\nTüm denetimler geçti. Geçici dosyalar: {TMP_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
