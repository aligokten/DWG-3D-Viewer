// Çelik yapı imalatı — TSE / EN standartlarında malzeme kataloğu.
//
// Birim ağırlıklar sıcak haddelenmiş profil standartları (TS EN 10365, eski
// DIN 1025 / TS 910 tabloları) ve çelik yoğunluğu 7.85 g/cm³ (7850 kg/m³)
// esas alınarak hesaplanmıştır. Kutu profil, boru, sac, inşaat/yuvarlak/lama
// demirleri kesit formülleriyle üretilir; böylece kullanıcı standart dışı
// ölçüleri de girebilir.
//
// Not: Fiyatlar piyasaya göre değiştiği için katalogda fiyat tutulmaz;
// fiyat malzeme listesi satırında (₺/kg veya ₺/adet) elle girilir.

export const CELIK_YOGUNLUGU = 7850; // kg/m³

/** Kalem birimi: metre (profil/boru), m² (sac), adet (cıvata), kg (dökme). */
export type Birim = "m" | "m2" | "adet" | "kg";

export interface KatalogKalemi {
  id: string;
  kategori: string;
  ad: string;
  standart: string; // İlgili TSE / EN standardı
  kalite?: string; // Varsayılan çelik kalitesi (ör. S275JR)
  birim: Birim;
  /** m için kg/m, m² için kg/m², adet için kg/adet, kg için 1. */
  birimAgirlik: number;
  aciklama?: string;
}

/** Türkiye'de yapı çeliğinde yaygın kalite sınıfları (TS EN 10025-2). */
export const CELIK_KALITELERI = [
  { kod: "S235JR", aciklama: "Genel yapı çeliği, akma ~235 MPa (TS EN 10025-2)" },
  { kod: "S275JR", aciklama: "Yapı çeliği, akma ~275 MPa (TS EN 10025-2)" },
  { kod: "S355JR", aciklama: "Yüksek mukavemetli yapı çeliği, akma ~355 MPa" },
  { kod: "S355J2", aciklama: "Darbe dayanımı garantili S355 (kaynaklı imalat)" },
  { kod: "B500C", aciklama: "Nervürlü beton çeliği (TS 708)" },
] as const;

// ---------------------------------------------------------------------------
// Sabit profil tabloları (kg/m)
// ---------------------------------------------------------------------------

const IPE: Record<string, number> = {
  "IPE 80": 6.0, "IPE 100": 8.1, "IPE 120": 10.4, "IPE 140": 12.9,
  "IPE 160": 15.8, "IPE 180": 18.8, "IPE 200": 22.4, "IPE 220": 26.2,
  "IPE 240": 30.7, "IPE 270": 36.1, "IPE 300": 42.2, "IPE 330": 49.1,
  "IPE 360": 57.1, "IPE 400": 66.3, "IPE 450": 77.6, "IPE 500": 90.7,
  "IPE 550": 106.0, "IPE 600": 122.0,
};

const HEA: Record<string, number> = {
  "HEA 100": 16.7, "HEA 120": 19.9, "HEA 140": 24.7, "HEA 160": 30.4,
  "HEA 180": 35.5, "HEA 200": 42.3, "HEA 220": 50.5, "HEA 240": 60.3,
  "HEA 260": 68.2, "HEA 280": 76.4, "HEA 300": 88.3, "HEA 320": 97.6,
  "HEA 340": 105.0, "HEA 360": 112.0, "HEA 400": 125.0, "HEA 450": 140.0,
  "HEA 500": 155.0, "HEA 550": 166.0, "HEA 600": 178.0,
};

const HEB: Record<string, number> = {
  "HEB 100": 20.4, "HEB 120": 26.7, "HEB 140": 33.7, "HEB 160": 42.6,
  "HEB 180": 51.2, "HEB 200": 61.3, "HEB 220": 71.5, "HEB 240": 83.2,
  "HEB 260": 93.0, "HEB 280": 103.0, "HEB 300": 117.0, "HEB 320": 127.0,
  "HEB 340": 134.0, "HEB 360": 142.0, "HEB 400": 155.0, "HEB 450": 171.0,
  "HEB 500": 187.0, "HEB 550": 199.0, "HEB 600": 212.0,
};

