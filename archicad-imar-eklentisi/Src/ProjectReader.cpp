// =============================================================================
//  ProjectReader.cpp  -  ArchiCAD Zone (Alan) okuma katmani
// =============================================================================
#include "ImarPrecompiledHeader.hpp"
#include "ProjectReader.hpp"

#include <algorithm>
#include <cctype>
#include <map>

namespace Imar {

// -----------------------------------------------------------------------------
//  Yardimci: bir zone'un olculen alanini (m2) dondurur.
//  (Graphisoft Community ornegi ile ayni desen; API_ZoneAllQuantity.area)
// -----------------------------------------------------------------------------
static double ZoneAlaniOku (const API_Guid& zoneGuid)
{
    API_ElementQuantity quantity = {};
    API_Quantities      quantities = {};
    API_QuantitiesMask  mask;

    ACAPI_ELEMENT_QUANTITY_MASK_CLEAR (mask);
    ACAPI_ELEMENT_QUANTITY_MASK_SET (mask, zone, area);

    quantities.elements = &quantity;

    GSErrCode err = ACAPI_Element_GetQuantities (zoneGuid, nullptr, &quantities, &mask);
    if (err != NoError)
        return 0.0;
    return quantity.zone.area;
}

// -----------------------------------------------------------------------------
//  Yardimci: kucuk harfe cevir (ASCII) + Turkce karakter sadelestirme.
//  Siniflandirmayi metin icermesine gore yapabilmek icin.
// -----------------------------------------------------------------------------
static std::string Normalize (const std::string& s)
{
    std::string r;
    r.reserve (s.size ());
    for (unsigned char c : s) {
        // basit ASCII kucuk harf
        r.push_back ((char) std::tolower (c));
    }
    return r;
}

static bool Icerir (const std::string& hay, const char* needle)
{
    return hay.find (needle) != std::string::npos;
}

// -----------------------------------------------------------------------------
//  Kategori / alan adina gore varsayilan siniflandirma.
//  PAIY Madde 5 (emsal harici alanlar) yaygin pratige gore siniflar; kullanici
//  kendi Alan Kategorisi isimlerine gore bu kurallari revize edebilir.
// -----------------------------------------------------------------------------
void ProjectReader::Siniflandir (const std::string& kategoriAdi,
                                 const std::string& alanAdi,
                                 EmsalDurumu&        emsalCikti,
                                 Kullanim&           kullanimCikti,
                                 bool&               bagimsizBolumCikti)
{
    std::string k = Normalize (kategoriAdi + " " + alanAdi);

    // --- Emsal HARICI (muaf) alanlar ---
    if (Icerir (k, "siginak") || Icerir (k, "otopark") || Icerir (k, "teknik") ||
        Icerir (k, "tesisat") || Icerir (k, "su deposu") || Icerir (k, "sudeposu") ||
        Icerir (k, "hidrofor") || Icerir (k, "jenerator") || Icerir (k, "asansor") ||
        Icerir (k, "merdiven") || Icerir (k, "isliklik") || Icerir (k, "isiklik") ||
        Icerir (k, "koridor") || Icerir (k, "hol") || Icerir (k, "ortak") ||
        Icerir (k, "dolasim") || Icerir (k, "cop") || Icerir (k, "depo")) {
        emsalCikti = EmsalDurumu::Haric;
        kullanimCikti = Kullanim::Diger;
        bagimsizBolumCikti = false;
        return;
    }

    // --- Emsale DAHIL, kullanim ayrimi ---
    if (Icerir (k, "dukkan") || Icerir (k, "magaza") || Icerir (k, "ticari") ||
        Icerir (k, "market")) {
        emsalCikti = EmsalDurumu::Dahil;
        kullanimCikti = Kullanim::Ticari;
        bagimsizBolumCikti = true;
        return;
    }
    if (Icerir (k, "ofis") || Icerir (k, "buro")) {
        emsalCikti = EmsalDurumu::Dahil;
        kullanimCikti = Kullanim::Ofis;
        bagimsizBolumCikti = true;
        return;
    }
    if (Icerir (k, "daire") || Icerir (k, "konut") || Icerir (k, "mesken")) {
        emsalCikti = EmsalDurumu::Dahil;
        kullanimCikti = Kullanim::Konut;
        bagimsizBolumCikti = true;
        return;
    }

    // Varsayilan: emsale dahil konut mahali (oda, salon vb.) -> bagimsiz bolum degil,
    // ancak emsale dahil. (Ayni daireye ait odalar tek tek B.B. sayilmamali.)
    emsalCikti = EmsalDurumu::Dahil;
    kullanimCikti = Kullanim::Konut;
    bagimsizBolumCikti = false;
}

// -----------------------------------------------------------------------------
//  Kat (story) isimlerini floorInd -> ad seklinde okur.
// -----------------------------------------------------------------------------
static std::map<short, GS::UniString> KatIsimleriniOku ()
{
    std::map<short, GS::UniString> sonuc;
    API_StoryInfo storyInfo = {};
    GSErrCode err = ACAPI_ProjectSetting_GetStorySettings (&storyInfo);
    if (err != NoError || storyInfo.data == nullptr)
        return sonuc;

    USize n = BMGetHandleSize ((GSHandle) storyInfo.data) / sizeof (API_StoryType);
    for (USize i = 0; i < n; ++i) {
        const API_StoryType& st = (*storyInfo.data)[i];
        sonuc[st.index] = GS::UniString (st.uName);
    }
    BMKillHandle ((GSHandle*) &storyInfo.data);
    return sonuc;
}

// -----------------------------------------------------------------------------
//  Projedeki tum zone'lari oku.
// -----------------------------------------------------------------------------
void ProjectReader::ZonelariOku (ProjeVerisi& veri)
{
    veri.alanlar.clear ();

    GS::Array<API_Guid> zoneList;
    GSErrCode err = ACAPI_Element_GetElemList (API_ZoneID, &zoneList);
    if (err != NoError)
        return;

    std::map<short, GS::UniString> katIsimleri = KatIsimleriniOku ();

    for (const API_Guid& guid : zoneList) {
        API_Element element = {};
        element.header.guid = guid;
        if (ACAPI_Element_Get (&element) != NoError)
            continue;

        AlanKaydi kayit;

        GS::UniString ad (element.zone.roomName);
        GS::UniString no (element.zone.roomNoStr);
        GS::UniString kategori (element.zone.catName);

        kayit.ad       = ad.ToCStr (0, MaxUSize, CC_UTF8).Get ();
        kayit.noStr    = no.ToCStr (0, MaxUSize, CC_UTF8).Get ();
        kayit.kategori = kategori.ToCStr (0, MaxUSize, CC_UTF8).Get ();

        short floorInd = element.header.floorInd;
        kayit.katIndex = floorInd;
        auto it = katIsimleri.find (floorInd);
        if (it != katIsimleri.end ())
            kayit.katAdi = it->second.ToCStr (0, MaxUSize, CC_UTF8).Get ();
        else
            kayit.katAdi = std::string ("Kat ") + std::to_string ((int) floorInd);

        kayit.alan = ZoneAlaniOku (guid);

        Siniflandir (kayit.kategori, kayit.ad,
                     kayit.emsal, kayit.kullanim, kayit.bagimsizBolum);

        // Zemin kat oturumu (TAKS): zemin kat (index 0) ve emsale dahil ise.
        kayit.zeminOturum = (floorInd == 0 && kayit.emsal == EmsalDurumu::Dahil);

        veri.alanlar.push_back (kayit);
    }
}

} // namespace Imar
