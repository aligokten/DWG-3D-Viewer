# İmar Hesap — Archicad 29 Eklentisi

Planlı Alanlar İmar Yönetmeliği'ne göre mimari projeden **otomatik hesap tabloları**
üreten bir Archicad 29 C++ Add-On'u (native `.apx` / `.bundle`).

Eklenti projedeki **Alan (Zone)** elemanlarını okur, aşağıdaki tabloları hesaplar ve
Archicad'in kendi arayüzüne uyumlu **sade bir palette** (yan panel) gösterir:

| # | Tablo | İçerik |
|---|-------|--------|
| 1 | **Emsal Hesabı** | Emsale dahil/harici alan, emsal hakkı, kullanılan KAKS, kalan hak, TAKS özeti, uygunluk durumu |
| 2 | **Emsal Tablosu** | Kat bazında emsale dahil / emsal harici / kat toplamı |
| 3 | **Yapı İnşaat Alanı Tablosu** | Bodrum dahil tüm katların brüt inşaat alanı toplamı |
| 4 | **Kat İrtifakı (Arsa Payı) Tablosu** | Bağımsız bölümler ve brüt alanla orantılı arsa payı (/1000) |
| 5 | **Otopark Hesabı** | Kullanıma göre gerekli otopark adedi |
| 6 | **Sığınak Hesabı** | Bağımsız bölüm sayısı, zorunluluk, gerekli sığınak alanı |

Sonuçlar palette görüntülenir ve **CSV** olarak (Türkçe Excel uyumlu, UTF-8 BOM'lu)
dışa aktarılabilir.

---

## Mimari (neden bu yapı?)

Kod bilinçli olarak iki katmana ayrılmıştır:

```
Src/
  ImarTypes.hpp        SAF veri tipleri (STL, ArchiCAD'den bağımsız)
  ImarCalc.hpp/.cpp    SAF hesap motoru  ← asıl değer; test edilmiştir
  ProjectReader.*      ArchiCAD Zone (Alan) okuma katmanı (ACAPinc.h'ye bağlı)
  ImarPalette.*        DG modeless palette arayüzü
  AddOnMain.cpp        Menü + palet kaydı + zorunlu 4 fonksiyon
  APIEnvir.h, ImarPrecompiledHeader.hpp, ResourceIds.hpp
RINT/
  AddOn.grc            Menü + palet + metin kaynakları
Test/
  test_imarcalc.cpp    Motorun ArchiCAD'siz birim testi
```

**Hesap motoru (`ImarCalc`) ArchiCAD API'sinden tamamen bağımsızdır** ve yalnızca
standart C++ kullanır. Bu sayede:

- ArchiCAD olmadan, herhangi bir makinede derlenip **test edilebilir** (aşağıya bakınız).
- Yönetmelik/belediye parametreleri değiştiğinde revizyonu kolaydır.
- ArchiCAD tarafı (Zone okuma + palet) yalnızca bu motoru besleyen ince bir katmandır.

### Test durumu

`Test/test_imarcalc.cpp`, motorun tüm hesaplarını örnek bir proje üzerinde doğrular
(Emsal, TAKS, YİA, Kat İrtifakı, Otopark, Sığınak ve sayı biçimlendirme). Bu testler
bu depoda **derlenip çalıştırılarak geçtiği doğrulanmıştır**:

```bash
cd archicad-imar-eklentisi/Test
g++ -std=c++17 -Wall -Wextra -I../Src test_imarcalc.cpp ../Src/ImarCalc.cpp -o test_imarcalc
./test_imarcalc      # -> "TUM TESTLER GECTI."
```

> **Not:** ArchiCAD'e bağlı katmanlar (`ProjectReader`, `ImarPalette`, `AddOnMain`,
> `RINT/AddOn.grc`) yalnızca Archicad 29 DevKit ile derlenebildiğinden bu Linux
> ortamında **derlenememiştir**. Bunlar dokümante edilmiş AC29 API desenlerine göre
> yazılmıştır; ilk derlemede özellikle DG palet ve `.grc` kısımlarında küçük imza
> düzeltmeleri gerekebilir (bkz. "Bilinen riskli noktalar").

---

## Derleme ve kurulum (Archicad 29)

### Gereksinimler

