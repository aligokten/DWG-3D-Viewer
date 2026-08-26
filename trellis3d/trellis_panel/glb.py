"""Bağımlılıksız minimal GLB yazıcı (yalnız sahte/demo motoru için).

Gerçek üretimde GLB, TRELLIS.2'nin `o_voxel.postprocess.to_glb` çıktısıdır;
burada üretilen dosya sadece arayüzü ve indirme akışını GPU'suz denemek içindir.
"""

from __future__ import annotations

import json
import struct
from typing import Sequence

# Birim küp: köşeler ve üçgenler.
_VERTICES = [
    (-0.5, -0.5, -0.5), (0.5, -0.5, -0.5), (0.5, 0.5, -0.5), (-0.5, 0.5, -0.5),
    (-0.5, -0.5, 0.5), (0.5, -0.5, 0.5), (0.5, 0.5, 0.5), (-0.5, 0.5, 0.5),
]
_FACES = [
    (0, 1, 2), (0, 2, 3), (4, 6, 5), (4, 7, 6),
    (0, 4, 5), (0, 5, 1), (1, 5, 6), (1, 6, 2),
    (2, 6, 7), (2, 7, 3), (3, 7, 4), (3, 4, 0),
]


def _pad4(data: bytes, fill: bytes) -> bytes:
    remainder = len(data) % 4
    return data if remainder == 0 else data + fill * (4 - remainder)


def write_placeholder_glb(path: str, base_color: Sequence[float] = (0.8, 0.5, 0.3, 1.0)) -> str:
    """Tek kutudan oluşan geçerli bir GLB dosyası yazar ve yolunu döner."""
    indices = b"".join(struct.pack("<H", i) for face in _FACES for i in face)
    indices = _pad4(indices, b"\x00")
    positions = b"".join(struct.pack("<fff", *v) for v in _VERTICES)
    buffer = indices + positions

    gltf = {
        "asset": {"version": "2.0", "generator": "trellis3d-panel-mock"},
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": [{"mesh": 0}],
        "meshes": [{
            "primitives": [{"attributes": {"POSITION": 1}, "indices": 0, "material": 0}]
        }],
        "materials": [{
            "pbrMetallicRoughness": {
                "baseColorFactor": [float(c) for c in base_color],
                "metallicFactor": 0.1,
                "roughnessFactor": 0.6,
            }
        }],
        "accessors": [
            {
                "bufferView": 0, "componentType": 5123, "count": len(_FACES) * 3,
                "type": "SCALAR",
            },
            {
                "bufferView": 1, "componentType": 5126, "count": len(_VERTICES),
                "type": "VEC3", "min": [-0.5, -0.5, -0.5], "max": [0.5, 0.5, 0.5],
            },
        ],
        "bufferViews": [
            {"buffer": 0, "byteOffset": 0, "byteLength": len(indices), "target": 34963},
            {"buffer": 0, "byteOffset": len(indices), "byteLength": len(positions), "target": 34962},
        ],
        "buffers": [{"byteLength": len(buffer)}],
    }

    json_chunk = _pad4(json.dumps(gltf, separators=(",", ":")).encode("utf-8"), b" ")
    bin_chunk = _pad4(buffer, b"\x00")
    total = 12 + 8 + len(json_chunk) + 8 + len(bin_chunk)

    with open(path, "wb") as handle:
        handle.write(struct.pack("<III", 0x46546C67, 2, total))
        handle.write(struct.pack("<II", len(json_chunk), 0x4E4F534A))
        handle.write(json_chunk)
        handle.write(struct.pack("<II", len(bin_chunk), 0x004E4942))
        handle.write(bin_chunk)
    return path
