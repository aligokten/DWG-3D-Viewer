// Maliyet Özeti sekmesi — oran ayarları, tam maliyet kırılımı ve kategori dağılımı.
import { kalemHesapla, projeHesapla, fmt, fmtTL } from "../calc";
import { katalogBul } from "../catalog";
import type { Proje } from "../types";
import { Kart, Sayi, Alan } from "../ui";

export function MaliyetTab({
  proje,
  degistir,
}: {
  proje: Proje;
  degistir: (fn: (p: Proje) => Proje) => void;
}) {
  const h = projeHesapla(proje);

  // Kategori bazında malzeme dağılımı
  const kategoriMap = new Map<string, { kg: number; tutar: number }>();
  for (const k of proje.kalemler) {
    const kh = kalemHesapla(k);
    const kat = katalogBul(k.katalogId)?.kategori || "Diğer / Elle";
    const mevcut = kategoriMap.get(kat) || { kg: 0, tutar: 0 };
    mevcut.kg += kh.brutKg;
    mevcut.tutar += kh.malzemeMaliyet;
    kategoriMap.set(kat, mevcut);
  }
  const kategoriler = [...kategoriMap.entries()].sort(
    (a, b) => b[1].tutar - a[1].tutar,
  );

  const satir = (
    etiket: string,
    tutar: string,
    vurgu = false,
    ekstra?: string,
  ) => (
    <div
      className={`flex items-center justify-between border-b border-slate-100 py-2 last:border-0 dark:border-zinc-700 ${
        vurgu ? "text-base font-bold text-slate-900 dark:text-white" : ""
      }`}
    >
      <span className={vurgu ? "" : "text-slate-600 dark:text-slate-300"}>
        {etiket}
        {ekstra && (
          <span className="ml-2 text-xs text-slate-400">{ekstra}</span>
        )}
      </span>
      <span className="tabular-nums">{tutar}</span>
    </div>
  );

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Oran ayarları */}
      <Kart baslik="Oran Ayarları" className="lg:col-span-2">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <Alan label="Varsayılan fire (%)">
            <Sayi
              value={proje.varsayilanFire}
              onChange={(v) => degistir((p) => ({ ...p, varsayilanFire: v }))}
              min={0}
            />
          </Alan>
          <Alan label="Atölye işçilik (₺/kg)">
            <Sayi
              value={proje.atolyeIscilikKg}
              onChange={(v) => degistir((p) => ({ ...p, atolyeIscilikKg: v }))}
              min={0}
            />
          </Alan>
          <Alan label="Genel gider (%)">
            <Sayi
              value={proje.genelGiderYuzde}
              onChange={(v) => degistir((p) => ({ ...p, genelGiderYuzde: v }))}
              min={0}
            />
          </Alan>
          <Alan label="Kâr (%)">
            <Sayi
              value={proje.karYuzde}
              onChange={(v) => degistir((p) => ({ ...p, karYuzde: v }))}
              min={0}
            />
          </Alan>
          <Alan label="KDV (%)">
            <Sayi
              value={proje.kdvYuzde}
              onChange={(v) => degistir((p) => ({ ...p, kdvYuzde: v }))}
              min={0}
            />
          </Alan>
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          Varsayılan fire yalnızca yeni eklenen kalemlere uygulanır; her satırın
          fire oranını malzeme listesinde ayrı ayrı değiştirebilirsiniz.
        </p>
      </Kart>

      {/* Maliyet kırılımı */}
      <Kart baslik="Maliyet Kırılımı">
        {satir("Malzeme (fire dahil)", fmtTL(h.malzemeToplam))}
        {satir(
          "Atölye imalat işçiliği",
          fmtTL(h.atolyeIscilik),
          false,
          `${fmt(h.toplamNetKg)} kg × ${fmt(proje.atolyeIscilikKg)} ₺`,
        )}
        {satir("Ek işçilik / ekipman / nakliye", fmtTL(h.ekIscilikToplam))}
        {satir("Ara Toplam", fmtTL(h.araToplam), false)}
        {satir(`Genel gider (%${fmt(proje.genelGiderYuzde)})`, fmtTL(h.genelGider))}
        {satir(`Kâr (%${fmt(proje.karYuzde)})`, fmtTL(h.kar))}
        {satir("Teklif Tutarı (KDV hariç)", fmtTL(h.kdvHaric), true)}
        {satir(`KDV (%${fmt(proje.kdvYuzde)})`, fmtTL(h.kdv))}
        {satir("GENEL TOPLAM (KDV dahil)", fmtTL(h.genelToplam), true)}
      </Kart>

      {/* Özet göstergeler + kategori dağılımı */}
      <div className="space-y-4">
        <Kart baslik="Özet Göstergeler">
          <div className="grid grid-cols-2 gap-3">
            <Gosterge etiket="Net çelik" deger={`${fmt(h.toplamNetKg)} kg`} />
            <Gosterge
              etiket="Brüt (satın alma)"
              deger={`${fmt(h.toplamBrutKg)} kg`}
              renk="amber"
            />
            <Gosterge
              etiket="Fire kaybı"
              deger={`${fmt(h.fireKg)} kg`}
              renk="red"
            />
            <Gosterge
              etiket="Birim fiyat"
              deger={`${fmt(h.birimFiyatKg)} ₺/kg`}
              renk="green"
            />
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            Birim fiyat = KDV hariç teklif ÷ net çelik ağırlığı. Çelik yapı
            tekliflerinde yaygın kullanılan ₺/kg (veya ₺/ton) göstergesidir.
          </p>
        </Kart>

        <Kart baslik="Malzeme — Kategori Dağılımı">
          {kategoriler.length === 0 ? (
            <p className="py-2 text-sm text-slate-400">Malzeme yok.</p>
          ) : (
            <div className="space-y-2">
              {kategoriler.map(([kat, v]) => {
                const oran =
                  h.malzemeToplam > 0 ? (v.tutar / h.malzemeToplam) * 100 : 0;
                return (
                  <div key={kat}>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-300">
                        {kat}
                      </span>
                      <span className="tabular-nums text-slate-500">
                        {fmt(v.kg)} kg · {fmtTL(v.tutar)}
                      </span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
                      <div
                        className="h-full rounded-full bg-[#294b5a]"
                        style={{ width: `${oran}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Kart>
      </div>
    </div>
  );
}

function Gosterge({
  etiket,
  deger,
  renk = "slate",
}: {
  etiket: string;
  deger: string;
  renk?: string;
}) {
  const renkler: Record<string, string> = {
    slate: "text-slate-800 dark:text-slate-100",
    amber: "text-amber-600 dark:text-amber-300",
    red: "text-red-600 dark:text-red-400",
    green: "text-emerald-600 dark:text-emerald-300",
  };
  return (
    <div className="rounded-xl border border-slate-200 p-3 dark:border-zinc-700">
      <div className="text-[11px] text-slate-400">{etiket}</div>
      <div className={`mt-1 text-lg font-bold tabular-nums ${renkler[renk]}`}>
        {deger}
      </div>
    </div>
  );
}
