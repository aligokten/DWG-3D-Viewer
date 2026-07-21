// Sipariş & Satın Alma sekmesi — BOM'dan otomatik ihtiyaç listesi + manuel siparişler.
import {
  SATINALMA_DURUMLARI,
  yeniId,
  type SatinAlma,
  type Proje,
} from "../types";
import { kalemHesapla, fmt, fmtTL } from "../calc";
import { Kart, Metin, Sayi, Secim, Dugme, Rozet } from "../ui";

const DURUM_RENK: Record<string, string> = {
  Talep: "slate",
  "Teklif Alındı": "sari",
  "Sipariş Verildi": "mavi",
  "Kısmi Teslim": "mor",
  "Teslim Alındı": "yesil",
};

export function SatinAlmaTab({
  proje,
  degistir,
}: {
  proje: Proje;
  degistir: (fn: (p: Proje) => Proje) => void;
}) {
  // BOM'dan malzeme ihtiyacı (brüt miktar, birim bazında birleştirilmiş)
  const ihtiyac = new Map<
    string,
    { ad: string; kalite: string; birim: string; miktar: number; brutKg: number }
  >();
  for (const k of proje.kalemler) {
    const h = kalemHesapla(k);
    const anahtar = `${k.ad}|${k.kalite}|${k.birim}`;
    const m = ihtiyac.get(anahtar) || {
      ad: k.ad,
      kalite: k.kalite,
      birim: k.birim,
      miktar: 0,
      brutKg: 0,
    };
    m.miktar += h.brutMiktar;
    m.brutKg += h.brutKg;
    ihtiyac.set(anahtar, m);
  }
  const ihtiyacListe = [...ihtiyac.values()].sort((a, b) => b.brutKg - a.brutKg);

  const ekle = (t?: Partial<SatinAlma>) =>
    degistir((p) => ({
      ...p,
      satinAlmalar: [
        ...p.satinAlmalar,
        {
          id: yeniId(),
          tarih: new Date().toISOString().slice(0, 10),
          tedarikci: "",
          malzeme: "",
          miktar: 0,
          birim: "kg",
          birimFiyat: 0,
          durum: "Talep",
          not: "",
          ...t,
        },
      ],
    }));

  const ihtiyactanEkle = () => {
    degistir((p) => {
      const yeniler: SatinAlma[] = ihtiyacListe.map((m) => ({
        id: yeniId(),
        tarih: new Date().toISOString().slice(0, 10),
        tedarikci: "",
        malzeme: `${m.ad} (${m.kalite})`,
        miktar: +m.miktar.toFixed(2),
        birim: m.birim,
        birimFiyat: 0,
        durum: "Talep" as const,
        not: `Brüt ihtiyaç ≈ ${fmt(m.brutKg)} kg (fire dahil)`,
      }));
      return { ...p, satinAlmalar: [...p.satinAlmalar, ...yeniler] };
    });
  };

  const degis = (id: string, d: Partial<SatinAlma>) =>
    degistir((p) => ({
      ...p,
      satinAlmalar: p.satinAlmalar.map((s) => (s.id === id ? { ...s, ...d } : s)),
    }));

  const sil = (id: string) =>
    degistir((p) => ({
      ...p,
      satinAlmalar: p.satinAlmalar.filter((s) => s.id !== id),
    }));

  const toplamTutar = proje.satinAlmalar.reduce(
    (a, s) => a + (s.miktar || 0) * (s.birimFiyat || 0),
    0,
  );
  const teslimAlinan = proje.satinAlmalar
    .filter((s) => s.durum === "Teslim Alındı")
    .reduce((a, s) => a + (s.miktar || 0) * (s.birimFiyat || 0), 0);

  return (
    <div className="space-y-4">
      {/* Otomatik ihtiyaç listesi */}
      <Kart
        baslik="Malzeme İhtiyaç Listesi (BOM'dan — fire dahil brüt)"
        aksiyon={
          ihtiyacListe.length > 0 && (
            <Dugme onClick={ihtiyactanEkle} varyant="ikincil">
              ↓ Satın alma listesine aktar
            </Dugme>
          )
        }
      >
        {ihtiyacListe.length === 0 ? (
          <p className="py-3 text-center text-sm text-slate-400">
            Önce malzeme listesine kalem ekleyin.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs text-slate-500 dark:border-zinc-700 dark:text-slate-400">
                  <th className="px-1 py-2 font-medium">Malzeme</th>
                  <th className="px-1 py-2 font-medium">Kalite</th>
                  <th className="px-1 py-2 text-right font-medium">Brüt Miktar</th>
                  <th className="px-1 py-2 font-medium">Birim</th>
                  <th className="px-1 py-2 text-right font-medium">Brüt kg</th>
                </tr>
              </thead>
              <tbody>
                {ihtiyacListe.map((m, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 dark:border-zinc-800"
                  >
                    <td className="px-1 py-1.5">{m.ad}</td>
                    <td className="px-1 py-1.5">{m.kalite}</td>
                    <td className="px-1 py-1.5 text-right tabular-nums">
                      {fmt(m.miktar)}
                    </td>
                    <td className="px-1 py-1.5">{m.birim}</td>
                    <td className="px-1 py-1.5 text-right tabular-nums text-amber-700 dark:text-amber-300">
                      {fmt(m.brutKg)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Kart>

      {/* Satın alma / sipariş kayıtları */}
      <Kart
        baslik="Siparişler & Satın Almalar"
        aksiyon={<Dugme onClick={() => ekle()}>+ Sipariş Ekle</Dugme>}
      >
        {proje.satinAlmalar.length === 0 ? (
          <p className="py-4 text-center text-sm text-slate-400">
            Sipariş kaydı yok. Yukarıdaki ihtiyaç listesinden aktarın veya elle
            ekleyin.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-zinc-700 dark:text-slate-400">
                  <th className="px-1 py-2 font-medium">Tarih</th>
                  <th className="px-1 py-2 font-medium">Tedarikçi</th>
                  <th className="px-1 py-2 font-medium">Malzeme</th>
                  <th className="px-1 py-2 text-right font-medium">Miktar</th>
                  <th className="px-1 py-2 font-medium">Birim</th>
                  <th className="px-1 py-2 text-right font-medium">Birim Fiyat</th>
                  <th className="px-1 py-2 text-right font-medium">Tutar</th>
                  <th className="px-1 py-2 font-medium">Durum</th>
                  <th className="px-1 py-2 font-medium">Not</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {proje.satinAlmalar.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-slate-100 dark:border-zinc-800"
                  >
                    <td className="px-1 py-1.5">
                      <input
                        type="date"
                        value={s.tarih}
                        onChange={(e) => degis(s.id, { tarih: e.target.value })}
                        className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs dark:border-zinc-600 dark:bg-zinc-900 dark:text-slate-100"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Metin
                        value={s.tedarikci}
                        onChange={(v) => degis(s.id, { tedarikci: v })}
                        placeholder="Tedarikçi"
                        className="w-28"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Metin
                        value={s.malzeme}
                        onChange={(v) => degis(s.id, { malzeme: v })}
                        placeholder="Malzeme"
                        className="w-40"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Sayi
                        value={s.miktar}
                        onChange={(v) => degis(s.id, { miktar: v })}
                        className="w-20"
                        min={0}
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Metin
                        value={s.birim}
                        onChange={(v) => degis(s.id, { birim: v })}
                        className="w-16"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Sayi
                        value={s.birimFiyat}
                        onChange={(v) => degis(s.id, { birimFiyat: v })}
                        className="w-24"
                        min={0}
                      />
                    </td>
                    <td className="px-1 py-1.5 text-right font-semibold tabular-nums">
                      {fmtTL((s.miktar || 0) * (s.birimFiyat || 0))}
                    </td>
                    <td className="px-1 py-1.5">
                      <Secim
                        value={s.durum}
                        onChange={(v) =>
                          degis(s.id, { durum: v as SatinAlma["durum"] })
                        }
                        secenekler={SATINALMA_DURUMLARI}
                        className="w-32"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Metin
                        value={s.not}
                        onChange={(v) => degis(s.id, { not: v })}
                        placeholder="not"
                        className="w-36"
                      />
                    </td>
                    <td className="px-1 py-1.5 text-center">
                      <Dugme
                        varyant="tehlike"
                        onClick={() => sil(s.id)}
                        className="!px-2"
                      >
                        ✕
                      </Dugme>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <span>
            Toplam sipariş:{" "}
            <strong className="tabular-nums">{fmtTL(toplamTutar)}</strong>
          </span>
          <span className="text-emerald-600 dark:text-emerald-300">
            Teslim alınan:{" "}
            <strong className="tabular-nums">{fmtTL(teslimAlinan)}</strong>
          </span>
          <span className="text-amber-600 dark:text-amber-300">
            Bekleyen:{" "}
            <strong className="tabular-nums">
              {fmtTL(toplamTutar - teslimAlinan)}
            </strong>
          </span>
        </div>
      </Kart>

      <div className="flex flex-wrap gap-2">
        <Rozet renk="slate">Talep</Rozet>
        <Rozet renk="sari">Teklif Alındı</Rozet>
        <Rozet renk="mavi">Sipariş Verildi</Rozet>
        <Rozet renk="mor">Kısmi Teslim</Rozet>
        <Rozet renk="yesil">Teslim Alındı</Rozet>
      </div>
    </div>
  );
}
