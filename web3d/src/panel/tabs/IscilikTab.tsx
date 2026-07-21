// İşçilik & Üretim sekmesi — işçilik/ekipman kalemleri ve üretim durumu takibi.
import { IMALAT_DURUMLARI, yeniId, type IscilikKalemi, type Proje } from "../types";
import { kalemHesapla, projeHesapla, fmt, fmtTL } from "../calc";
import { Kart, Metin, Sayi, Secim, Dugme, Alan, Rozet } from "../ui";

const KATEGORILER = ["İşçilik", "Ekipman", "Nakliye", "Yüzey İşlem", "Diğer"];
const BIRIMLER = ["kg", "saat", "adet", "sefer", "gün", "götürü", "m²"];

const DURUM_RENK: Record<string, string> = {
  Bekliyor: "slate",
  Kesim: "sari",
  "Kaynak/İmalat": "sari",
  "Yüzey/Boya": "mavi",
  Sevkiyat: "mavi",
  Montaj: "mor",
  Tamamlandı: "yesil",
};

const ONERILER: Array<Omit<IscilikKalemi, "id">> = [
  { ad: "Çelik montaj işçiliği (şantiye)", kategori: "İşçilik", birim: "kg", miktar: 0, birimFiyat: 4 },
  { ad: "Sandviç panel montajı", kategori: "İşçilik", birim: "m²", miktar: 0, birimFiyat: 110 },
  { ad: "Betopan / Alçıpan / Boardex montajı", kategori: "İşçilik", birim: "m²", miktar: 0, birimFiyat: 130 },
  { ad: "Yağmur oluğu montajı", kategori: "İşçilik", birim: "m", miktar: 0, birimFiyat: 150 },
  { ad: "İniş borusu montajı", kategori: "İşçilik", birim: "m", miktar: 0, birimFiyat: 120 },
  { ad: "Mobil vinç kirası", kategori: "Ekipman", birim: "gün", miktar: 1, birimFiyat: 8000 },
  { ad: "Nakliye (tır)", kategori: "Nakliye", birim: "sefer", miktar: 1, birimFiyat: 12000 },
  { ad: "Kumlama + boya", kategori: "Yüzey İşlem", birim: "m²", miktar: 0, birimFiyat: 120 },
];

