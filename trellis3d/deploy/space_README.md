---
title: {title}
emoji: ✦
colorFrom: indigo
colorTo: purple
sdk: docker
app_port: 7860
pinned: false
short_description: TRELLIS.2 ile metinden ve görselden 3B model üretimi
---

# TRELLIS.2 Paneli — Metin → 3B ve Görsel → 3B

Bu Space, [{repo}](https://github.com/{repo}) deposundaki `trellis3d/` panelinden
otomatik olarak dağıtılır. Kaynak commit: `{sha}`.

* **Metin → 3B** — istemden tek nesneli bir görsel üretilir, ardından TRELLIS.2
  ile 3B varlığa dönüştürülür.
* **Görsel → 3B** — yüklenen görsel ön işlenip doğrudan TRELLIS.2'ye verilir.
* Sonuç 6 render modunda önizlenir ve dokulu `.glb` olarak indirilir.

## Donanım

Gerçek üretim için Space'in **GPU donanımı** ile çalışması gerekir
(≥24 GB VRAM; L4, L40S, A10G-large veya A100). Settings → Hardware bölümünden
seçilir. İlk derleme, CUDA uzantıları kaynaktan derlendiği için uzun sürer.

## Demo modu

Space ayarlarında `TRELLIS2_PANEL_MOCK=1` değişkeni tanımlanırsa panel GPU
olmadan, yer tutucu çıktılarla açılır; yalnız arayüzü denemek içindir.

Değişiklikler `main` dalına gittiğinde bu Space otomatik güncellenir.
