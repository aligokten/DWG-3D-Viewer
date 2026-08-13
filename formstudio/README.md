# FORMstudio — parametrik 3B obje modelleme

Tarayıcıda çalışan, oturum gerektirmeyen parametrik modelleme aracı. Bir **profil
eğrisi** çizersiniz, uygulama onu eksen etrafında döndürüp (revolve) üstüne
biçim ve doku deformasyonları uygular; sonucu **STL / OBJ** olarak ya da doğrudan
3B yazıcı için **vazo modu G-code** olarak indirirsiniz.

Hazır başlangıçlar: **vazo, saksı, kase, aydınlatma armatürü, kupa**.

## Çalıştırma

```bash
cd formstudio
npm install
npm run dev        # geliştirme sunucusu
npm run build      # statik çıktı: dist/
npm run verify     # geometri + G-code doğrulaması
npm run typecheck
```

`main` dalına yapılan her değişiklikte GitHub Actions uygulamayı derleyip
`https://<kullanici>.github.io/DWG-3D-Viewer/studio/` adresine yayınlar.

## Panolar

| Sekme | İçerik |
|-------|--------|
| **Profil** | Eğri editörü (nokta ekle/taşı/sil), yükseklik, azami yarıçap, cidar ve taban kalınlığı, saksı su deliği |
| **Biçim** | Çokgen kesit + köşe yuvarlatma, lob sayısı/genliği, burulma, ağ çözünürlüğü |
| **Doku** | Dikey dalga (spiral kaymalı), nervür, gürültü/pürüz |
| **Kafes** | Satır (yükseklik) × sütun (açı) ızgarası; hücreleri boyayarak yüzeyi yerel olarak dışarı/içeri iter |
| **Baskı** | Nozul, katman yüksekliği, çizgi genişliği, hız, sıcaklıklar, tabla ölçüsü; filament/süre tahmini |
| **Görünüm** | Alt/üst renk geçişi, baskı katman çizgileri, tel kafes, otomatik döndürme, PNG anlık görüntü |

Kısayollar: `Ctrl+Z` geri al, `Ctrl+Shift+Z` ileri al. Profil editöründe boşluğa
tıklamak nokta ekler, `Alt+tık` (veya sağ tık) siler. Proje `.json` olarak dışa
aktarılır/geri yüklenir ve çalışma otomatik olarak tarayıcıya kaydedilir.

## Modelin kurgusu

```
src/core/profile.ts    kontrol noktalarından Catmull-Rom profil eğrisi, r(z) tablosu
src/core/deform.ts     çokgen kesit, loblar, burulma, dalga, nervür, gürültü, kafes
src/core/geometry.ts   dış yüzey + iç yüzey + taban + ağız kenarı => kapalı kabuk
src/core/presets.ts    obje türleri
src/export/stl.ts      ikili STL
src/export/obj.ts      Wavefront OBJ
src/export/gcode.ts    vazo modu G-code + baskı tahmini
tools/verify.ts        kapalı yüzey (manifold), hacim ve G-code doğrulaması
```

Üretilen kabuk **su geçirmez (watertight)**: her kenar tam olarak iki üçgen
tarafından ters yönde paylaşılır — bu `npm run verify` ile her derlemede
sınanır, yani STL doğrudan dilimleyiciye verilebilir.

Cidar ofseti profil eğiminin kosinüsüyle düzeltilir, böylece eğik duvarlarda da
gerçek kalınlık korunur. Taban kalınlığı `0` yapılırsa obje alttan açılır
(abajur/armatür gövdesi); saksılarda taban ortasına drenaj deliği açılabilir.

## G-code hakkında

Çıktı Marlin uyumludur ve “vazo modu” mantığıyla üretilir: önce dolu taban
katmanları (eşmerkezli halkalar), ardından Z’si sürekli yükselen **tek duvarlı
spiral**. Bu yüzden baskı, modeldeki cidar kalınlığından bağımsız olarak tek
çizgi genişliğindedir. Kalın cidarlı bir baskı istiyorsanız `.stl` dosyasını
kendi dilimleyicinize verin.

Yazıcınızın başlangıç/bitiş makrosu farklıysa dosyanın baş ve son bloklarını
düzenleyin; kalan hareketler standart `G0/G1` komutlarıdır.
