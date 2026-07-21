// Çelik imalat paneli — hesaplama fonksiyonları (fire, ağırlık, maliyet).
import type { BomKalemi, Proje } from "./types";

export interface KalemHesap {
  netMiktar: number; // fire öncesi miktar (birim cinsinden: m / m² / adet / kg)
  brutMiktar: number; // fire dahil miktar
  netKg: number; // fire öncesi ağırlık
  brutKg: number; // fire dahil ağırlık
  malzemeMaliyet: number; // ₺ (fire dahil)
}

/** Bir BOM satırının fire, ağırlık ve malzeme maliyetini hesaplar. */
export function kalemHesapla(k: BomKalemi): KalemHesap {
  let netMiktar = 0;
  switch (k.birim) {
    case "m":
      netMiktar = k.adet * k.boy;
      break;
    case "m2":
      netMiktar = k.alan;
      break;
    case "adet":
      netMiktar = k.miktarAdet;
      break;
    case "kg":
      netMiktar = k.miktarKg;
      break;
  }
  const fireCarpan = 1 + (k.fireYuzde || 0) / 100;
  const brutMiktar = netMiktar * fireCarpan;
  const netKg = netMiktar * k.birimAgirlik;
  const brutKg = netKg * fireCarpan;

  // Fiyat kg başına ise brüt ağırlıkla, birim başına ise brüt miktarla çarpılır.
  const malzemeMaliyet =
    k.fiyatTipi === "kg" ? brutKg * k.birimFiyat : brutMiktar * k.birimFiyat;

  return { netMiktar, brutMiktar, netKg, brutKg, malzemeMaliyet };
}

export interface ProjeHesap {
  toplamNetKg: number;
  toplamBrutKg: number;
  fireKg: number; // brüt - net (fire kaynaklı fazla ağırlık)
  malzemeToplam: number;
  atolyeIscilik: number; // atölye ₺/kg × net ağırlık
  ekIscilikToplam: number;
  iscilikToplam: number; // atölye + ek işçilik
  araToplam: number; // malzeme + işçilik
  genelGider: number;
  karMatrah: number; // araToplam + genelGider
  kar: number;
  kdvHaric: number; // teklif tutarı (KDV hariç)
  kdv: number;
  genelToplam: number; // KDV dahil
  birimFiyatKg: number; // ₺/kg (KDV hariç teklif / net ağırlık)
}

/** Projenin tüm maliyet kırılımını hesaplar. */
export function projeHesapla(p: Proje): ProjeHesap {
  let toplamNetKg = 0;
  let toplamBrutKg = 0;
  let malzemeToplam = 0;
  for (const k of p.kalemler) {
    const h = kalemHesapla(k);
    toplamNetKg += h.netKg;
    toplamBrutKg += h.brutKg;
    malzemeToplam += h.malzemeMaliyet;
  }
  const fireKg = toplamBrutKg - toplamNetKg;
  const atolyeIscilik = toplamNetKg * (p.atolyeIscilikKg || 0);
  const ekIscilikToplam = p.iscilikler.reduce(
    (a, i) => a + (i.miktar || 0) * (i.birimFiyat || 0),
    0,
  );
  const iscilikToplam = atolyeIscilik + ekIscilikToplam;
  const araToplam = malzemeToplam + iscilikToplam;
  const genelGider = araToplam * (p.genelGiderYuzde || 0) / 100;
  const karMatrah = araToplam + genelGider;
  const kar = karMatrah * (p.karYuzde || 0) / 100;
  const kdvHaric = karMatrah + kar;
  const kdv = kdvHaric * (p.kdvYuzde || 0) / 100;
  const genelToplam = kdvHaric + kdv;
  const birimFiyatKg = toplamNetKg > 0 ? kdvHaric / toplamNetKg : 0;

  return {
    toplamNetKg,
    toplamBrutKg,
    fireKg,
    malzemeToplam,
    atolyeIscilik,
    ekIscilikToplam,
    iscilikToplam,
    araToplam,
    genelGider,
    karMatrah,
    kar,
    kdvHaric,
    kdv,
    genelToplam,
    birimFiyatKg,
  };
}

const tl = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});
const sayi = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 });

export function fmtTL(n: number): string {
  return tl.format(isFinite(n) ? n : 0);
}
export function fmt(n: number, ondalik = 2): string {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: ondalik }).format(
    isFinite(n) ? n : 0,
  );
}
export { sayi };
