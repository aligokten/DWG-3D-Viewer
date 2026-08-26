"""TRELLIS.2 paneli — giriş noktası.

Kullanım:
    python app.py                       # GPU'lu gerçek üretim
    python app.py --mock                # GPU'suz arayüz denemesi
    TRELLIS2_ROOT=/yol/TRELLIS.2 python app.py
"""

from __future__ import annotations

import argparse
import os

from trellis_panel.config import TMP_DIR, Settings
from trellis_panel.panel import create_panel


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="TRELLIS.2 metin/görsel → 3B paneli")
    parser.add_argument("--trellis-root", default=None, help="TRELLIS.2 deposunun kökü")
    parser.add_argument("--model", default=None, help="3B model kimliği (varsayılan: microsoft/TRELLIS.2-4B)")
    parser.add_argument("--t2i-model", default=None, help="Metin→görsel model kimliği")
    parser.add_argument("--mock", action="store_true", help="GPU'suz demo motoru")
    parser.add_argument("--host", default=None)
    parser.add_argument("--port", type=int, default=None)
    parser.add_argument("--share", action="store_true", help="Gradio paylaşım bağlantısı")
    return parser.parse_args()


def build_settings(args: argparse.Namespace) -> Settings:
    settings = Settings()
    if args.trellis_root:
        settings.trellis_root = args.trellis_root
    if args.model:
        settings.model = args.model
    if args.t2i_model:
        settings.text_to_image_model = args.t2i_model
    if args.mock:
        settings.mock = True
    if args.host:
        settings.host = args.host
    if args.port:
        settings.port = args.port
    if args.share:
        settings.share = True
    return settings


def main() -> None:
    args = parse_args()
    settings = build_settings(args)
    os.makedirs(TMP_DIR, exist_ok=True)
    demo, _ = create_panel(settings)
    demo.launch(
        server_name=settings.host,
        server_port=settings.port,
        share=settings.share,
        **getattr(demo, "panel_launch_kwargs", {}),
    )


if __name__ == "__main__":
    main()
