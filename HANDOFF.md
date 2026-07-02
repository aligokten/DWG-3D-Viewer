# DWG-3d-viewer deposuna aktarım

Bu klasör, `aligokten/DWG-3d-viewer` deposunun kök içeriğidir. İki yol var.

## Yol A — Kendi makinenizde push (en hızlı)

GitHub'da boş `DWG-3d-viewer` deposu oluşturun (README/gitignore EKLEMEDEN), sonra
bu klasörün içinde:

```bash
git init
git add .
git commit -m "Mimari3D: DWG/DXF 3B model ve A3 PDF portföy (masaüstü + web)"
git branch -M main
git remote add origin https://github.com/aligokten/DWG-3d-viewer.git
git push -u origin main
```

## Yol B — Yeni yetkili Claude oturumu

Claude Code oturumunu `aligokten/DWG-3d-viewer` deposuna erişecek şekilde açın,
bu klasörün içeriğini oturumun çalışma dizinine koyun (veya bu arşivi yükleyin) ve
"içeriği main dalına commit'leyip push et" deyin.

## İçerik

```
README.md                              genel bakış
desktop/mimari3d/                      Windows exe uygulaması (.dwg + .dxf)
web3d/                                 bağımsız web sayfası (.dxf)
.github/workflows/build-windows-exe.yml  exe'yi otomatik derler
.github/workflows/web3d.yml              web sayfasını derler (artifact)
```

İş akışı yolları `desktop/mimari3d/**` ve `web3d/**` olarak korunmuştur; klasör
yapısını değiştirmeden push ederseniz sorunsuz çalışır.
