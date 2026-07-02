# Mimari3D Web — Bağımsız Sayfa

AutoCAD ile çizilmiş mimari çizimi (`.dxf`) **tarayıcıda** inceleyip:

1. **3B model** üretir (duvar/kolon/pencere yükseltilir) — döndürülebilir canlı
   önizleme + indirilebilir `.obj` dosyası.
2. **A3 yatay PDF proje portföyü** oluşturur — kapak, proje bilgileri +
   istatistikler, 2B plan ve 3B görünümler, her sayfada antet.

Bu, mimarlık ofisi uygulamasından **tamamen bağımsız**, tek başına
dağıtılabilen statik bir sayfadır. Oturum/giriş gerektirmez ve **hiçbir dosya
sunucuya gönderilmez** — tüm işlem kullanıcının tarayıcısında yapılır.

## Çalıştırma (geliştirme)

```bash
cd web3d
npm install
npm run dev        # http://localhost:5173
```

## Statik build

```bash
npm run build      # çıktı: dist/  (index.html + assets)
npm run preview    # üretim çıktısını yerelde önizle
```

`vite.config.ts` içinde `base: "./"` olduğundan `dist/` klasörü **herhangi bir
statik sunucuda veya alt yolda** çalışır:

- **GitHub Pages / Netlify / Vercel / Cloudflare Pages:** `dist/` klasörünü yükleyin.
- **Kendi sunucunuz:** `dist/` içeriğini herhangi bir statik dizine kopyalayın.

## Online yayın (GitHub Pages)

Depodaki GitHub Actions iş akışı (`.github/workflows/web3d.yml`) `main` dalına
yapılan her `web3d/**` değişikliğinde siteyi derleyip **GitHub Pages'e yayınlar**.

Yayın adresi (proje sitesi): `https://<kullanıcı>.github.io/<depo>/`
(bu depo için: `https://aligokten.github.io/DWG-3D-Viewer/`).

İlk yayında Pages otomatik etkinleştirilmeye çalışılır. Etkinleşmezse depoda
**Settings → Pages → Build and deployment → Source: "GitHub Actions"** seçin ve
iş akışını **Actions** sekmesinden `Run workflow` ile tetikleyin.

## Kullanım

1. `.dxf` dosyanızı seçin (DWG ise AutoCAD'de "Farklı Kaydet → DXF").
2. Duvar yüksekliği/kalınlığı ve proje adını ayarlayın.
3. 3B modeli fareyle döndürerek inceleyin.
4. **A3 PDF Portföy** veya **3B Model (.obj)** olarak indirin.

## Neden yalnızca DXF?

`.dwg` kapalı bir formattır ve tarayıcıda doğrudan okunamaz. AutoCAD'de DXF
olarak kaydedin ya da `.dwg` desteği için `desktop/mimari3d` masaüstü sürümünü
(ODA File Converter ile) kullanın.

## Yapı

| Dosya                | Görev                                       |
|----------------------|---------------------------------------------|
| `src/App.tsx`        | Sayfa arayüzü (yükleme, ayarlar, indirme)   |
| `src/model3d/dxf.ts` | DXF ayrıştırma + eleman/bilgi çıkarımı      |
| `src/model3d/build3d.ts` | three.js 3B model, önizleme, OBJ        |
| `src/model3d/plan2d.ts`  | 2B plan (canvas)                        |
| `src/model3d/pdf.ts` | A3 yatay PDF portföy (jsPDF)                |
