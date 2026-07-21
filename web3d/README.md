# Mimari3D Web — Bağımsız Sayfa

Üst navigasyondan iki modül arasında geçiş yapılır:

- **🧊 3B Görüntüleyici** — DXF çizimini 3B modele ve A3 PDF portföye çevirir.
- **🏗️ Çelik İmalat Paneli** — çelik yapı imalatı için malzeme/maliyet/üretim
  yönetim paneli (aşağıda).

AutoCAD ile çizilmiş mimari çizimi (`.dxf`) **tarayıcıda** inceleyip:

1. **3B model** üretir (duvar/kolon/pencere yükseltilir) — döndürülebilir canlı
   önizleme + indirilebilir `.obj` dosyası.
2. **A3 yatay PDF proje portföyü** oluşturur — kapak, proje bilgileri +
   istatistikler, 2B plan ve 3B görünümler, her sayfada antet.

Bu, mimarlık ofisi uygulamasından **tamamen bağımsız**, tek başına
dağıtılabilen statik bir sayfadır. Oturum/giriş gerektirmez ve **hiçbir dosya
sunucuya gönderilmez** — tüm işlem kullanıcının tarayıcısında yapılır.

## 🏗️ Çelik İmalat Paneli

Çelik bina/yapı imalatı yapan bir işletme için malzeme, maliyet, işçilik,
üretim, sipariş ve şantiye dökümanlarını tek yerden yöneten panel. Veriler
yalnızca tarayıcıda (`localStorage`) tutulur; "Yedekle/Geri Yükle" ile JSON
olarak dışa/içe aktarılır.

**İki kullanım biçimi:**

1. **Uygulama içinde** — üst navigasyondaki "🏗️ Çelik İmalat Paneli"
   (React sürümü, `src/panel/`).
2. **Tek dosyalık koyu tema sürüm** — `public/celik-imalat-paneli.html`.
   Premium koyu (glassmorphism) arayüz; **kurulum/derleme gerektirmez**,
   dosyayı çift tıklayıp tarayıcıda açmanız yeterli. Site yayındaysa
   `https://aligokten.github.io/DWG-3D-Viewer/celik-imalat-paneli.html`
   adresinden de erişilir.

**Sekmeler:**

| Sekme | İşlev |
|-------|-------|
| 📋 **Malzeme Listesi** | TSE/EN katalogdan (IPE, HEA/HEB/HEM, NPI/NPU, köşebent, kutu profil, boru, sac, inşaat demiri, cıvata, kaynak sarfı, yüzey işlem) parça ekleme; poz, kalite, adet×boy, birim ağırlık, **fire %**, birim fiyat → net/brüt ağırlık ve maliyet. |
| 🔧 **İşçilik & Üretim** | Atölye işçiliği (₺/kg), montaj/vinç/nakliye/boya kalemleri; parça durumlarına göre üretim ilerleme takibi. |
| 💰 **Maliyet Özeti** | Fire, işçilik, genel gider, kâr, KDV kırılımı; ₺/kg birim fiyat; kategori bazında malzeme dağılımı. |
| 🛒 **Sipariş & Satın Alma** | BOM'dan fire dahil brüt ihtiyaç listesi; tedarikçi/sipariş kayıtları ve teslim durumu takibi. |
| 📄 **Şantiye Dökümanları** | Malzeme çekme listesi, imalat iş emri, teklif özeti ve teslim tutanağı — yazdır/PDF. |

**Fire hesabı:** her malzeme satırına kesim/optimizasyon kaybı yüzdesi girilir;
brüt (satın alınacak) ağırlık = net × (1 + fire/100). Fire, satın alma ihtiyacına
ve maliyete otomatik yansır.

**Malzeme standartları:** birim ağırlıklar TS EN 10365 (sıcak haddelenmiş
profiller), TS EN 10056-1 (köşebent), TS EN 10219 (kutu profil/boru),
TS 708 (nervürlü inşaat demiri) ve 7.85 g/cm³ çelik yoğunluğu esas alınır;
çelik kaliteleri TS EN 10025-2 (S235JR/S275JR/S355JR) ve TS 708 (B500C).
Katalog kaynağı `src/panel/catalog.ts` içinde güncellenebilir.

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

**Gereklilik:** Ücretsiz GitHub Pages yalnızca **public (herkese açık)** depolarda
çalışır (private için GitHub Pro/Team/Enterprise gerekir).

İş akışı, derlenen statik siteyi (`web3d/dist`) doğrudan **`gh-pages`** dalına
push eder (dala-dayalı yayın). Tek seferlik ayar:

**Settings → Pages → Build and deployment →**
- **Source:** "Deploy from a branch"
- **Branch:** `gh-pages` / klasör: `/ (root)`

Bir kez seçtikten sonra `main`'e her `web3d/**` push'unda site otomatik
güncellenir; dilerseniz **Actions** sekmesinden `Run workflow` ile de
tetikleyebilirsiniz.

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
| `src/Root.tsx`       | Üst kabuk: görüntüleyici ↔ panel geçişi     |
| `src/App.tsx`        | 3B görüntüleyici arayüzü                     |
| `src/model3d/dxf.ts` | DXF ayrıştırma + eleman/bilgi çıkarımı      |
| `src/model3d/build3d.ts` | three.js 3B model, önizleme, OBJ        |
| `src/model3d/plan2d.ts`  | 2B plan (canvas)                        |
| `src/model3d/pdf.ts` | A3 yatay PDF portföy (jsPDF)                |
| `src/panel/catalog.ts` | TSE/EN malzeme kataloğu + ağırlık formülleri |
| `src/panel/types.ts` | Panel veri modeli (proje, BOM, işçilik, satın alma) |
| `src/panel/calc.ts`  | Fire, ağırlık ve maliyet hesap fonksiyonları |
| `src/panel/store.ts` | localStorage kalıcılık (projeler)           |
| `src/panel/Panel.tsx` + `src/panel/tabs/` | Panel arayüzü ve sekmeler |
