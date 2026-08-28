// =============================================================================
//  ProjectReader.hpp
//
//  ArchiCAD projesindeki Zone (Alan) elemanlarini okuyup, hesap motorunun
//  bekledigi Imar::ProjeVerisi yapisina ceviren katman.
//
//  Bu dosya ArchiCAD API'sine (ACAPinc.h) baglidir; yalnizca DevKit ile derlenir.
// =============================================================================
#ifndef PROJECT_READER_HPP
#define PROJECT_READER_HPP

#include "ImarTypes.hpp"
#include <string>

namespace Imar {

// Projedeki tum zone'lari okuyup alan listesini doldurur.
// parametreler (arsa alani, KAKS vb.) burada DEGISTIRILMEZ; onlari palet tutar.
// Donen deger okunan alan sayisidir (hata durumunda alanlar bos kalir).
class ProjectReader {
public:
    // Projedeki zone'lari okuyup 'veri.alanlar' listesini gunceller.
    // Mevcut 'veri.parametreler' korunur.
    static void ZonelariOku (ProjeVerisi& veri);

    // Bir Alan Kategorisi / alan adi metnine gore varsayilan siniflandirma
    // (emsal durumu, kullanim, bagimsiz bolum). Kullanici revize edebilir.
    static void Siniflandir (const std::string& kategoriAdi,
                             const std::string& alanAdi,
                             EmsalDurumu&        emsalCikti,
                             Kullanim&           kullanimCikti,
                             bool&               bagimsizBolumCikti);
};

} // namespace Imar

#endif // PROJECT_READER_HPP
