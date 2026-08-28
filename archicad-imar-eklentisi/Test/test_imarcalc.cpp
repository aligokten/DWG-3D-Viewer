// =============================================================================
//  test_imarcalc.cpp
//
//  Hesap motorunun (ImarCalc) ArchiCAD olmadan derlenip test edilmesi.
//  Derleme:  g++ -std=c++17 -I../Src test_imarcalc.cpp ../Src/ImarCalc.cpp -o test
//  Calistir: ./test
// =============================================================================
#include "../Src/ImarCalc.hpp"

#include <cassert>
#include <cmath>
#include <iostream>

using namespace Imar;

static int g_fail = 0;

static void Check (const std::string& ad, bool kosul)
{
    std::cout << (kosul ? "  [GECTI] " : "  [KALDI] ") << ad << "\n";
    if (!kosul) ++g_fail;
}

// belirli bir tabloda "etiket" satirinin ikinci hucresini bulur (2 sutunlu tablolarda)
static std::string DegerBul (const Tablo& t, const std::string& etiket)
{
    for (const auto& s : t.satirlar)
        if (!s.empty () && s[0] == etiket && s.size () >= 2) return s[1];
    return "";
}

// -----------------------------------------------------------------------------
//  Ornek proje: 300 m2 arsa, KAKS 1.50, TAKS 0.30
//  - Zemin kat: 2 daire (60 + 90 m2) emsale dahil, konut, zemin oturumu
//  - 1. kat: 2 daire (60 + 90 m2) emsale dahil, konut
//  - Bodrum: otopark 100 m2 (emsal harici) + siginak 20 m2 (emsal harici)
// -----------------------------------------------------------------------------
static ProjeVerisi OrnekProje ()
{
    ProjeVerisi v;
    v.parametreler.ada           = "1234";
    v.parametreler.parsel        = "5";
    v.parametreler.arsaAlani     = 300.0;
    v.parametreler.emsalKatsayisi = 1.50;   // emsal hakki = 450 m2
    v.parametreler.taksKatsayisi  = 0.30;   // izin taban = 90 m2
    v.parametreler.siginak.yontem = SiginakYontemi::Nufus;
    v.parametreler.siginak.esikBagimsizBolum = 3; // test icin dusuk esik

    auto daire = [] (const std::string& ad, const std::string& kat, int idx,
                     double alan, bool zemin) {
        AlanKaydi a;
        a.ad = ad; a.katAdi = kat; a.katIndex = idx; a.alan = alan;
        a.emsal = EmsalDurumu::Dahil; a.kullanim = Kullanim::Konut;
        a.bagimsizBolum = true; a.zeminOturum = zemin;
        a.kategori = "Konut";
        return a;
    };

    v.alanlar.push_back (daire ("Daire 1", "Zemin Kat", 0, 60.0, true));
    v.alanlar.push_back (daire ("Daire 2", "Zemin Kat", 0, 90.0, true));
    v.alanlar.push_back (daire ("Daire 3", "1. Kat", 1, 60.0, false));
    v.alanlar.push_back (daire ("Daire 4", "1. Kat", 1, 90.0, false));

    AlanKaydi otopark;
    otopark.ad = "Otopark"; otopark.katAdi = "Bodrum"; otopark.katIndex = -1;
    otopark.alan = 100.0; otopark.emsal = EmsalDurumu::Haric;
    otopark.kullanim = Kullanim::Diger; otopark.kategori = "Otopark";
    v.alanlar.push_back (otopark);

    AlanKaydi siginak;
    siginak.ad = "Siginak"; siginak.katAdi = "Bodrum"; siginak.katIndex = -1;
    siginak.alan = 20.0; siginak.emsal = EmsalDurumu::Haric;
    siginak.kullanim = Kullanim::Diger; siginak.kategori = "Siginak";
    v.alanlar.push_back (siginak);

    return v;
}

