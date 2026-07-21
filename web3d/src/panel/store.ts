// Çelik imalat paneli — localStorage tabanlı kalıcı depo.
// Sunucu yok; tüm veriler tarayıcıda saklanır.
import { useCallback, useEffect, useState } from "react";
import { yeniProje, type Proje } from "./types";

const ANAHTAR = "celik-imalat-paneli/v1";

interface DepoDurumu {
  projeler: Proje[];
  aktifId: string;
}

function yukle(): DepoDurumu {
  try {
    const ham = localStorage.getItem(ANAHTAR);
    if (ham) {
      const d = JSON.parse(ham) as DepoDurumu;
      if (d.projeler?.length) return d;
    }
  } catch {
    /* bozuk veri — sıfırdan başla */
  }
  const ilk = yeniProje("Örnek Çelik Yapı Projesi");
  return { projeler: [ilk], aktifId: ilk.id };
}

function kaydet(d: DepoDurumu) {
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify(d));
  } catch {
    /* kota dolabilir — sessizce geç */
  }
}

export interface PanelStore {
  projeler: Proje[];
  aktif: Proje;
  aktifId: string;
  setAktifId: (id: string) => void;
  projeEkle: (ad?: string) => void;
  projeSil: (id: string) => void;
  guncelle: (degisiklik: Partial<Proje>) => void;
  /** Aktif projeyi fonksiyonla günceller (immutable). */
  degistir: (fn: (p: Proje) => Proje) => void;
  disaAktar: () => void;
  iceAktar: (json: string) => boolean;
}

export function usePanelStore(): PanelStore {
  const [durum, setDurum] = useState<DepoDurumu>(yukle);

  useEffect(() => {
    kaydet(durum);
  }, [durum]);

  const aktif =
    durum.projeler.find((p) => p.id === durum.aktifId) ?? durum.projeler[0];

  const setAktifId = useCallback((id: string) => {
    setDurum((d) => ({ ...d, aktifId: id }));
  }, []);

  const projeEkle = useCallback((ad?: string) => {
    setDurum((d) => {
      const p = yeniProje(ad || `Proje ${d.projeler.length + 1}`);
      return { projeler: [...d.projeler, p], aktifId: p.id };
    });
  }, []);

  const projeSil = useCallback((id: string) => {
    setDurum((d) => {
      const kalan = d.projeler.filter((p) => p.id !== id);
      if (kalan.length === 0) {
        const ilk = yeniProje("Yeni Proje");
        return { projeler: [ilk], aktifId: ilk.id };
      }
      const aktifId = d.aktifId === id ? kalan[0].id : d.aktifId;
      return { projeler: kalan, aktifId };
    });
  }, []);

  const degistir = useCallback((fn: (p: Proje) => Proje) => {
    setDurum((d) => ({
      ...d,
      projeler: d.projeler.map((p) => (p.id === d.aktifId ? fn(p) : p)),
    }));
  }, []);

  const guncelle = useCallback(
    (degisiklik: Partial<Proje>) => {
      degistir((p) => ({ ...p, ...degisiklik }));
    },
    [degistir],
  );

  const disaAktar = useCallback(() => {
    const blob = new Blob([JSON.stringify(durum, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "celik-imalat-paneli-yedek.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }, [durum]);

  const iceAktar = useCallback((json: string): boolean => {
    try {
      const d = JSON.parse(json) as DepoDurumu;
      if (!d.projeler?.length) return false;
      setDurum({ projeler: d.projeler, aktifId: d.aktifId || d.projeler[0].id });
      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    projeler: durum.projeler,
    aktif,
    aktifId: durum.aktifId,
    setAktifId,
    projeEkle,
    projeSil,
    guncelle,
    degistir,
    disaAktar,
    iceAktar,
  };
}
