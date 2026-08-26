# DWG 3D Viewer — Mimari3D + FORMstudio

Bu depo üç ayrı aracı barındırır:

1. **Mimari3D** — AutoCAD çizimlerinden (`.dwg` / `.dxf`) 3B model ve A3 PDF portföy.
2. **FORMstudio** — parametrik 3B obje modelleme (saksı, vazo, kase, aydınlatma
   armatürü); `formstudio/` klasörü, yayın adresi `…/DWG-3D-Viewer/studio/`.
3. **TRELLIS.2 Paneli** — metinden ve görselden yapay zekâ ile 3B model üretimi
   (`trellis3d/`, GPU'lu sunucuda çalışan Gradio paneli).

| Klasör             | Sürüm    | Girdi        | Çıktı |
|--------------------|----------|--------------|-------|
| `desktop/mimari3d` | Masaüstü (Windows `.exe`) | `.dwg` + `.dxf` | 3B görünümler, `.obj`, A3 PDF |
| `web3d`            | Web (bağımsız statik sayfa) | `.dxf` | Canlı 3B önizleme, `.obj`, A3 PDF |
| `formstudio`       | Web (bağımsız statik sayfa) | — (parametrik) | 3B önizleme, `.stl`, `.obj`, `.gcode` |
| `trellis3d`        | Yerel sunucu (Gradio, NVIDIA GPU) | metin veya görsel | PBR önizleme, dokulu `.glb` |

## Masaüstü sürümü (`desktop/mimari3d`)

Windows'ta tek dosyalık `.exe`. `.dwg` okumak için (ücretsiz) ODA File Converter
kullanır; `.dxf` için ek araç gerekmez.

```bat
cd desktop\mimari3d
build_windows.bat        REM -> dist\Mimari3D.exe
```

Ya da GitHub **Actions → "Mimari3D Windows EXE"** iş akışını çalıştırıp üretilen
exe'yi **Artifacts**'tan indirin. Ayrıntı: `desktop/mimari3d/README.md`.

## Web sürümü (`web3d`)

Tarayıcıda çalışan, oturum gerektirmeyen bağımsız sayfa. Dosya sunucuya gitmez.

```bash
cd web3d
npm install
npm run dev       # geliştirme
npm run build     # statik çıktı: dist/  -> herhangi bir statik barındırmaya
```

`.github/workflows/web3d.yml`, `main` dalına yapılan her değişiklikte web
sürümünü derleyip **GitHub Pages'e yayınlar**:
`https://aligokten.github.io/DWG-3D-Viewer/`. Ayrıntı: `web3d/README.md`.

## FORMstudio (`formstudio`)

Profil eğrisini çizip eksen etrafında döndürerek (revolve) parametrik obje üretir:
çokgen kesit, loblar, burulma, dikey dalga, nervür, pürüz ve kafes (lattice)
deformasyonu. Çıktı: baskıya hazır kapalı `.stl`, `.obj` ve 3B yazıcı için
**vazo modu `.gcode`**.

```bash
cd formstudio
npm install
npm run dev       # geliştirme
npm run verify    # geometri (su geçirmezlik) ve G-code doğrulaması
npm run build     # statik çıktı: dist/
```

Yayın adresi: `https://aligokten.github.io/DWG-3D-Viewer/studio/`.
Ayrıntı: `formstudio/README.md`.

## Neden web yalnızca DXF?

`.dwg` kapalı bir formattır ve tarayıcıda doğrudan okunamaz. AutoCAD'de DXF olarak
kaydedin ya da `.dwg` için masaüstü sürümünü kullanın.

## TRELLIS.2 Paneli (`trellis3d`)

Microsoft TRELLIS.2 ile **metinden 3B** ve **görselden 3B** model üreten Gradio
paneli. Metin akışı önce istemden tek nesneli bir görsel üretir, sonra bu
görselden 3B varlık çıkarır. Çıktı: 6 render modunda önizleme ve dokulu `.glb`.

```bash
cd trellis3d
pip install -r requirements.txt
python app.py --mock                       # GPU'suz arayüz denemesi
TRELLIS2_ROOT=/yol/TRELLIS.2 python app.py  # gerçek üretim (Linux + NVIDIA GPU)
```

Gerçek üretim TRELLIS.2 kurulumunu gerektirir (Linux, CUDA 12.4, ≥24 GB VRAM).
Ayrıntı: `trellis3d/README.md`.

**Dağıtım:** `main` dalındaki her `trellis3d/**` değişikliği, GitHub Actions ile
GPU'lu bir Hugging Face Space'e yüklenir (`.github/workflows/deploy-hf-space.yml`).
Tek seferlik ayarlar ve kendi sunucunuzda Docker ile çalıştırma:
`trellis3d/deploy/README.md`.
