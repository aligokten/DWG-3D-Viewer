# SAGG+ — Animasyonlu Tanıtım Sitesi + Yönetim Paneli

[www.saggplus.com](https://www.saggplus.com) için hazırlanan animasyonlu landing page
ve içerik yönetim paneli. Tamamen **statik**tir; derleme/sunucu gerektirmez, her
statik barındırmada (GitHub Pages, kendi hosting'iniz, Netlify vb.) çalışır.

## Dosyalar

```
saggplus/
├── index.html          animasyonlu ana sayfa
├── admin.html          yönetim paneli (proje + içerik yönetimi)
├── css/style.css       tasarım
├── js/main.js          animasyonlar ve içerik yükleme
├── data/site.json      düzenlenebilir site metinleri
├── data/projects.json  proje listesi
└── assets/             proje görselleri (yüklenenler assets/uploads/ altına gider)
```

## Yayın adresi

`main` dalına yapılan her push sonrası GitHub Actions siteyi otomatik yayınlar:

**https://aligokten.github.io/DWG-3D-Viewer/saggplus/**
(yönetim paneli: `.../saggplus/admin.html`)

## Yönetim paneli nasıl çalışır?

Panel, değişiklikleri **GitHub deposuna commit ederek** kaydeder; site otomatik
yeniden yayınlanır. Ek bir sunucu ya da veritabanı yoktur.

### Giriş anahtarı (bir kez)

1. GitHub → **Settings → Developer settings → Personal access tokens →
   Fine-grained tokens → Generate new token**
2. **Repository access**: yalnızca `aligokten/DWG-3D-Viewer`
3. **Permissions → Repository permissions → Contents: Read and write**
4. Oluşan `github_pat_…` değerini `admin.html` giriş ekranına yapıştırın.
   "Beni hatırla" işaretlenirse anahtar yalnızca o tarayıcıda saklanır.

> `admin.html` herkese görünür olsa da token olmadan hiçbir değişiklik yapılamaz.
> Yazma yetkisi tamamen GitHub'ın kendi yetkilendirmesiyle korunur.

### Panelde yapabilecekleriniz

- **Projeler**: ekle / düzenle / sil / sırala; görsel yükle (otomatik olarak
  1600 px'e küçültülüp `assets/uploads/` altına kaydedilir).
- **Site içeriği**: hero başlıkları, hakkımızda, istatistikler, hizmetler,
  iletişim bilgileri ve alt bilgi metni.

Değişiklikler **"Yayınla"** butonlarıyla commit edilir ve 1–2 dakika içinde
siteye yansır.

## www.saggplus.com'a taşıma

Alan adınızı bu siteye yönlendirmek için iki seçenek:

1. **GitHub Pages + özel alan adı**: Depo Settings → Pages → Custom domain
   alanına `www.saggplus.com` yazın ve DNS'te `www` CNAME kaydını
   `aligokten.github.io` adresine yönlendirin. (Bu durumda sitenin kökte
   yayınlanması için ayrı bir depo ya da workflow düzenlemesi önerilir.)
2. **Kendi hosting'iniz**: `saggplus/` klasörünü olduğu gibi FTP ile kök dizine
   yükleyin. Panel yine GitHub deposuna yazacağı için, hosting'e yüklenen
   kopyayı güncel tutmak isterseniz ya periyodik senkronizasyon yapın ya da
   GitHub Pages seçeneğini tercih edin.

## Yerelde deneme

```bash
cd saggplus
python3 -m http.server 8080
# http://localhost:8080
```