int main ()
{
    ProjeVerisi v = OrnekProje ();

    std::cout << "== SayiBicimle ==\n";
    Check ("1234.5 -> 1.234,50", SayiBicimle (1234.5) == "1.234,50");
    Check ("0 -> 0,00", SayiBicimle (0.0) == "0,00");
    Check ("-12.3 -> -12,30", SayiBicimle (-12.3) == "-12,30");
    Check ("1234567.89 -> 1.234.567,89", SayiBicimle (1234567.89) == "1.234.567,89");
    Check ("2.5 tam -> 2 (0 ondalik)", SayiBicimle (2.5, 0, false) == "2" || SayiBicimle (2.5,0,false) == "3");

    std::cout << "== Emsal Hesabi ==\n";
    Tablo eh = EmsalHesabi (v);
    // emsale dahil = 60+90+60+90 = 300
    Check ("Emsale dahil = 300,00", DegerBul (eh, "Emsale Dahil Insaat Alani (m2)") == "300,00");
    // emsal harici = 100+20 = 120
    Check ("Emsal harici = 120,00", DegerBul (eh, "Emsal Harici Alan (m2)") == "120,00");
    // toplam insaat = 420
    Check ("Toplam insaat = 420,00", DegerBul (eh, "Toplam Insaat Alani (m2)") == "420,00");
    // emsal hakki = 450
    Check ("Emsal hakki = 450,00", DegerBul (eh, "Verilen Emsal Hakki (m2)") == "450,00");
    // kalan hak = 150
    Check ("Kalan hak = 150,00", DegerBul (eh, "Kalan Emsal Hakki (m2)") == "150,00");
    // kullanilan emsal = 300/300 = 1.000
    Check ("Kullanilan emsal = 1,000", DegerBul (eh, "Kullanilan Emsal (KAKS)") == "1,000");
    Check ("Emsal durumu UYGUN", DegerBul (eh, "EMSAL DURUMU") == "UYGUN");
    // taban alani = 60+90 = 150 (zemin oturumu)
    Check ("Taban alani = 150,00", DegerBul (eh, "Taban Alani (m2)") == "150,00");
    // kullanilan TAKS = 150/300 = 0.500 > 0.30 -> asim
    Check ("Kullanilan TAKS = 0,500", DegerBul (eh, "Kullanilan TAKS") == "0,500");
    Check ("TAKS durumu ASIMI", DegerBul (eh, "TAKS DURUMU") == "TAKS ASIMI!");

    std::cout << "== Emsal Tablosu (kat bazinda) ==\n";
    Tablo et = EmsalTablosu (v);
    // TOPLAM satiri: dahil 300, haric 120
    const auto& toplamSatir = et.satirlar.back ();
    Check ("Emsal tablosu TOPLAM satiri", toplamSatir[0] == "TOPLAM"
           && toplamSatir[1] == "300,00" && toplamSatir[2] == "120,00");

    std::cout << "== Yapi Insaat Alani ==\n";
    Tablo yia = YapiInsaatAlaniTablosu (v);
    // toplam brut = 420
    Check ("YIA toplam = 420,00", yia.satirlar.back ()[1] == "420,00");

    std::cout << "== Kat Irtifaki ==\n";
    Tablo ki = KatIrtifakiTablosu (v);
    // 4 bagimsiz bolum + toplam satiri = 5 satir
    Check ("Kat irtifaki 4 B.B. + toplam", ki.satirlar.size () == 5);
    // toplam bagimsiz bolum alani = 300
    Check ("Kat irtifaki toplam alan = 300,00", ki.satirlar.back ()[4] == "300,00");
    // arsa paylari toplami ~1000
    {
        long long payTop = std::stoll (ki.satirlar.back ()[5]);
        Check ("Arsa payi toplami 1000'e cok yakin", std::llabs (payTop - 1000) <= 2);
    }

    std::cout << "== Otopark Hesabi ==\n";
    v.parametreler.otoparkKurallari = VarsayilanOtoparkKurallari ();
    Tablo op = OtoparkHesabi (v);
    // 4 konut daire, her daireye 1 -> en az 4 otopark toplam
    {
        int toplam = std::stoi (op.satirlar.back ()[3]);
        Check ("Otopark toplam >= 4 (konut)", toplam >= 4);
    }

    std::cout << "== Siginak Hesabi ==\n";
    Tablo sg = SiginakHesabi (v);
    // 4 BB > esik 3 -> zorunlu
    Check ("Siginak zorunlu EVET", DegerBul (sg, "Siginak Zorunlu mu?") == "EVET");
    // nufus = 4 konut * 4 kisi = 16; gerekli = 16 * 1 = 16 m2
    Check ("Gerekli siginak alani = 16,00", DegerBul (sg, "GEREKLI SIGINAK ALANI (m2)") == "16,00");

    std::cout << "== CSV ==\n";
    std::string csv = TumTablolarCsv (TumTablolar (v));
    Check ("CSV bos degil", csv.size () > 100);
    Check ("CSV noktali virgul iceriyor", csv.find (';') != std::string::npos);

    std::cout << "\n";
    if (g_fail == 0) {
        std::cout << "TUM TESTLER GECTI.\n";
        return 0;
    }
    std::cout << g_fail << " TEST KALDI!\n";
    return 1;
}
