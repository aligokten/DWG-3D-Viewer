// =============================================================================
//  AddOnMain.cpp
//
//  Imar Hesap eklentisinin giris noktasi. ArchiCAD Add-On'un zorunlu 4
//  fonksiyonunu (CheckEnvironment, RegisterInterface, Initialize, FreeData)
//  ve menu komut isleyicisini icerir.
// =============================================================================
#include "ImarPrecompiledHeader.hpp"
#include "ResourceIds.hpp"
#include "ImarPalette.hpp"

// -----------------------------------------------------------------------------
//  Menu komut isleyicisi
// -----------------------------------------------------------------------------
static GSErrCode MenuCommandHandler (const API_MenuParams* menuParams)
{
    switch (menuParams->menuItemRef.menuResID) {
        case ID_ADDON_MENU:
            switch (menuParams->menuItemRef.itemIndex) {
                case MenuPaletiAcKapat:
                    Imar::ImarPalette::Instance ().ToggleVisibility ();
                    break;
            }
            break;
    }
    return NoError;
}

// -----------------------------------------------------------------------------
//  CheckEnvironment: eklenti adi/aciklamasini bildirir.
// -----------------------------------------------------------------------------
API_AddonType CheckEnvironment (API_EnvirParams* envir)
{
    RSGetIndString (&envir->addOnInfo.name, ID_ADDON_INFO, 1, ACAPI_GetOwnResModule ());
    RSGetIndString (&envir->addOnInfo.description, ID_ADDON_INFO, 2, ACAPI_GetOwnResModule ());
    return APIAddon_Normal;
}

// -----------------------------------------------------------------------------
//  RegisterInterface: menuyu kaydeder.
// -----------------------------------------------------------------------------
GSErrCode RegisterInterface (void)
{
    GSErrCode err = ACAPI_MenuItem_RegisterMenu (ID_ADDON_MENU, 0, MenuCode_UserDef, MenuFlag_Default);
    return err;
}

// -----------------------------------------------------------------------------
//  Initialize: menu isleyicisini kurar ve modeless paleti kaydeder.
// -----------------------------------------------------------------------------
GSErrCode Initialize (void)
{
    GSErrCode err = ACAPI_MenuItem_InstallMenuHandler (ID_ADDON_MENU, MenuCommandHandler);
    if (err != NoError)
        return err;

    // Modeless (kalici) paleti kaydet.
    GSFlags flags = API_PalEnabled_FloorPlan + API_PalEnabled_Section    +
                    API_PalEnabled_Detail    + API_PalEnabled_Layout     +
                    API_PalEnabled_3D        + API_PalEnabled_Elevation   +
                    API_PalEnabled_Worksheet + API_PalEnabled_Document3D;

    err = ACAPI_RegisterModelessWindow (
        Imar::ImarPalette::paletteRefId,
        Imar::ImarPalette::PaletteControlCallBack,
        flags,
        GSGuid2APIGuid (Imar::ImarPalette::paletteGuid));

    return err;
}

// -----------------------------------------------------------------------------
//  FreeData: temizlik.
// -----------------------------------------------------------------------------
GSErrCode FreeData (void)
{
    if (Imar::ImarPalette::HasInstance ())
        Imar::ImarPalette::DestroyInstance ();
    return NoError;
}
