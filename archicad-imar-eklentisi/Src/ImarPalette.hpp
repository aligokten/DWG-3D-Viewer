// =============================================================================
//  ImarPalette.hpp
//
//  Imar hesaplarini gosteren modeless (kalici) palet.
//  ArchiCAD'in kendi arayuzune uyumlu, sade bir DG paleti kullanir:
//    - Ust kisim: parsel parametreleri (Ada, Parsel, Arsa Alani, KAKS, TAKS)
//    - Sol liste: tablolar (Emsal Hesabi, Emsal Tablosu, YIA, Kat Irtifaki,
//      Otopark, Siginak)
//    - Sag liste: secili tablonun cok sutunlu icerigi
//    - Butonlar: "Hesapla / Yenile", "CSV Disa Aktar"
// =============================================================================
#ifndef IMAR_PALETTE_HPP
#define IMAR_PALETTE_HPP

#include "DGModule.hpp"
#include "ImarCalc.hpp"

namespace Imar {

class ImarPalette : public DG::Palette,
                    public DG::PanelObserver,
                    public DG::ButtonItemObserver,
                    public DG::ListBoxObserver {
public:
    static const GS::Guid  paletteGuid;
    static const Int32     paletteRefId;

    static bool          HasInstance ();
    static ImarPalette&  Instance ();
    static void          DestroyInstance ();

    void  ToggleVisibility ();   // menuden ac/kapa
    bool  IsVisibleSafe () const;

    // Palet geri cagirma (modeless pencere yonetimi)
    static GSErrCode  PaletteControlCallBack (Int32 referenceID,
                                              API_PaletteMessageID messageID,
                                              GS::IntPtr param);

private:
    ImarPalette ();
    virtual ~ImarPalette ();

    // --- kontroller (GDLG kaynagindaki item'lara baglanir) ---
    DG::TextEdit          adaEdit;
    DG::TextEdit          parselEdit;
    DG::RealEdit          arsaEdit;
    DG::RealEdit          kaksEdit;
    DG::RealEdit          taksEdit;
    DG::Button            hesaplaBtn;
    DG::SingleSelListBox  tabloListesi;
    DG::SingleSelListBox  tabloIcerik;
    DG::Button            csvBtn;
    DG::LeftText          durumText;
    DG::Separator         ayrac;

    // --- durum ---
    std::vector<Tablo>    tablolar;

    // --- islevler ---
    void  Hesapla ();                       // projeyi oku + hesapla + doldur
    void  TabloListesiniDoldur ();
    void  SeciliTabloyuGoster ();
    void  CsvDisaAktar ();
    void  DurumYaz (const GS::UniString& msg);
    void  ParametreleriTopla (ProjeParametreleri& p) const;

    // --- observer geri cagirmalari ---
    virtual void  PanelResized (const DG::PanelResizeEvent& ev) override;
    virtual void  ButtonClicked (const DG::ButtonClickEvent& ev) override;
    virtual void  ListBoxSelectionChanged (const DG::ListBoxSelectionEvent& ev) override;

    static ImarPalette*  instance;
};

} // namespace Imar

#endif // IMAR_PALETTE_HPP
