// Çelik imalat paneli — veri modeli.
import type { Birim } from "./catalog";

/** Bir parçanın atölye/şantiye üretim aşaması. */
export const IMALAT_DURUMLARI = [
  "Bekliyor",
  "Kesim",
  "Kaynak/İmalat",
  "Yüzey/Boya",
  "Sevkiyat",
  "Montaj",
  "Tamamlandı",
] as const;
export type ImalatDurumu = (typeof IMALAT_DURUMLARI)[number];

/** Fiyatın neye göre girildiği: kg başına ya da birim (m/m²/adet) başına. */
export type FiyatTipi = "kg" | "birim";

/** Malzeme listesi (BOM) satırı. */
export interface BomKalemi {
  id: string;
  pozNo: string; // Poz / parça no (ör. K-01 kolon, KR-03 kiriş)
  aciklama: string; // Parça adı/işlevi (ör. "Ana kolon")
  katalogId: string; // Katalog referansı ("" = elle girilmiş)
  ad: string; // Malzeme adı (ör. "HEB 240")
  standart: string;
  kalite: string;
  birim: Birim;
  birimAgirlik: number; // kg/birim (m→kg/m, m2→kg/m², adet→kg/adet, kg→1)
  adet: number; // Parça sayısı
  boy: number; // Birim boy (m) — "m" birimli kalemler için
  alan: number; // Alan (m²) — "m2" birimli kalemler için
  miktarKg: number; // Doğrudan miktar — "kg" birimli kalemler için
  miktarAdet: number; // Doğrudan miktar — "adet" birimli kalemler için
  fireYuzde: number; // Satır fire yüzdesi (kesim kaybı)
  birimFiyat: number; // ₺
  fiyatTipi: FiyatTipi;
  durum: ImalatDurumu;
}

/** İşçilik / ekipman / nakliye gibi ek maliyet kalemi. */
export interface IscilikKalemi {
  id: string;
  ad: string; // "Montaj işçiliği", "Mobil vinç", "Nakliye"...
  kategori: string; // İşçilik / Ekipman / Nakliye / Diğer
  birim: string; // "kg" | "saat" | "adet" | "sefer" | "götürü"
  miktar: number;
  birimFiyat: number;
}

/** Satın alma / sipariş kaydı. */
export const SATINALMA_DURUMLARI = [
  "Talep",
  "Teklif Alındı",
  "Sipariş Verildi",
  "Kısmi Teslim",
  "Teslim Alındı",
] as const;
export type SatinAlmaDurumu = (typeof SATINALMA_DURUMLARI)[number];

export interface SatinAlma {
  id: string;
  tarih: string;
  tedarikci: string;
  malzeme: string;
  miktar: number;
  birim: string;
  birimFiyat: number;
  durum: SatinAlmaDurumu;
  not: string;
}

/** Bir proje: tüm listeler ve oran ayarları. */
export interface Proje {
  id: string;
  ad: string;
  musteri: string;
  konum: string; // Şantiye yeri
  tarih: string;
  // Oran ayarları
  varsayilanFire: number; // % — yeni kalemlere uygulanan fire
  atolyeIscilikKg: number; // ₺/kg — atölye imalat işçiliği (kesim+kaynak+montaj hazırlığı)
  genelGiderYuzde: number; // %
  karYuzde: number; // %
  kdvYuzde: number; // %
  kalemler: BomKalemi[];
  iscilikler: IscilikKalemi[];
  satinAlmalar: SatinAlma[];
  notlar: string;
}

export function yeniId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

export function yeniProje(ad = "Yeni Proje"): Proje {
  return {
    id: yeniId(),
    ad,
    musteri: "",
    konum: "",
    tarih: new Date().toISOString().slice(0, 10),
    varsayilanFire: 5,
    atolyeIscilikKg: 12,
    genelGiderYuzde: 10,
    karYuzde: 15,
    kdvYuzde: 20,
    kalemler: [],
    iscilikler: [],
    satinAlmalar: [],
    notlar: "",
  };
}