const HEM: Record<string, number> = {
  "HEM 100": 41.8, "HEM 120": 52.1, "HEM 140": 63.2, "HEM 160": 76.2,
  "HEM 180": 88.9, "HEM 200": 103.0, "HEM 220": 117.0, "HEM 240": 157.0,
  "HEM 260": 172.0, "HEM 280": 189.0, "HEM 300": 238.0, "HEM 320": 245.0,
  "HEM 340": 248.0, "HEM 360": 250.0, "HEM 400": 256.0,
};

// NPI (IPN) — normal I profili
const NPI: Record<string, number> = {
  "NPI 80": 5.94, "NPI 100": 8.34, "NPI 120": 11.1, "NPI 140": 14.3,
  "NPI 160": 17.9, "NPI 180": 21.9, "NPI 200": 26.2, "NPI 220": 31.1,
  "NPI 240": 36.2, "NPI 260": 41.9, "NPI 280": 47.9, "NPI 300": 54.2,
  "NPI 320": 61.0, "NPI 340": 68.0, "NPI 360": 76.1, "NPI 380": 84.0,
  "NPI 400": 92.4,
};

// NPU (UPN) — U profili
const NPU: Record<string, number> = {
  "NPU 50": 5.59, "NPU 65": 7.09, "NPU 80": 8.64, "NPU 100": 10.6,
  "NPU 120": 13.4, "NPU 140": 16.0, "NPU 160": 18.8, "NPU 180": 22.0,
  "NPU 200": 25.3, "NPU 220": 29.4, "NPU 240": 33.2, "NPU 260": 37.9,
  "NPU 280": 41.8, "NPU 300": 46.2, "NPU 320": 59.5, "NPU 350": 60.6,
  "NPU 380": 63.1, "NPU 400": 71.8,
};

// Eşit kollu köşebent (L profili) — TS EN 10056-1
const KOSEBENT: Record<string, number> = {
  "L 30x30x3": 1.36, "L 40x40x4": 2.42, "L 45x45x4.5": 3.06, "L 50x50x5": 3.77,
  "L 60x60x6": 5.42, "L 65x65x7": 6.83, "L 70x70x7": 7.38, "L 75x75x8": 8.99,
  "L 80x80x8": 9.63, "L 90x90x9": 12.2, "L 100x100x10": 15.1,
  "L 120x120x12": 21.6, "L 130x130x12": 23.6, "L 150x150x15": 33.8,
  "L 200x200x20": 59.9,
};

function tabloKalemleri(
  tablo: Record<string, number>,
  kategori: string,
  standart: string,
  kalite: string,
): KatalogKalemi[] {
  return Object.entries(tablo).map(([ad, kg]) => ({
    id: ad.replace(/\s+/g, "_"),
    kategori,
    ad,
    standart,
    kalite,
    birim: "m" as const,
    birimAgirlik: kg,
  }));
}

// ---------------------------------------------------------------------------
// Formülle üretilen kalemler
// ---------------------------------------------------------------------------

/** Kutu profil (kare/dikdörtgen içi boş) kg/m. Ölçüler mm. */
export function kutuProfilKg(a: number, b: number, t: number): number {
  if (t <= 0 || a <= 2 * t || b <= 2 * t) return 0;
  const alanMm2 = a * b - (a - 2 * t) * (b - 2 * t);
  return (alanMm2 * CELIK_YOGUNLUGU) / 1_000_000; // mm²→m², *ρ
}

/** Boru (yuvarlak içi boş) kg/m. D dış çap, t et kalınlığı, mm. */
export function boruKg(D: number, t: number): number {
  if (t <= 0 || D <= 2 * t) return 0;
  const alanMm2 = Math.PI * t * (D - t);
  return (alanMm2 * CELIK_YOGUNLUGU) / 1_000_000;
}

/** Sac / plaka kg/m². Kalınlık mm. */
export function sacKgM2(t: number): number {
  return (t * CELIK_YOGUNLUGU) / 1000; // mm→m, *ρ
}

/** Yuvarlak/nervürlü demir kg/m. Çap mm. (d²/162 pratik formülü) */
export function yuvarlakKg(d: number): number {
  return (d * d) / 162.0;
}

/** Lama (yassı) demir kg/m. Genişlik×kalınlık mm. */
export function lamaKg(genislik: number, kalinlik: number): number {
  return (genislik * kalinlik * CELIK_YOGUNLUGU) / 1_000_000;
}

