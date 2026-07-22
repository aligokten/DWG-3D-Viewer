// =============================================================================
//  ImarTypes.hpp
//
//  Planli Alanlar Imar Yonetmeligi hesap motorunun SAF veri tipleri.
//  Bu baslik dosyasi ArchiCAD API'sinden TAMAMEN bagimsizdir; yalnizca
//  standart C++ (STL) kullanir. Boylece motor, ArchiCAD olmadan da
//  derlenip test edilebilir (bkz. Test/test_imarcalc.cpp).
//
//  ArchiCAD tarafi (ProjectReader) projedeki Zone (Alan) elemanlarini okuyup
//  buradaki ProjeVerisi yapisina cevirir; ImarCalc bu yapiyi alarak tablolari
//  uretir.
// =============================================================================
#ifndef IMAR_TYPES_HPP
#define IMAR_TYPES_HPP

#include <string>
#include <vector>

namespace Imar {

// -----------------------------------------------------------------------------
//  Bir alanin emsale dahil olup olmadigi.
//  PAIY (Planli Alanlar Imar Yonetmeligi) Madde 5'e gore bazi alanlar emsal
//  disidir (siginak, otopark, teknik hacim, ortak dolasim vb.). Hangi Alan
//  Kategorisinin hangi duruma karsilik geldigi KategoriKurali ile belirlenir.
// -----------------------------------------------------------------------------
enum class EmsalDurumu {
    Dahil,   // emsale dahil (insaat alani emsalden dusulur)
    Haric    // emsal harici / muaf
};

// -----------------------------------------------------------------------------
//  Kullanim tipi (otopark ve nufus/siginak hesaplari icin ayrim saglar).
// -----------------------------------------------------------------------------
enum class Kullanim {
    Konut,
    Ticari,
    Ofis,
    Diger
};

// -----------------------------------------------------------------------------
//  Projedeki tek bir Alan (Zone) kaydi. ArchiCAD'deki bir Zon elemanina karsilik
//  gelir. Alanlar m2 cinsindendir.
// -----------------------------------------------------------------------------
struct AlanKaydi {
    std::string  ad;             // Alan adi (roomName)         orn: "Salon"
    std::string  noStr;          // Alan numarasi (roomNoStr)   orn: "Z01"
    std::string  katAdi;         // Kat adi (story name)        orn: "Zemin Kat"
    int          katIndex   = 0; // Kat sirasi (0 = zemin, -1 bodrum, 1 birinci kat ...)
    std::string  kategori;       // Alan Kategorisi adi (Zone Category)
    double       alan       = 0; // Olculen alan (m2)
    EmsalDurumu  emsal      = EmsalDurumu::Dahil;
    Kullanim     kullanim   = Kullanim::Konut;
    bool         bagimsizBolum = false; // Bagimsiz bolum mu (daire/dukkan)?
    bool         zeminOturum   = false; // TAKS (taban alani) hesabina girsin mi?
};

// -----------------------------------------------------------------------------
//  Bir Alan Kategorisi icin kural. ProjectReader, projedeki kategori adina gore
//  bu kurali uygular (emsal durumu, kullanim, bagimsiz bolum sayilir mi).
//  Kullanici bu eslemeleri revizyonla ozellestirebilir.
// -----------------------------------------------------------------------------
struct KategoriKurali {
    std::string  kategoriAdi;               // ArchiCAD Alan Kategorisi adiyla eslesir
    EmsalDurumu  emsal        = EmsalDurumu::Dahil;
    Kullanim     kullanim     = Kullanim::Konut;
    bool         bagimsizBolum = false;
};

// -----------------------------------------------------------------------------
//  Otopark ihtiyac kurali. Belediyeye/yonetmelige gore degisir; parametriktir.
// -----------------------------------------------------------------------------
enum class OtoparkModu {
    BagimsizBolumBasina,  // her N bagimsiz bolume 1 otopark
    AlanBasina            // her N m2'ye 1 otopark
};

struct OtoparkKurali {
    Kullanim     kullanim = Kullanim::Konut;
    OtoparkModu  mod      = OtoparkModu::BagimsizBolumBasina;
    double       katsayi  = 1.0; // mod=BagimsizBolumBasina -> "1 otopark / katsayi adet BB"
                                 // mod=AlanBasina           -> "1 otopark / katsayi m2"
};

// -----------------------------------------------------------------------------
//  Siginak hesabi parametreleri (Siginak Yonetmeligi geregi; parametriktir).
// -----------------------------------------------------------------------------
enum class SiginakYontemi {
    AlanYuzdesi,  // gerekli siginak alani = emsal alani * oran
    Nufus         // gerekli siginak alani = nufus * kisiBasinaAlan
};

struct SiginakParametreleri {
    int             esikBagimsizBolum = 12;   // bu sayidan FAZLA BB olursa siginak zorunlu
    SiginakYontemi  yontem            = SiginakYontemi::Nufus;
    double          oran              = 0.03; // AlanYuzdesi yontemi icin (orn %3)
    double          kisiPerBagimsizBolum = 4.0; // Nufus yontemi: her daire icin varsayilan kisi
    double          kisiBasinaAlan    = 1.0;  // m2/kisi (serpinti siginagi)
};

// -----------------------------------------------------------------------------
//  Parsel / imar plani parametreleri. Palette elle girilir veya projeden okunur.
// -----------------------------------------------------------------------------
struct ProjeParametreleri {
    std::string ilIlce;
    std::string mahalle;
    std::string pafta;
    std::string ada;
    std::string parsel;

    double arsaAlani     = 0.0;  // m2
    double emsalKatsayisi = 0.0; // KAKS / Emsal (plandan), orn 1.50
    double taksKatsayisi  = 0.0; // TAKS (plandan), orn 0.30
    double maxYukseklik   = 0.0; // Hmax (m) - bilgi amacli

    std::vector<OtoparkKurali> otoparkKurallari;
    SiginakParametreleri       siginak;
};

// -----------------------------------------------------------------------------
//  Motora verilen tum proje verisi.
// -----------------------------------------------------------------------------
struct ProjeVerisi {
    ProjeParametreleri       parametreler;
    std::vector<AlanKaydi>   alanlar;
};

// -----------------------------------------------------------------------------
//  Generic tablo cikti yapisi. Hem palet hem CSV ayni yapiyi render eder.
// -----------------------------------------------------------------------------
struct Tablo {
    std::string                           baslik;
    std::vector<std::string>              sutunlar;   // basliklar
    std::vector<std::vector<std::string>> satirlar;   // her satir = sutun sayisi kadar hucre
    std::vector<std::string>              notlar;     // dipnot / uyari
};

} // namespace Imar

#endif // IMAR_TYPES_HPP
