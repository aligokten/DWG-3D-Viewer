# DWG 3D Viewer — Mimari3D

AutoCAD mimari çizimlerini (`.dwg` / `.dxf`) inceleyip **3B model** ve **A3 yatay
PDF proje portföyü** üreten araç. İki sürümüyle birlikte gelir:

| Klasör             | Sürüm    | Girdi        | Çıktı |
|--------------------|----------|--------------|-------|
| `desktop/mimari3d` | Masaüstü (Windows `.exe`) | `.dwg` + `.dxf` | 3B görünümler, `.obj`, A3 PDF |
| `web3d`            | Web (bağımsız statik sayfa) | `.dxf` | Canlı 3B önizleme, `.obj`, A3 PDF |
| `site`             | Web (tanıtım sitesi) | — | Mimarlık ofisi için 3B animasyonlu vitrin |

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

`.github/workflows/web3d.yml`, `main` dalına yapılan her değişiklikte iki web
uygulamasını birden derleyip **GitHub Pages'e yayınlar**:

- `https://aligokten.github.io/DWG-3D-Viewer/` — tanıtım sitesi (`site/`)
- `https://aligokten.github.io/DWG-3D-Viewer/viewer/` — DXF aracı (`web3d/`)

Ayrıntı: `web3d/README.md`.

## Tanıtım sitesi (`site`)

Mimari tasarım ofisi için Three.js ile yazılmış, kaydırmaya bağlı kamera
geçişleri olan 3B animasyonlu vitrin sitesi: mat antrasit boşluk üzerinde
parlayan altın tel-kafes maketler, raycaster ile proje kartları ve DXF aracına
bağlantı. Ayrıntı: `site/README.md`.

```bash
cd site
npm install
npm run dev       # geliştirme
npm run build     # statik çıktı: dist/
```

## Neden web yalnızca DXF?

`.dwg` kapalı bir formattır ve tarayıcıda doğrudan okunamaz. AutoCAD'de DXF olarak
kaydedin ya da `.dwg` için masaüstü sürümünü kullanın.
