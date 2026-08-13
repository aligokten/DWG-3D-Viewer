# DWG 3D Viewer — Mimari3D + FORMstudio

Bu depo iki ayrı aracı barındırır:

1. **Mimari3D** — AutoCAD çizimlerinden (`.dwg` / `.dxf`) 3B model ve A3 PDF portföy.
2. **FORMstudio** — parametrik 3B obje modelleme (saksı, vazo, kase, aydınlatma
   armatürü); `formstudio/` klasörü, yayın adresi `…/DWG-3D-Viewer/studio/`.

| Klasör             | Sürüm    | Girdi        | Çıktı |
|--------------------|----------|--------------|-------|
| `desktop/mimari3d` | Masaüstü (Windows `.exe`) | `.dwg` + `.dxf` | 3B görünümler, `.obj`, A3 PDF |
| `web3d`            | Web (bağımsız statik sayfa) | `.dxf` | Canlı 3B önizleme, `.obj`, A3 PDF |
| `formstudio`       | Web (bağımsız statik sayfa) | — (parametrik) | 3B önizleme, `.stl`, `.obj`, `.gcode` |

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