// Yaygın kutu profil ölçüleri (kare) — TS EN 10219
const KARE_KUTU: Array<[number, number]> = [
  [20, 2], [25, 2], [30, 2], [30, 3], [40, 2], [40, 3], [40, 4],
  [50, 2], [50, 3], [50, 4], [50, 5], [60, 3], [60, 4], [60, 5],
  [70, 3], [70, 4], [80, 3], [80, 4], [80, 5], [90, 4], [100, 4],
  [100, 5], [100, 6], [120, 5], [120, 6], [140, 5], [150, 6], [160, 8],
  [180, 8], [200, 8], [200, 10],
];

// Yaygın dikdörtgen kutu profil ölçüleri — TS EN 10219
const DIKDORTGEN_KUTU: Array<[number, number, number]> = [
  [40, 20, 2], [40, 30, 3], [50, 30, 2], [50, 30, 3], [60, 40, 2],
  [60, 40, 3], [80, 40, 3], [80, 40, 4], [100, 50, 3], [100, 50, 4],
  [100, 60, 4], [120, 60, 4], [120, 80, 4], [140, 60, 5], [150, 100, 5],
  [160, 80, 5], [200, 100, 6], [200, 120, 6],
];

// Yaygın boru (dikişli) ölçüleri — TS EN 10219 / TS 6047
const BORULAR: Array<[number, number, string]> = [
  [21.3, 2.3, '1/2"'], [26.9, 2.3, '3/4"'], [33.7, 2.6, '1"'],
  [42.4, 2.6, '1 1/4"'], [48.3, 2.9, '1 1/2"'], [60.3, 2.9, '2"'],
  [76.1, 2.9, '2 1/2"'], [88.9, 3.2, '3"'], [114.3, 3.6, '4"'],
  [139.7, 4.0, '5"'], [168.3, 4.5, '6"'], [219.1, 5.9, '8"'],
];

// Sac kalınlıkları (siyah/DKP) mm
const SAC_KALINLIKLARI = [1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25];

// İnşaat demiri çapları (nervürlü, TS 708 B500C) mm
const INSAAT_DEMIRI = [8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32];

function kutuKalemleri(): KatalogKalemi[] {
  const kare = KARE_KUTU.map(([a, t]): KatalogKalemi => ({
    id: `KUTU_${a}x${a}x${t}`,
    kategori: "Kutu Profil (Kare)",
    ad: `${a}x${a}x${t} mm`,
    standart: "TS EN 10219",
    kalite: "S235JR",
    birim: "m",
    birimAgirlik: +kutuProfilKg(a, a, t).toFixed(3),
  }));
  const dik = DIKDORTGEN_KUTU.map(([a, b, t]): KatalogKalemi => ({
    id: `KUTU_${a}x${b}x${t}`,
    kategori: "Kutu Profil (Dikdörtgen)",
    ad: `${a}x${b}x${t} mm`,
    standart: "TS EN 10219",
    kalite: "S235JR",
    birim: "m",
    birimAgirlik: +kutuProfilKg(a, b, t).toFixed(3),
  }));
  return [...kare, ...dik];
}

function boruKalemleri(): KatalogKalemi[] {
  return BORULAR.map(([D, t, dn]): KatalogKalemi => ({
    id: `BORU_${D}x${t}`,
    kategori: "Boru (Yuvarlak)",
    ad: `Ø${D} x ${t} mm (${dn})`,
    standart: "TS EN 10219 / TS 6047",
    kalite: "S235JR",
    birim: "m",
    birimAgirlik: +boruKg(D, t).toFixed(3),
  }));
}

function sacKalemleri(): KatalogKalemi[] {
  return SAC_KALINLIKLARI.map((t): KatalogKalemi => ({
    id: `SAC_${t}`,
    kategori: "Sac / Plaka",
    ad: `${t} mm sac`,
    standart: "TS EN 10025 / TS EN 10029",
    kalite: "S235JR",
    birim: "m2",
    birimAgirlik: +sacKgM2(t).toFixed(2),
    aciklama: "m² fiyatı/ağırlığı; miktar = alan (m²)",
  }));
}

function demirKalemleri(): KatalogKalemi[] {
  return INSAAT_DEMIRI.map((d): KatalogKalemi => ({
    id: `DEMIR_${d}`,
    kategori: "İnşaat Demiri (Nervürlü)",
    ad: `Ø${d} mm`,
    standart: "TS 708",
    kalite: "B500C",
    birim: "m",
    birimAgirlik: +yuvarlakKg(d).toFixed(3),
  }));
}

