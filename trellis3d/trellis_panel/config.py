"""Panel yapılandırması: modlar, çözünürlükler ve çalışma zamanı ayarları."""

from __future__ import annotations

import os
from dataclasses import dataclass, field
from typing import Dict, List

import numpy as np

# Gradio'nun seed kaydırıcısı için üst sınır (TRELLIS.2 app.py ile aynı).
MAX_SEED = int(np.iinfo(np.int32).max)

PANEL_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TMP_DIR = os.path.join(PANEL_DIR, "tmp")

# Önizleyicideki görüş açısı sayısı ve açılıştaki seçili durum.
STEPS = 8
DEFAULT_MODE = 3
DEFAULT_STEP = 3

# Önizleyicinin render modları. `render_key`, TRELLIS.2 PbrMeshRenderer'ın
# döndürdüğü anahtarlarla birebir eşleşir; `color` yalnızca ikon üretimi içindir.
MODES: List[Dict] = [
    {"name": "Normal", "render_key": "normal", "color": (126, 148, 232)},
    {"name": "Kil (clay)", "render_key": "clay", "color": (198, 186, 172)},
    {"name": "Taban rengi", "render_key": "base_color", "color": (226, 138, 96)},
    {"name": "HDRI orman", "render_key": "shaded_forest", "color": (86, 140, 92)},
    {"name": "HDRI gün batımı", "render_key": "shaded_sunset", "color": (232, 146, 72)},
    {"name": "HDRI avlu", "render_key": "shaded_courtyard", "color": (140, 158, 178)},
]

# Radio etiketinden pipeline tipine.
RESOLUTIONS = ["512", "1024", "1536"]
PIPELINE_TYPES = {
    "512": "512",
    "1024": "1024_cascade",
    "1536": "1536_cascade",
}

# HDRI ortam haritaları (yalnız gerçek motorda kullanılır).
ENVMAPS = {
    "forest": "assets/hdri/forest.exr",
    "sunset": "assets/hdri/sunset.exr",
    "courtyard": "assets/hdri/courtyard.exr",
}


def _env_flag(name: str, default: bool = False) -> bool:
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in ("1", "true", "yes", "on", "evet")


@dataclass
class Settings:
    """Panelin çalışma zamanı ayarları (ortam değişkenleriyle geçersiz kılınır)."""

    # TRELLIS.2 deposunun kökü: HDRI'lar, örnek görseller ve ikonlar buradan okunur.
    trellis_root: str = field(
        default_factory=lambda: os.environ.get("TRELLIS2_ROOT", os.getcwd())
    )
    # Hugging Face model kimlikleri.
    model: str = field(
        default_factory=lambda: os.environ.get("TRELLIS2_MODEL", "microsoft/TRELLIS.2-4B")
    )
    text_to_image_model: str = field(
        default_factory=lambda: os.environ.get(
            "TRELLIS2_T2I_MODEL", "stabilityai/stable-diffusion-xl-base-1.0"
        )
    )
    # GPU'suz makinelerde arayüzü denemek için sahte motor.
    mock: bool = field(default_factory=lambda: _env_flag("TRELLIS2_PANEL_MOCK"))
    host: str = field(default_factory=lambda: os.environ.get("TRELLIS2_PANEL_HOST", "127.0.0.1"))
    port: int = field(default_factory=lambda: int(os.environ.get("TRELLIS2_PANEL_PORT", "7860")))
    share: bool = field(default_factory=lambda: _env_flag("TRELLIS2_PANEL_SHARE"))

    def path(self, *parts: str) -> str:
        """TRELLIS.2 deposu içindeki bir yolu mutlak hale getirir."""
        return os.path.join(self.trellis_root, *parts)
