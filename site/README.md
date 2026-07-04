# Gökten Mimarlık — 3B Animasyonlu Tanıtım Sitesi

Mimari tasarım ofisi için Three.js ile yazılmış, tek sürekli 3B sahne üzerinde
kaydırmaya bağlı kamera geçişleriyle gezilen vitrin sitesi. Tasarım dili:
**mat antrasit boşluk + parlayan sıvı altın** aksanlar.

```bash
npm install
npm run dev        # geliştirme sunucusu
npm run build      # statik çıktı: dist/
npm run typecheck  # tsc --noEmit
```

## Sahne akışı

Kamera, kaydırma ilerlemesine bağlı beş kare (keyframe) arasında üstel
sönümlemeyle süzülür; tüm bölümler aynı dünyada yaşar:

| Bölüm | 3B içerik |
|---|---|
| Giriş | Burularak yükselen kule + sıvı altın çekirdek |
| Projeler | Üç maket: kule, teraslı bloklar, jeodezik pavyon (hover/tıklama) |
| Stüdyo | Dönen altın kafes pavyon içinde sıvı altın küre |
| Hizmetler | Plandan katman katman yükselen kat planı çizgileri |
| İletişim | Ufukta uzak kent silueti |

## Yapı

```
src/main.ts             önyükleme, render döngüsü, DPR/sis/görünürlük yönetimi
src/scroll.ts           kamera kareleri, kaydırma bağlama, nokta navigasyonu
src/interact.ts         raycaster hover/tıklama, ipucu etiketi, proje paneli
src/data.ts             proje içerikleri
src/scene/materials.ts  sıvı altın GLSL malzemesi, altın çizgi, mat antrasit
src/scene/world.ts      tüm 3B dünya (kule, maketler, pavyon, plan, siluet)
```

## Performans kararları

- **Sıfır harici varlık**: bütün geometri prosedürel, doku/font indirilmez;
  toplam yük ~137 KB gzip (Three.js dahil).
- **DPR ≤ 2** ve tek `WebGLRenderer`; post-processing yok.
- Üstel sis uzak nesneleri boşlukta eritir (doğal LOD), `dt` 0.1 sn ile
  kırpılır — sekme dönüşünde kamera sıçramaz.
- Sekme gizlenince `setAnimationLoop(null)` ile render tamamen durur.
- Paylaşılan geometri/malzemeler; kenar çizgileri `EdgesGeometry` ile tek
  `LineSegments` halinde.
- `prefers-reduced-motion` desteklenir: paralaks kapanır, kamera anında oturur.