// Sarf / bağlantı elemanları — adet veya kg bazlı
const SARF: KatalogKalemi[] = [
  {
    id: "CIVATA_88", kategori: "Bağlantı Elemanı", ad: "Yüksek mukavemetli cıvata 8.8 (takım)",
    standart: "TS EN ISO 4014 / TS EN 14399", kalite: "8.8", birim: "adet", birimAgirlik: 0,
    aciklama: "Cıvata+somun+pul takımı, adet fiyatı",
  },
  {
    id: "CIVATA_109", kategori: "Bağlantı Elemanı", ad: "Yüksek mukavemetli cıvata 10.9 (takım)",
    standart: "TS EN 14399 (HV)", kalite: "10.9", birim: "adet", birimAgirlik: 0,
    aciklama: "Öngermeli birleşim, adet fiyatı",
  },
  {
    id: "ANKRAJ", kategori: "Bağlantı Elemanı", ad: "Ankraj civatası / saplama",
    standart: "TS EN ISO 898-1", kalite: "8.8", birim: "adet", birimAgirlik: 0,
  },
  {
    id: "ELEKTROT", kategori: "Kaynak Sarfı", ad: "Örtülü elektrot (rutil/bazik)",
    standart: "TS EN ISO 2560", birim: "kg", birimAgirlik: 1,
    aciklama: "kg bazlı sarf",
  },
  {
    id: "GAZALTI_TEL", kategori: "Kaynak Sarfı", ad: "Gazaltı kaynak teli (MIG/MAG)",
    standart: "TS EN ISO 14341", birim: "kg", birimAgirlik: 1,
  },
];

// Yüzey işlem — m² veya kg bazlı (imalat sonrası koruma)
const YUZEY: KatalogKalemi[] = [
  {
    id: "KUMLAMA", kategori: "Yüzey İşlem", ad: "Kumlama (Sa 2½)",
    standart: "TS EN ISO 8501-1", birim: "m2", birimAgirlik: 0,
    aciklama: "m² işçilik/malzeme",
  },
  {
    id: "ASTAR", kategori: "Yüzey İşlem", ad: "Antikorozif astar boya",
    standart: "TS EN ISO 12944", birim: "m2", birimAgirlik: 0,
  },
  {
    id: "SONKAT", kategori: "Yüzey İşlem", ad: "Son kat boya",
    standart: "TS EN ISO 12944", birim: "m2", birimAgirlik: 0,
  },
  {
    id: "GALVANIZ", kategori: "Yüzey İşlem", ad: "Sıcak daldırma galvaniz",
    standart: "TS EN ISO 1461", birim: "kg", birimAgirlik: 1,
    aciklama: "kg bazlı (çelik ağırlığı)",
  },
];

// ---------------------------------------------------------------------------
// Tam katalog
// ---------------------------------------------------------------------------

export const KATALOG: KatalogKalemi[] = [
  ...tabloKalemleri(IPE, "IPE Profil", "TS EN 10365 (I profil)", "S275JR"),
  ...tabloKalemleri(HEA, "HEA Profil", "TS EN 10365 (geniş başlıklı I)", "S275JR"),
  ...tabloKalemleri(HEB, "HEB Profil", "TS EN 10365 (geniş başlıklı I)", "S275JR"),
  ...tabloKalemleri(HEM, "HEM Profil", "TS EN 10365 (geniş başlıklı I)", "S355JR"),
  ...tabloKalemleri(NPI, "NPI (IPN) Profil", "TS 910 / DIN 1025", "S235JR"),
  ...tabloKalemleri(NPU, "NPU (UPN) Profil", "TS EN 10365 (U profil)", "S235JR"),
  ...tabloKalemleri(KOSEBENT, "Köşebent (L)", "TS EN 10056-1", "S235JR"),
  ...kutuKalemleri(),
  ...boruKalemleri(),
  ...sacKalemleri(),
  ...demirKalemleri(),
  ...SARF,
  ...YUZEY,
];

/** Katalog kategorileri (arayüz gruplaması için, sırayla). */
export const KATEGORILER: string[] = Array.from(
  new Set(KATALOG.map((k) => k.kategori)),
);

export function katalogBul(id: string): KatalogKalemi | undefined {
  return KATALOG.find((k) => k.id === id);
}
