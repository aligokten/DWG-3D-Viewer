// =============================================================================
//  ImarCalc.hpp
//
//  Planli Alanlar Imar Yonetmeligi hesap motoru (SAF C++, ArchiCAD'den bagimsiz).
//
//  Uretilen tablolar:
//    1) Emsal Hesabi
//    2) Emsal Tablosu (Kat Bazinda)
//    3) Yapi Insaat Alani (YIA) Tablosu
//    4) Kat Irtifaki / Arsa Payi Tablosu
//    5) Otopark Hesabi
//    6) Siginak Hesabi
// =============================================================================
#ifndef IMAR_CALC_HPP
#define IMAR_CALC_HPP

#include "ImarTypes.hpp"

namespace Imar {

// Sayi bicimlendirme (Turkce ondalik virgul, binlik ayrac opsiyonel).
std::string SayiBicimle (double deger, int ondalik = 2, bool binlik = true);

// --- Tek tek tablolar ---
Tablo EmsalHesabi          (const ProjeVerisi& veri);
Tablo EmsalTablosu         (const ProjeVerisi& veri);
Tablo YapiInsaatAlaniTablosu (const ProjeVerisi& veri);
Tablo KatIrtifakiTablosu   (const ProjeVerisi& veri);
Tablo OtoparkHesabi        (const ProjeVerisi& veri);
Tablo SiginakHesabi        (const ProjeVerisi& veri);

// Tum tablolari sirayla uretir.
std::vector<Tablo> TumTablolar (const ProjeVerisi& veri);

// Bir tabloyu CSV (noktali virgul ayracli, Turkce Excel uyumlu) metne cevirir.
std::string TabloCsv (const Tablo& tablo);

// Tum tablolari tek bir CSV metnine cevirir.
std::string TumTablolarCsv (const std::vector<Tablo>& tablolar);

// Varsayilan otopark kurallarini (ulusal Otopark Yonetmeligi baz alinarak,
// belediyeye gore revize edilebilir) dondurur.
std::vector<OtoparkKurali> VarsayilanOtoparkKurallari ();

} // namespace Imar

#endif // IMAR_CALC_HPP
