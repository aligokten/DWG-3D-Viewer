// =============================================================================
//  ResourceIds.hpp  -  Kaynak (resource) kimlik numaralari ve kontrol indeksleri
// =============================================================================
#ifndef RESOURCEIDS_HPP
#define RESOURCEIDS_HPP

#define ID_ADDON_INFO       32000   // Eklenti adi ve aciklamasi (STR#)
#define ID_ADDON_MENU       32500   // Menu metinleri (STR#)

// Palet (modeless) diyalogu
#define ID_PALETTE_DLG      32600   // 'GDLG' + 'DLGH' palet

// -----------------------------------------------------------------------------
//  Palet uzerindeki kontrol kimlikleri.
//  Bu sira, RINT/ImarAddOn.grc icindeki 'GDLG' ID_PALETTE_DLG tanimindaki item
//  siralamasiyla BIREBIR ayni olmalidir.
// -----------------------------------------------------------------------------
enum PaletteControls {
    PaletteAdaEdit      = 1,   // Ada No (TextEdit)
    PaletteParselEdit   = 2,   // Parsel No (TextEdit)
    PaletteArsaEdit     = 3,   // Arsa Alani m2 (RealEdit)
    PaletteKaksEdit     = 4,   // Emsal / KAKS (RealEdit)
    PaletteTaksEdit     = 5,   // TAKS (RealEdit)
    PaletteHesaplaBtn   = 6,   // "Hesapla / Yenile" (Button)
    PaletteTabloListesi = 7,   // Tablo secimi (SingleSelListBox)
    PaletteTabloIcerik  = 8,   // Secili tablo icerigi (SingleSelListBox, cok sutunlu)
    PaletteCsvBtn       = 9,   // "CSV Disa Aktar" (Button)
    PaletteDurumText    = 10,  // Durum satiri (LeftText)
    PaletteAyracLine    = 11   // Separator
};

// Menu komut indeksleri (STR# ID_ADDON_MENU icindeki sira)
enum MenuItems {
    MenuPaletiAcKapat = 1
};

#endif
