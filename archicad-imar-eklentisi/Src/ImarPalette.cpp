// =============================================================================
//  ImarPalette.cpp  -  Imar hesap paleti (DG modeless)
// =============================================================================
#include "ImarPrecompiledHeader.hpp"
#include "ImarPalette.hpp"
#include "ProjectReader.hpp"
#include "ResourceIds.hpp"

#include "DGFileDialog.hpp"
#include "Location.hpp"

#include <cstdlib>
#include <fstream>
#include <string>

namespace Imar {

// Palet icin sabit kimlikler.
const GS::Guid ImarPalette::paletteGuid ("7C2F3A10-9B44-4E2C-8B1A-3F5E6D7C8A90");
const Int32    ImarPalette::paletteRefId = 1;

ImarPalette* ImarPalette::instance = nullptr;

// UTF-8 std::string -> GS::UniString
static GS::UniString US (const std::string& s)
{
    return GS::UniString (s.c_str (), CC_UTF8);
}

// TextEdit metnini double'a cevir (Turkce virgul ondaligi da kabul eder).
static double MetniSayi (const GS::UniString& u)
{
    std::string s = u.ToCStr (0, MaxUSize, CC_UTF8).Get ();
    for (char& c : s) if (c == ',') c = '.';
    return std::strtod (s.c_str (), nullptr);
}

// -----------------------------------------------------------------------------
//  Yasam dongusu
// -----------------------------------------------------------------------------
bool ImarPalette::HasInstance ()
{
    return instance != nullptr;
}

ImarPalette& ImarPalette::Instance ()
{
    if (instance == nullptr)
        instance = new ImarPalette ();
    return *instance;
}

void ImarPalette::DestroyInstance ()
{
    if (instance != nullptr) {
        delete instance;
        instance = nullptr;
    }
}

ImarPalette::ImarPalette ()
    : DG::Palette (ACAPI_GetOwnResModule (), ID_PALETTE_DLG, ACAPI_GetOwnResModule (), paletteGuid),
      adaEdit      (GetReference (), PaletteAdaEdit),
      parselEdit   (GetReference (), PaletteParselEdit),
      arsaEdit     (GetReference (), PaletteArsaEdit),
      kaksEdit     (GetReference (), PaletteKaksEdit),
      taksEdit     (GetReference (), PaletteTaksEdit),
      hesaplaBtn   (GetReference (), PaletteHesaplaBtn),
      tabloListesi (GetReference (), PaletteTabloListesi),
      tabloIcerik  (GetReference (), PaletteTabloIcerik),
      csvBtn       (GetReference (), PaletteCsvBtn),
      durumText    (GetReference (), PaletteDurumText),
      ayrac        (GetReference (), PaletteAyracLine)
{
    Attach (*this);
    AttachToAllItems (*this);

    // varsayilan degerler
    arsaEdit.SetText ("0");
    kaksEdit.SetText ("1,50");
    taksEdit.SetText ("0,30");

    // tablo icerik listesine baslangicta tek sutun ver
    tabloIcerik.SetTabFieldCount (1);

    DurumYaz ("Parametreleri girip 'Hesapla / Yenile' butonuna basiniz.");
}

ImarPalette::~ImarPalette ()
{
    Detach (*this);
    DetachFromAllItems (*this);
}

bool ImarPalette::IsVisibleSafe () const
{
    return const_cast<ImarPalette*> (this)->IsVisible ();
}

void ImarPalette::ToggleVisibility ()
{
    if (IsVisible ())
        Hide ();
    else
        Show ();
}

// -----------------------------------------------------------------------------
//  Parametreleri palet kontrollerinden topla
// -----------------------------------------------------------------------------
void ImarPalette::ParametreleriTopla (ProjeParametreleri& p) const
{
    p.ada    = const_cast<DG::TextEdit&> (adaEdit).GetText ().ToCStr (0, MaxUSize, CC_UTF8).Get ();
    p.parsel = const_cast<DG::TextEdit&> (parselEdit).GetText ().ToCStr (0, MaxUSize, CC_UTF8).Get ();
    p.arsaAlani      = MetniSayi (const_cast<DG::TextEdit&> (arsaEdit).GetText ());
    p.emsalKatsayisi = MetniSayi (const_cast<DG::TextEdit&> (kaksEdit).GetText ());
    p.taksKatsayisi  = MetniSayi (const_cast<DG::TextEdit&> (taksEdit).GetText ());
    p.otoparkKurallari = VarsayilanOtoparkKurallari ();
}

// -----------------------------------------------------------------------------
//  Projeyi oku + hesapla + tablolari doldur
// -----------------------------------------------------------------------------
void ImarPalette::Hesapla ()
{
    ProjeVerisi veri;
    ParametreleriTopla (veri.parametreler);
    ProjectReader::ZonelariOku (veri);

    if (veri.alanlar.empty ()) {
        DurumYaz ("Projede Alan (Zone) bulunamadi. Once Alanlar tanimlayin.");
    } else {
        DurumYaz (GS::UniString::Printf ("%d adet Alan okundu, hesaplar guncellendi.",
                                         (int) veri.alanlar.size ()));
    }

    tablolar = TumTablolar (veri);
    TabloListesiniDoldur ();
    SeciliTabloyuGoster ();
}

void ImarPalette::TabloListesiniDoldur ()
{
    tabloListesi.DeleteItem (DG::ListBox::AllItems);
    for (const auto& t : tablolar) {
        tabloListesi.AppendItem ();
        tabloListesi.SetItemText (DG::ListBox::BottomItem, US (t.baslik));
    }
    if (!tablolar.empty () && tabloListesi.GetSelectedItem () == 0)
        tabloListesi.SelectItem (1);
}

void ImarPalette::SeciliTabloyuGoster ()
{
    tabloIcerik.DeleteItem (DG::ListBox::AllItems);

    short sel = tabloListesi.GetSelectedItem ();
    if (sel < 1 || (size_t) sel > tablolar.size ()) {
        tabloIcerik.SetTabFieldCount (1);
        return;
    }

    const Tablo& t = tablolar[(size_t) sel - 1];
    short sutunSay = (short) GS::Max ((size_t) 1, t.sutunlar.size ());
    tabloIcerik.SetTabFieldCount (sutunSay);

    // sutun genisliklerini esit dagit
    short toplamGenislik = tabloIcerik.GetItemWidth ();
    short sutunGenislik  = (short) (toplamGenislik / sutunSay);
    for (short i = 0; i < sutunSay; ++i) {
        short beg = (short) (i * sutunGenislik);
        short end = (short) ((i == sutunSay - 1) ? toplamGenislik : (i + 1) * sutunGenislik);
        tabloIcerik.SetTabFieldProperties (
            (short) (i + 1), beg, end,
            DG::ListBox::Left, DG::ListBox::EndTruncate, false, true);
    }

    // ilk satir = sutun basliklari (ayri header bandi kullanmadan)
    {
        tabloIcerik.AppendItem ();
        short hrow = tabloIcerik.GetItemCount ();
        for (short f = 0; f < sutunSay; ++f)
            if ((size_t) f < t.sutunlar.size ())
                tabloIcerik.SetTabItemText (hrow, (short) (f + 1), US (t.sutunlar[(size_t) f]));
    }

    // veri satirlari
    for (const auto& satir : t.satirlar) {
        tabloIcerik.AppendItem ();
        short row = tabloIcerik.GetItemCount ();
        for (short f = 0; f < sutunSay; ++f) {
            const std::string hucre = ((size_t) f < satir.size ()) ? satir[(size_t) f] : std::string ();
            tabloIcerik.SetTabItemText (row, (short) (f + 1), US (hucre));
        }
    }

    // notlari da liste sonuna ekle (tek sutuna sigar sekilde)
    for (const auto& n : t.notlar) {
        tabloIcerik.AppendItem ();
        short row = tabloIcerik.GetItemCount ();
        tabloIcerik.SetTabItemText (row, 1, US ("Not: " + n));
    }
}

// -----------------------------------------------------------------------------
//  CSV disa aktarim
// -----------------------------------------------------------------------------
void ImarPalette::CsvDisaAktar ()
{
    if (tablolar.empty ()) {
        DurumYaz ("Once 'Hesapla / Yenile' ile tablolari olusturun.");
        return;
    }

    DG::FileDialog dlg (DG::FileDialog::Save);
    FTM::FileTypeManager ftMan ("csv");
    FTM::FileType csvType (nullptr, "csv", 0, 0, 0);
    dlg.AddFilter (ftMan.AddType (csvType));
    dlg.SetTitle ("Imar Hesap Tablolarini CSV Olarak Kaydet");

    if (!dlg.Invoke ())
        return;

    IO::Location loc = dlg.GetSelectedFile ();
    GS::UniString pathStr;
    loc.ToPath (&pathStr);
    std::string path = pathStr.ToCStr (0, MaxUSize, CC_UTF8).Get ();

    std::ofstream os (path, std::ios::binary);
    if (!os.is_open ()) {
        DurumYaz ("Dosya yazilamadi: " + pathStr);
        return;
    }
    // UTF-8 BOM (Turkce Excel uyumu icin)
    const unsigned char bom[] = { 0xEF, 0xBB, 0xBF };
    os.write ((const char*) bom, sizeof (bom));
    os << TumTablolarCsv (tablolar);
    os.close ();

    DurumYaz ("CSV kaydedildi: " + pathStr);
}

void ImarPalette::DurumYaz (const GS::UniString& msg)
{
    durumText.SetText (msg);
}

// -----------------------------------------------------------------------------
//  Observer geri cagirmalari
// -----------------------------------------------------------------------------
void ImarPalette::PanelResized (const DG::PanelResizeEvent& ev)
{
    // basit yerlesim: listeler ve butonlar panel boyutuna gore uzasin
    short dh = ev.GetHorizontalChange ();
    short dv = ev.GetVerticalChange ();

    BeginMoveResizeItems ();
    tabloListesi.ResizeItem (0, dv);
    tabloIcerik.Resize (dh, dv);
    tabloIcerik.Move (0, 0);
    csvBtn.Move (0, dv);
    durumText.Move (0, dv);
    durumText.Resize (dh, 0);
    ayrac.Move (0, dv);
    ayrac.Resize (dh, 0);
    EndMoveResizeItems ();

    if (tabloListesi.GetSelectedItem () > 0)
        SeciliTabloyuGoster ();
}

void ImarPalette::ButtonClicked (const DG::ButtonClickEvent& ev)
{
    if (ev.GetSource () == &hesaplaBtn)
        Hesapla ();
    else if (ev.GetSource () == &csvBtn)
        CsvDisaAktar ();
}

void ImarPalette::ListBoxSelectionChanged (const DG::ListBoxSelectionEvent& ev)
{
    if (ev.GetSource () == &tabloListesi)
        SeciliTabloyuGoster ();
}

// -----------------------------------------------------------------------------
//  Modeless pencere geri cagirma
// -----------------------------------------------------------------------------
GSErrCode ImarPalette::PaletteControlCallBack (Int32 /*referenceID*/,
                                               API_PaletteMessageID messageID,
                                               GS::IntPtr param)
{
    switch (messageID) {
        case APIPalMsg_OpenPalette:
            Instance ().Show ();
            break;
        case APIPalMsg_ClosePalette:
            DestroyInstance ();
            break;
        case APIPalMsg_HidePalette_Begin:
            if (HasInstance () && Instance ().IsVisible ())
                Instance ().Hide ();
            break;
        case APIPalMsg_HidePalette_End:
            if (HasInstance () && !Instance ().IsVisible ())
                Instance ().Show ();
            break;
        case APIPalMsg_DisableItems_Begin:
            if (HasInstance ())
                Instance ().DisableItems ();
            break;
        case APIPalMsg_DisableItems_End:
            if (HasInstance ())
                Instance ().EnableItems ();
            break;
        case APIPalMsg_IsPaletteVisible:
            *(reinterpret_cast<bool*> (param)) = HasInstance () && Instance ().IsVisible ();
            break;
        default:
            break;
    }
    return NoError;
}

} // namespace Imar
