"""Görsel yardımcıları: base64 gömme ve mod ikonları."""

from __future__ import annotations

import base64
import io
import os
from typing import Dict, List, Optional

from PIL import Image, ImageDraw

from .config import MODES, Settings


def image_to_base64(image: Image.Image, quality: int = 85) -> str:
    """PIL görselini `data:` URI'sine çevirir (TRELLIS.2 app.py ile aynı yaklaşım)."""
    buffered = io.BytesIO()
    image = image.convert("RGB")
    image.save(buffered, format="jpeg", quality=quality)
    return "data:image/jpeg;base64," + base64.b64encode(buffered.getvalue()).decode()


def _fallback_icon(color, size: int = 64) -> Image.Image:
    """TRELLIS.2 ikonları yoksa mod için düz renkli bir küre rozeti üretir."""
    icon = Image.new("RGB", (size, size), (24, 24, 27))
    draw = ImageDraw.Draw(icon)
    draw.ellipse((2, 2, size - 3, size - 3), fill=tuple(color))
    # Küresellik hissi veren küçük bir parlama.
    draw.ellipse((size * 0.22, size * 0.18, size * 0.46, size * 0.42), fill=(255, 255, 255))
    return icon


def mode_icons(settings: Settings) -> List[Dict]:
    """MODES listesini `icon_base64` alanıyla zenginleştirir."""
    modes: List[Dict] = []
    for mode in MODES:
        icon: Optional[Image.Image] = None
        # TRELLIS.2 deposu elimizdeyse orijinal ikonları kullan.
        candidate = settings.path("assets", "app", f"{mode['render_key'].replace('shaded_', 'hdri_')}.png")
        if os.path.isfile(candidate):
            try:
                icon = Image.open(candidate)
            except OSError:
                icon = None
        if icon is None:
            icon = _fallback_icon(mode["color"])
        modes.append({**mode, "icon_base64": image_to_base64(icon)})
    return modes


def example_images(settings: Settings, limit: int = 18) -> List[str]:
    """Sağ sütundaki örnek görselleri toplar; yoksa boş liste döner."""
    roots = [
        settings.path("assets", "example_image"),
        os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "example_image"),
    ]
    for root in roots:
        if not os.path.isdir(root):
            continue
        names = sorted(
            name for name in os.listdir(root)
            if name.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))
        )
        if names:
            return [os.path.join(root, name) for name in names[:limit]]
    return []