export function IscilikTab({
  proje,
  degistir,
}: {
  proje: Proje;
  degistir: (fn: (p: Proje) => Proje) => void;
}) {
  const hesap = projeHesapla(proje);

  const ekle = (taslak?: Omit<IscilikKalemi, "id">) =>
    degistir((p) => ({
      ...p,
      iscilikler: [
        ...p.iscilikler,
        taslak
          ? { ...taslak, id: yeniId() }
          : { id: yeniId(), ad: "", kategori: "İşçilik", birim: "saat", miktar: 1, birimFiyat: 0 },
      ],
    }));

  const kalemDegistir = (id: string, d: Partial<IscilikKalemi>) =>
    degistir((p) => ({
      ...p,
      iscilikler: p.iscilikler.map((i) => (i.id === id ? { ...i, ...d } : i)),
    }));

  const sil = (id: string) =>
    degistir((p) => ({ ...p, iscilikler: p.iscilikler.filter((i) => i.id !== id) }));

  // Üretim durumu: ağırlığa göre kırılım
  const durumOzet = IMALAT_DURUMLARI.map((d) => {
    let kg = 0;
    let adet = 0;
    for (const k of proje.kalemler) {
      if (k.durum === d) {
        kg += kalemHesapla(k).netKg;
        adet += 1;
      }
    }
    return { durum: d, kg, adet };
  });
  const tamamlananKg = durumOzet.find((d) => d.durum === "Tamamlandı")?.kg || 0;
  const ilerleme = hesap.toplamNetKg > 0 ? (tamamlananKg / hesap.toplamNetKg) * 100 : 0;

  return (
    <div className="space-y-4">
      {/* Atölye işçilik oranı */}
      <Kart baslik="Atölye İmalat İşçiliği (birim)">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Alan label="Atölye işçiliği (₺/kg)">
            <Sayi
              value={proje.atolyeIscilikKg}
              onChange={(v) => degistir((p) => ({ ...p, atolyeIscilikKg: v }))}
            />
          </Alan>
          <div className="sm:col-span-3 flex items-end text-xs text-slate-500 dark:text-slate-400">
            Kesim, kaynak, birleşim ve montaj hazırlığını kapsayan atölye
            işçiliği net çelik ağırlığıyla çarpılır:{" "}
            <strong className="ml-1">
              {fmt(hesap.toplamNetKg)} kg × {fmt(proje.atolyeIscilikKg)} ₺ ={" "}
              {fmtTL(hesap.atolyeIscilik)}
            </strong>
          </div>
        </div>
      </Kart>

      {/* Ek işçilik / ekipman / nakliye */}
      <Kart
        baslik="İşçilik, Ekipman ve Nakliye Kalemleri"
        aksiyon={<Dugme onClick={() => ekle()}>+ Kalem Ekle</Dugme>}
      >
        <div className="mb-3 flex flex-wrap gap-2">
          {ONERILER.map((o) => (
            <Dugme key={o.ad} varyant="hayalet" onClick={() => ekle(o)}>
              + {o.ad}
            </Dugme>
          ))}
        </div>
        {proje.iscilikler.length === 0 ? (
          <p className="py-4 text-center text-sm text-slate-400">
            Kalem yok. Yukarıdan hazır öneri veya boş kalem ekleyin.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs text-slate-500 dark:border-zinc-700 dark:text-slate-400">
                  <th className="px-1 py-2 font-medium">Kalem</th>
                  <th className="px-1 py-2 font-medium">Kategori</th>
                  <th className="px-1 py-2 font-medium">Birim</th>
                  <th className="px-1 py-2 text-right font-medium">Miktar</th>
                  <th className="px-1 py-2 text-right font-medium">Birim Fiyat</th>
                  <th className="px-1 py-2 text-right font-medium">Tutar</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {proje.iscilikler.map((i) => (
                  <tr key={i.id} className="border-b border-slate-100 dark:border-zinc-800">
                    <td className="px-1 py-1.5">
                      <Metin
                        value={i.ad}
                        onChange={(v) => kalemDegistir(i.id, { ad: v })}
                        placeholder="Kalem adı"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Secim
                        value={i.kategori}
                        onChange={(v) => kalemDegistir(i.id, { kategori: v })}
                        secenekler={KATEGORILER}
                        className="w-28"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Secim
                        value={i.birim}
                        onChange={(v) => kalemDegistir(i.id, { birim: v })}
                        secenekler={BIRIMLER}
                        className="w-24"
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Sayi
                        value={i.miktar}
                        onChange={(v) => kalemDegistir(i.id, { miktar: v })}
                        className="w-24"
                        min={0}
                      />
                    </td>
                    <td className="px-1 py-1.5">
                      <Sayi
                        value={i.birimFiyat}
                        onChange={(v) => kalemDegistir(i.id, { birimFiyat: v })}
                        className="w-28"
                        min={0}
                      />
                    </td>
                    <td className="px-1 py-1.5 text-right font-semibold tabular-nums">
                      {fmtTL((i.miktar || 0) * (i.birimFiyat || 0))}
                    </td>
                    <td className="px-1 py-1.5 text-center">
                      <Dugme
                        varyant="tehlike"
                        onClick={() => sil(i.id)}
                        className="!px-2"
                      >
                        ✕
                      </Dugme>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-300 font-semibold dark:border-zinc-600">
                  <td colSpan={5} className="px-1 py-2 text-right">
                    Ek İşçilik/Ekipman Toplamı
                  </td>
                  <td className="px-1 py-2 text-right tabular-nums">
                    {fmtTL(hesap.ekIscilikToplam)}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </Kart>

      {/* Üretim durumu takibi */}
      <Kart baslik="Üretim Durumu (parça durumları malzeme listesinden gelir)">
        <div className="mb-4">
          <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Tamamlanma (ağırlıkça)</span>
            <span className="font-semibold">%{fmt(ilerleme, 1)}</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${Math.min(100, ilerleme)}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {durumOzet.map((d) => (
            <div
              key={d.durum}
              className="rounded-xl border border-slate-200 p-3 text-center dark:border-zinc-700"
            >
              <Rozet renk={DURUM_RENK[d.durum]}>{d.durum}</Rozet>
              <div className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100">
                {d.adet}
              </div>
              <div className="text-[11px] text-slate-400">{fmt(d.kg)} kg</div>
            </div>
          ))}
        </div>
      </Kart>
    </div>
  );
}
