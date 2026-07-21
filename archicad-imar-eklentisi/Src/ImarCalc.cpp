// =============================================================================
//  ImarCalc.cpp  -  Planli Alanlar Imar Yonetmeligi hesap motoru (SAF C++)
// =============================================================================
#include "ImarCalc.hpp"

#include <algorithm>
#include <cmath>
#include <map>
#include <set>
#include <sstream>

namespace Imar {

// -----------------------------------------------------------------------------
//  Yardimcilar
// -----------------------------------------------------------------------------
namespace {

const double kEps = 1e-6;

std::string KullanimAdi (Kullanim k)
{
    switch (k) {
        case Kullanim::Konut:  return "Konut";
        case Kullanim::Ticari: return "Ticari";
        case Kullanim::Ofis:   return "Ofis";
        default:               return "Diger";
    }
}

// emsale dahil alanlarin toplami
double EmsaleDahilAlan (const ProjeVerisi& v)
{
    double t = 0.0;
    for (const auto& a : v.alanlar)
        if (a.emsal == EmsalDurumu::Dahil) t += a.alan;
    return t;
}

// emsal harici alanlarin toplami
double EmsalHariciAlan (const ProjeVerisi& v)
{
    double t = 0.0;
    for (const auto& a : v.alanlar)
        if (a.emsal == EmsalDurumu::Haric) t += a.alan;
    return t;
}

// taban alani (zemin oturumu isaretli alanlar)
double TabanAlani (const ProjeVerisi& v)
{
    double t = 0.0;
    for (const auto& a : v.alanlar)
        if (a.zeminOturum) t += a.alan;
    return t;
}

int BagimsizBolumSayisi (const ProjeVerisi& v, bool sadeceKonut = false)
{
    int n = 0;
    for (const auto& a : v.alanlar)
        if (a.bagimsizBolum && (!sadeceKonut || a.kullanim == Kullanim::Konut))
            ++n;
    return n;
}

} // anonim namespace

// -----------------------------------------------------------------------------
//  Sayi bicimlendirme  ->  "1.234,56"  (Turkce: nokta binlik, virgul ondalik)
// -----------------------------------------------------------------------------
std::string SayiBicimle (double deger, int ondalik, bool binlik)
{
    bool negatif = deger < 0;
    double d = negatif ? -deger : deger;

    // yuvarla
    double carpan = std::pow (10.0, ondalik);
    long long olcek = (long long) std::llround (d * carpan);

    long long carpanI = (long long) std::llround (carpan);
    long long tamKisim = olcek / carpanI;
    long long ondalikKisim = olcek % carpanI;

    // tam kismi binlik ayracli metne cevir
    std::string tamStr = std::to_string (tamKisim);
    std::string gruplu;
    if (binlik) {
        int say = 0;
        for (int i = (int) tamStr.size () - 1; i >= 0; --i) {
            gruplu.push_back (tamStr[(size_t) i]);
            if (++say % 3 == 0 && i != 0) gruplu.push_back ('.');
        }
        std::reverse (gruplu.begin (), gruplu.end ());
    } else {
        gruplu = tamStr;
    }

    std::ostringstream os;
    if (negatif && (tamKisim != 0 || ondalikKisim != 0)) os << "-";
    os << gruplu;
    if (ondalik > 0) {
        std::ostringstream ond;
        ond.width (ondalik);
        ond.fill ('0');
        ond << ondalikKisim;
        os << "," << ond.str ();
    }
    return os.str ();
}

// -----------------------------------------------------------------------------
//  Varsayilan otopark kurallari (ulusal Otopark Yonetmeligi baz; belediyeye gore
//  revize edilmelidir).
// -----------------------------------------------------------------------------
std::vector<OtoparkKurali> VarsayilanOtoparkKurallari ()
{
    return {
        { Kullanim::Konut,  OtoparkModu::BagimsizBolumBasina, 1.0  }, // her daireye 1
        { Kullanim::Ticari, OtoparkModu::AlanBasina,          30.0 }, // her 30 m2'ye 1
        { Kullanim::Ofis,   OtoparkModu::AlanBasina,          40.0 }, // her 40 m2'ye 1
        { Kullanim::Diger,  OtoparkModu::AlanBasina,          50.0 },
    };
}

// -----------------------------------------------------------------------------
//  1) EMSAL HESABI  (+ TAKS ozeti)
//     PAIY Madde 4: Emsal (KAKS) = katlar alani toplami / parsel alani
// -----------------------------------------------------------------------------
Tablo EmsalHesabi (const ProjeVerisi& v)
{
    Tablo t;
    t.baslik   = "EMSAL HESABI";
    t.sutunlar = { "Aciklama", "Deger" };

    const double arsa      = v.parametreler.arsaAlani;
    const double emsalK    = v.parametreler.emsalKatsayisi;
    const double taksK     = v.parametreler.taksKatsayisi;
    const double dahil     = EmsaleDahilAlan (v);
    const double haric     = EmsalHariciAlan (v);
    const double toplam    = dahil + haric;
    const double taban     = TabanAlani (v);

    const double emsalHakki = arsa * emsalK;
    const double kullanilanEmsal = arsa > kEps ? dahil / arsa : 0.0;
    const double kalanHak   = emsalHakki - dahil;
    const double taksKull    = arsa > kEps ? taban / arsa : 0.0;

    auto row = [&] (const std::string& a, const std::string& b) {
        t.satirlar.push_back ({ a, b });
    };

    row ("Ada / Parsel", v.parametreler.ada + " / " + v.parametreler.parsel);
    row ("Arsa (Parsel) Alani (m2)", SayiBicimle (arsa));
    row ("Plan Emsal Katsayisi (KAKS)", SayiBicimle (emsalK, 2, false));
    row ("Verilen Emsal Hakki (m2)", SayiBicimle (emsalHakki));
    row ("Emsale Dahil Insaat Alani (m2)", SayiBicimle (dahil));
    row ("Emsal Harici Alan (m2)", SayiBicimle (haric));
    row ("Toplam Insaat Alani (m2)", SayiBicimle (toplam));
    row ("Kullanilan Emsal (KAKS)", SayiBicimle (kullanilanEmsal, 3, false));
    row ("Kalan Emsal Hakki (m2)", SayiBicimle (kalanHak));
    row ("EMSAL DURUMU", kalanHak >= -kEps ? "UYGUN" : "EMSAL ASIMI!");
    row ("", "");
    row ("Taban Alani (m2)", SayiBicimle (taban));
    row ("Plan TAKS Katsayisi", SayiBicimle (taksK, 2, false));
    row ("Izin Verilen Taban Alani (m2)", SayiBicimle (arsa * taksK));
    row ("Kullanilan TAKS", SayiBicimle (taksKull, 3, false));
    row ("TAKS DURUMU",
         (taksK <= kEps || taksKull <= taksK + kEps) ? "UYGUN" : "TAKS ASIMI!");

    t.notlar.push_back ("Emsal (KAKS) = Emsale dahil insaat alani / Parsel alani. "
                        "Kaynak: Planli Alanlar Imar Yonetmeligi Madde 4.");
    t.notlar.push_back ("Emsale dahil/haric ayrimi Alan Kategorilerinden (PAIY Madde 5) alinir.");
    return t;
}

// -----------------------------------------------------------------------------
//  2) EMSAL TABLOSU (Kat bazinda emsale dahil / haric dagilimi)
// -----------------------------------------------------------------------------
Tablo EmsalTablosu (const ProjeVerisi& v)
{
    Tablo t;
    t.baslik   = "EMSAL TABLOSU (KAT BAZINDA)";
    t.sutunlar = { "Kat", "Emsale Dahil (m2)", "Emsal Harici (m2)", "Kat Toplami (m2)" };

    struct KatToplam { std::string ad; double dahil = 0, haric = 0; };
    std::map<int, KatToplam> katlar; // katIndex -> toplam

    for (const auto& a : v.alanlar) {
        auto& k = katlar[a.katIndex];
        if (k.ad.empty ()) k.ad = a.katAdi;
        if (a.emsal == EmsalDurumu::Dahil) k.dahil += a.alan; else k.haric += a.alan;
    }

    double topDahil = 0, topHaric = 0;
    // katIndex artan sirada (bodrum -> ust)
    for (const auto& kv : katlar) {
        const auto& k = kv.second;
        std::string ad = k.ad.empty () ? ("Kat " + std::to_string (kv.first)) : k.ad;
        t.satirlar.push_back ({ ad, SayiBicimle (k.dahil), SayiBicimle (k.haric),
                                SayiBicimle (k.dahil + k.haric) });
        topDahil += k.dahil;
        topHaric += k.haric;
    }
    t.satirlar.push_back ({ "TOPLAM", SayiBicimle (topDahil), SayiBicimle (topHaric),
                            SayiBicimle (topDahil + topHaric) });
    return t;
}

// -----------------------------------------------------------------------------
//  3) YAPI INSAAT ALANI (YIA) TABLOSU
//     PAIY Madde 4: Yapi insaat alani = bodrum katlar dahil butun katlarin
//     brut alanlari toplami.
// -----------------------------------------------------------------------------
Tablo YapiInsaatAlaniTablosu (const ProjeVerisi& v)
{
    Tablo t;
    t.baslik   = "YAPI INSAAT ALANI TABLOSU";
    t.sutunlar = { "Kat", "Brut Insaat Alani (m2)" };

    std::map<int, std::pair<std::string, double>> katlar;
    for (const auto& a : v.alanlar) {
        auto& p = katlar[a.katIndex];
        if (p.first.empty ()) p.first = a.katAdi;
        p.second += a.alan;
    }

    double toplam = 0;
    for (const auto& kv : katlar) {
        std::string ad = kv.second.first.empty ()
                             ? ("Kat " + std::to_string (kv.first)) : kv.second.first;
        t.satirlar.push_back ({ ad, SayiBicimle (kv.second.second) });
        toplam += kv.second.second;
    }
    t.satirlar.push_back ({ "TOPLAM YAPI INSAAT ALANI", SayiBicimle (toplam) });

    t.notlar.push_back ("Yapi insaat alani, bodrum katlar dahil tum katlarin brut "
                        "alanlari toplamidir (PAIY Madde 4).");
    return t;
}

// -----------------------------------------------------------------------------
//  4) KAT IRTIFAKI / ARSA PAYI TABLOSU
//     Bagimsiz bolumlerin brut alanlariyla orantili arsa payi (/1000).
// -----------------------------------------------------------------------------
Tablo KatIrtifakiTablosu (const ProjeVerisi& v)
{
    Tablo t;
    t.baslik   = "KAT IRTIFAKI (ARSA PAYI) TABLOSU";
    t.sutunlar = { "B.B. No", "Bagimsiz Bolum", "Kat", "Kullanim",
                   "Brut Alan (m2)", "Arsa Payi (/1000)" };

    std::vector<const AlanKaydi*> bb;
    double toplamAlan = 0;
    for (const auto& a : v.alanlar)
        if (a.bagimsizBolum) { bb.push_back (&a); toplamAlan += a.alan; }

    long long payToplam = 0;
    int sira = 1;
    for (const auto* a : bb) {
        long long pay = toplamAlan > kEps
                            ? (long long) std::llround (a->alan / toplamAlan * 1000.0)
                            : 0;
        payToplam += pay;
        t.satirlar.push_back ({
            std::to_string (sira++),
            a->ad.empty () ? a->noStr : a->ad,
            a->katAdi,
            KullanimAdi (a->kullanim),
            SayiBicimle (a->alan),
            std::to_string (pay)
        });
    }
    t.satirlar.push_back ({ "TOPLAM", std::to_string ((int) bb.size ()) + " B.B.", "", "",
                            SayiBicimle (toplamAlan), std::to_string (payToplam) });

    t.notlar.push_back ("Arsa paylari bagimsiz bolum brut alanlariyla orantili "
                        "hesaplanmistir; yuvarlamadan dolayi toplam 1000'den kucuk "
                        "sapma gosterebilir, en buyuk paya ekleyerek 1000'e tamamlayiniz.");
    return t;
}

// -----------------------------------------------------------------------------
//  5) OTOPARK HESABI
// -----------------------------------------------------------------------------
Tablo OtoparkHesabi (const ProjeVerisi& v)
{
    Tablo t;
    t.baslik   = "OTOPARK HESABI";
    t.sutunlar = { "Kullanim", "Yontem", "Miktar", "Gerekli Otopark (adet)" };

    std::vector<OtoparkKurali> kurallar = v.parametreler.otoparkKurallari.empty ()
                                              ? VarsayilanOtoparkKurallari ()
                                              : v.parametreler.otoparkKurallari;

    // her kullanim icin adet BB ve toplam alan
    std::map<int, int>    bbSay;   // Kullanim -> adet
    std::map<int, double> alanTop; // Kullanim -> m2
    for (const auto& a : v.alanlar) {
        int k = (int) a.kullanim;
        alanTop[k] += a.alan;
        if (a.bagimsizBolum) bbSay[k] += 1;
    }

    int toplamOtopark = 0;
    for (const auto& kural : kurallar) {
        int k = (int) kural.kullanim;
        // bu kullanimda hic alan yoksa satir ekleme
        if (alanTop.find (k) == alanTop.end () && bbSay.find (k) == bbSay.end ())
            continue;

        int gerekli = 0;
        std::string yontem, miktar;
        if (kural.mod == OtoparkModu::BagimsizBolumBasina) {
            int adet = bbSay.count (k) ? bbSay[k] : 0;
            gerekli = kural.katsayi > kEps
                          ? (int) std::ceil (adet / kural.katsayi) : 0;
            yontem = "Her " + SayiBicimle (kural.katsayi, 0, false) + " B.B. icin 1";
            miktar = std::to_string (adet) + " B.B.";
        } else {
            double alan = alanTop.count (k) ? alanTop[k] : 0.0;
            gerekli = kural.katsayi > kEps
                          ? (int) std::ceil (alan / kural.katsayi) : 0;
            yontem = "Her " + SayiBicimle (kural.katsayi, 0, false) + " m2 icin 1";
            miktar = SayiBicimle (alan) + " m2";
        }
        toplamOtopark += gerekli;
        t.satirlar.push_back ({ KullanimAdi (kural.kullanim), yontem, miktar,
                                std::to_string (gerekli) });
    }
    t.satirlar.push_back ({ "TOPLAM", "", "", std::to_string (toplamOtopark) });

    t.notlar.push_back ("Otopark oranlari ulusal Otopark Yonetmeligi baz alinarak "
                        "verilmistir; ilgili belediye plan notlarina gore revize ediniz.");
    return t;
}

// -----------------------------------------------------------------------------
//  6) SIGINAK HESABI
// -----------------------------------------------------------------------------
Tablo SiginakHesabi (const ProjeVerisi& v)
{
    Tablo t;
    t.baslik   = "SIGINAK HESABI";
    t.sutunlar = { "Aciklama", "Deger" };

    const auto& sp = v.parametreler.siginak;
    const int bbToplam   = BagimsizBolumSayisi (v, false);
    const int bbKonut    = BagimsizBolumSayisi (v, true);
    const double emsalAlan = EmsaleDahilAlan (v);
    const bool zorunlu   = bbToplam > sp.esikBagimsizBolum;

    auto row = [&] (const std::string& a, const std::string& b) {
        t.satirlar.push_back ({ a, b });
    };

    row ("Toplam Bagimsiz Bolum Sayisi", std::to_string (bbToplam));
    row ("Konut Bagimsiz Bolum Sayisi", std::to_string (bbKonut));
    row ("Siginak Zorunluluk Esigi (B.B.)", std::to_string (sp.esikBagimsizBolum));
    row ("Siginak Zorunlu mu?", zorunlu ? "EVET" : "HAYIR");

    double gerekliAlan = 0.0;
    if (zorunlu) {
        if (sp.yontem == SiginakYontemi::AlanYuzdesi) {
            gerekliAlan = emsalAlan * sp.oran;
            row ("Hesap Yontemi", "Emsal Alani Yuzdesi");
            row ("Emsale Dahil Alan (m2)", SayiBicimle (emsalAlan));
            row ("Oran", SayiBicimle (sp.oran * 100.0, 1, false) + " %");
        } else {
            double nufus = bbKonut * sp.kisiPerBagimsizBolum;
            gerekliAlan = nufus * sp.kisiBasinaAlan;
            row ("Hesap Yontemi", "Nufus Uzerinden");
            row ("Kisi / Bagimsiz Bolum", SayiBicimle (sp.kisiPerBagimsizBolum, 1, false));
            row ("Hesap Nufusu (kisi)", SayiBicimle (nufus, 0, false));
            row ("Kisi Basina Alan (m2)", SayiBicimle (sp.kisiBasinaAlan, 2, false));
        }
        row ("GEREKLI SIGINAK ALANI (m2)", SayiBicimle (gerekliAlan));
    }

    t.notlar.push_back ("Siginak yukumlulugu ve alan hesabi Siginak Yonetmeligi'ne gore "
                        "yapilir; esik, yontem ve katsayilar parametriktir ve ilgili "
                        "yonetmelik/belediye hukmune gore kontrol edilmelidir.");
    return t;
}

// -----------------------------------------------------------------------------
//  Toplu ureticiler ve CSV
// -----------------------------------------------------------------------------
std::vector<Tablo> TumTablolar (const ProjeVerisi& v)
{
    return {
        EmsalHesabi (v),
        EmsalTablosu (v),
        YapiInsaatAlaniTablosu (v),
        KatIrtifakiTablosu (v),
        OtoparkHesabi (v),
        SiginakHesabi (v),
    };
}

std::string TabloCsv (const Tablo& tablo)
{
    auto kacisli = [] (const std::string& s) {
        // noktali virgul CSV: hucrede ; veya " varsa tirnakla
        if (s.find (';') != std::string::npos || s.find ('"') != std::string::npos
            || s.find ('\n') != std::string::npos) {
            std::string r = "\"";
            for (char c : s) { if (c == '"') r += "\"\""; else r += c; }
            r += "\"";
            return r;
        }
        return s;
    };

    std::ostringstream os;
    os << tablo.baslik << "\n";
    for (size_t i = 0; i < tablo.sutunlar.size (); ++i)
        os << (i ? ";" : "") << kacisli (tablo.sutunlar[i]);
    os << "\n";
    for (const auto& satir : tablo.satirlar) {
        for (size_t i = 0; i < satir.size (); ++i)
            os << (i ? ";" : "") << kacisli (satir[i]);
        os << "\n";
    }
    for (const auto& n : tablo.notlar)
        os << kacisli ("Not: " + n) << "\n";
    return os.str ();
}

std::string TumTablolarCsv (const std::vector<Tablo>& tablolar)
{
    std::ostringstream os;
    for (const auto& t : tablolar) os << TabloCsv (t) << "\n";
    return os.str ();
}

} // namespace Imar
