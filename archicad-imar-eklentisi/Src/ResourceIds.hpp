// =============================================================================
//  ResourceIds.hpp  -  Kaynak (resource) kimlik numaralari ve kontrol indeksleri
//
//  ONEMLI: Bu dosya hem C++ hem de .grc kaynagi tarafindan #include edilir.
//  ResConv (kaynak derleyici) C++ 'enum' sozdizimini anlamaz; bu yuzden tum
//  sabitler 'enum' yerine '#define' ile tanimlanmistir.
// =============================================================================
#ifndef RESOURCEIDS_HPP
#define RESOURCEIDS_HPP

#define ID_ADDON_INFO       32000   // Eklenti adi ve aciklamasi (STR#)
#define ID_ADDON_MENU       32500   // Menu metinleri (STR#)
#define ID_PALETTE_DLG      32600   // 'GDLG' + 'DLGH' palet

// -----------------------------------------------------------------------------
//  Palet uzerindeki kontrol kimlikleri.
//  Bu sira, RINT/AddOn.grc icindeki 'GDLG' ID_PALETTE_DLG tanimindaki item
//  siralamasiyla BIREBIR ayni olmalidir (1..11 etkilesimli, 12+ etiketler).
// -----------------------------------------------------------------------------
#define PaletteAdaEdit       1   // Ada No (TextEdit)
#define PaletteParselEdit    2   // Parsel No (TextEdit)
#define PaletteArsaEdit      3   // Arsa Alani m2 (TextEdit -> sayi)
#define PaletteKaksEdit      4   // Emsal / KAKS (TextEdit -> sayi)
#define PaletteTaksEdit      5   // TAKS (TextEdit -> sayi)
#define PaletteHesaplaBtn    6   // "Hesapla / Yenile" (Button)
#define PaletteTabloListesi  7   // Tablo secimi (SingleSelList)
#define PaletteTabloIcerik   8   // Secili tablo icerigi (SingleSelList, cok sutun)
#define PaletteCsvBtn        9   // "CSV Disa Aktar" (Button)
#define PaletteDurumText     10  // Durum satiri (LeftText)
#define PaletteAyracLine     11  // Separator

// Menu komut indeksi (STR# ID_ADDON_MENU icindeki sira)
#define MenuPaletiAcKapat    1

#endif