- **Windows + Visual Studio 2022** (veya macOS + Xcode)
- **Archicad 29 API Development Kit** (Graphisoft geliştirici sayfasından)
- **CMake ≥ 3.19**, **Python 3** (şablonun build script'i için)

### En kolay yol — resmi CMake şablonuna yerleştirme

Bu proje, GRAPHISOFT'un resmi
[archicad-addon-cmake](https://github.com/GRAPHISOFT/archicad-addon-cmake) şablonuyla
**aynı yapıyı** kullanır (aynı `CMakeLists.txt`, `config.json`, `Src/`, `RINT/`
düzeni). Şablonun `Tools/` submodülü tüm CMake altyapısını sağlar.

```bash
# 1) Şablonu submodülleriyle birlikte klonla (Tools/ gelir)
git clone --recursive https://github.com/GRAPHISOFT/archicad-addon-cmake.git ImarHesap
cd ImarHesap

# 2) Bu depodaki dosyaları şablonun üzerine kopyala:
#    - config.json           -> ImarHesap/config.json
#    - CMakeLists.txt         -> ImarHesap/CMakeLists.txt
#    - Src/ (tüm içerik)      -> ImarHesap/Src/   (şablonun örnek Src'ini değiştir)
#    - RINT/AddOn.grc         -> ImarHesap/RINT/AddOn.grc
#    (Test/ opsiyoneldir, kopyalanabilir.)

# 3) DevKit yolunu ayarla ve derle
set AC_API_DEVKIT_DIR=C:\API Development Kit 29.<build-no>
mkdir Build && cd Build
cmake -G "Visual Studio 17 2022" -A x64 -DAC_VERSION=29 -DAC_API_DEVKIT_DIR="%AC_API_DEVKIT_DIR%" ..
cmake --build . --config Release
```

Derleme sonunda `Build/` altında **`ImarHesap.apx`** (Windows) veya
**`ImarHesap.bundle`** (macOS) oluşur.

### Eklentiyi Archicad'e yükleme

1. Archicad 29'u açın.
2. **Seçenekler → Eklenti Yöneticisi (Add-On Manager)**.
3. "Kullanılabilir Eklentileri Düzenle" → oluşturulan `.apx`/`.bundle` dosyasını ekleyin.
4. Archicad'i yeniden başlatın.
5. Menüden **İmar Hesap Paleti...** komutuyla paleti açın.

---

## Kullanım

1. Paleti açın (menüden **İmar Hesap Paleti...**).
2. Üstteki alanlara **Ada, Parsel, Arsa Alanı (m²), KAKS (Emsal), TAKS** girin.
3. **Hesapla / Yenile** butonuna basın — eklenti projedeki tüm Alanları okur ve
   6 tabloyu üretir.
4. Sol listeden bir tablo seçin, sağ tarafta detayını görün.
5. **CSV Dışa Aktar** ile tabloları kaydedin.

### Alanların sınıflandırılması (emsale dahil / hariç)

Eklenti, her Alanın **Alan Kategorisi** ve adına göre otomatik sınıflandırma yapar
(`ProjectReader::Siniflandir`). Örnek varsayılanlar:

- **Emsal harici:** sığınak, otopark, teknik/tesisat hacmi, su deposu, asansör,
  merdiven, ışıklık, ortak koridor/hol, depo …
- **Emsale dahil + Ticari:** dükkan, mağaza, market …
- **Emsale dahil + Ofis:** ofis, büro …
- **Emsale dahil + Konut:** daire, konut, mesken (ve genel konut mahalleri).

Bu eşlemeler `Src/ProjectReader.cpp` içinde tek yerde toplanmıştır ve projenizin
Alan Kategorisi isimlerine göre kolayca revize edilir.

---

## Bilinen riskli noktalar (ilk derlemede kontrol edin)

Aşağıdaki noktalar AC29 DevKit'i olmadan doğrulanamadı; ilk derlemede hata verirse
DevKit başlıklarına göre hizalayın:

- **`.grc` diyalog söz dizimi** (`RINT/AddOn.grc`): özellikle `SingleSelList`,
  `TextEdit`, `RealEdit` item parametreleri Archicad GRC referansına göre ufak
  farklılık gösterebilir.
- **DG palet imzaları** (`ImarPalette.cpp`): `DG::SingleSelListBox` çok sütun
  (`SetTabFieldCount`, `SetTabFieldProperties`, `SetTabItemText`) ve
  `DG::Palette` yapıcısı sürüme göre değişebilir.
- **Zone okuma** (`ProjectReader.cpp`): `element.zone.catName/roomName/roomNoStr`
  alan adları ve `ACAPI_ProjectSetting_GetStorySettings` imzası DevKit ile teyit edilmeli.
- **`ACAPI_RegisterModelessWindow`** bayrak sabitleri (`API_PalEnabled_*`) sürümle
  değişebilir.

Hesap motoru (`ImarCalc` + `ImarTypes`) bu risklerden bağımsızdır ve test edilmiştir.

---

## Yönetmelik parametreleri ve varsayımlar

- **Emsal (KAKS)** = Emsale dahil inşaat alanı / Parsel alanı (PAİY Madde 4).
- **TAKS** = Taban alanı / Parsel alanı. Taban alanı, zemin kat (index 0) emsale
  dahil alanlardan hesaplanır.
- **Yapı inşaat alanı** = bodrum dahil tüm katların brüt alanı toplamı (PAİY Madde 4).
- **Emsale dahil/harici** ayrımı PAİY Madde 5 pratiğine göre kategori bazlıdır.
- **Otopark** oranları ulusal Otopark Yönetmeliği baz alınarak varsayılan verilmiştir
  (konut: 1/daire, ticari: 1/30 m², ofis: 1/40 m²) — belediye plan notlarına göre
  `VarsayilanOtoparkKurallari()` üzerinden revize edilir.
- **Sığınak** eşiği (varsayılan >12 bağımsız bölüm), yöntemi (nüfus/alan yüzdesi) ve
  katsayıları `SiginakParametreleri` içinde parametriktir; Sığınak Yönetmeliği'ne göre
  teyit edilmelidir.

Bu varsayımlar bilinçli olarak **tek yerde ve parametrik** tutulmuştur; birlikte
revizyonlarla belediyenize/plan notlarınıza göre son haline getirebiliriz.

---

## Sonraki revizyon fikirleri

- Parametrelerin (arsa alanı, KAKS, TAKS) proje bilgisinden/otomatik okunması.
- Alan Kategorisi → emsal eşlemesinin palet üzerinden düzenlenebilmesi.
- Tabloların doğrudan bir **Layout paftasına** yerleştirilmesi.
- Ortak alan emsal muafiyeti oranı gibi PAİY Madde 5 detaylarının eklenmesi.
- Belediye bazlı otopark/sığınak profil setleri.
