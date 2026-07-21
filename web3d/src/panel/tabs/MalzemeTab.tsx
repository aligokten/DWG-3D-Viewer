// Malzeme Listesi (BOM) sekmesi — TSE katalogdan parça ekleme, fire ve maliyet.
import { useMemo, useState } from "react";
import {
  KATALOG,
  KATEGORILER,
  katalogBul,
  CELIK_KALITELERI,
  type Birim,
} from "../catalog";
import { IMALAT_DURUMLARI, yeniId, type BomKalemi, type Proje } from "../types";
import { kalemHesapla, projeHesapla, fmt, fmtTL } from "../calc";
import { Kart, Metin, Sayi, Secim, Dugme, Alan } from "../ui";

const BIRIMLER: { value: Birim; label: string }[] = [
  { value: "m", label: "metre (m)" },
  { value: "m2", label: "alan (m²)" },
  { value: "adet", label: "adet" },
  { value: "kg", label: "kilogram (kg)" },
];

const KALITE_SECENEK = CELIK_KALITELERI.map((k) => ({
  value: k.kod,
  label: k.kod,
}));

function bosKalem(): BomKalemi {
  return {
    id: yeniId(),
    pozNo: "",
    aciklama: "",
    katalogId: "",
    ad: "",
    standart: "",
    kalite: "S275JR",
    birim: "m",
    birimAgirlik: 0,
    adet: 1,
    boy: 6,
    alan: 0,
    miktarKg: 0,
    miktarAdet: 1,
    fireYuzde: 5,
    birimFiyat: 0,
    fiyatTipi: "kg",
    durum: "Bekliyor",
  };
}

export function MalzemeTab({
  proje,
  degistir,
}: {
  proje: Proje;
  degistir: (fn: (p: Proje) => Proje) => void;
}) {
  const [kategori, setKategori] = useState(KATEGORILER[0]);
  const [secId, setSecId] = useState("");

  const kategoridekiler = useMemo(
    () => KATALOG.filter((k) => k.kategori === kategori),
    [kategori],
  );

  const kalemDegistir = (id: string, d: Partial<BomKalemi>) =>
    degistir((p) => ({
      ...p,
      kalemler: p.kalemler.map((k) => (k.id === id ? { ...k, ...d } : k)),
    }));

  const kalemSil = (id: string) =>
    degistir((p) => ({ ...p, kalemler: p.kalemler.filter((k) => k.id !== id) }));

  const katalogtanEkle = () => {
    const kat = katalogBul(secId || kategoridekiler[0]?.id);
    if (!kat) return;
    const yeni = bosKalem();
    yeni.katalogId = kat.id;
    yeni.ad = kat.ad;
    yeni.standart = kat.standart;
    yeni.kalite = kat.kalite || "S275JR";
    yeni.birim = kat.birim;
    yeni.birimAgirlik = kat.birimAgirlik;
    yeni.fireYuzde = proje.varsayilanFire;
    yeni.fiyatTipi = kat.birim === "adet" ? "birim" : "kg";
    if (kat.birim === "adet") yeni.miktarAdet = 10;
    degistir((p) => ({ ...p, kalemler: [...p.kalemler, yeni] }));
  };

  const elleEkle = () => {
    const yeni = bosKalem();
    yeni.fireYuzde = proje.varsayilanFire;
    degistir((p) => ({ ...p, kalemler: [...p.kalemler, yeni] }));
  };

  const hesap = projeHesapla(proje);
  const secili = katalogBul(secId) || kategoridekiler[0];

  return (
    <div className="space-y-4">
      {/* Katalogtan ekleme */}
      <Kart baslik="TSE Katalogdan Malzeme Ekle">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_auto]">
          <Alan label="Kategori">
            <Secim
              value={kategori}
              onChange={(v) => {
                setKategori(v);
                setSecId("");
              }}
              secenekler={KATEGORILER}
            />
          </Alan>
          <Alan label="Malzeme">
            <Secim
              value={secId || kategoridekiler[0]?.id || ""}
              onChange={setSecId}
              secenekler={kategoridekiler.map((k) => ({
                value: k.id,
                label: k.aciklama
                  ? `${k.ad} — ${k.birimAgirlik || "?"} ${k.birim === "m2" ? "kg/m²" : k.birim === "m" ? "kg/m" : ""}`
                  : `${k.ad}${k.birim === "m" ? ` — ${k.birimAgirlik} kg/m` : ""}`,
              }))}
            />
          </Alan>
          <div className="flex items-end">
            <Dugme onClick={katalogtanEkle} className="w-full">
              + Listeye Ekle
            </Dugme>
          </div>
        </div>
        {secili && (
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            <strong>{secili.ad}</strong> · Standart: {secili.standart}
            {secili.kalite ? ` · Kalite: ${secili.kalite}` : ""} · Birim:{" "}
            {secili.birim}
            {secili.birimAgirlik
              ? ` · ${secili.birimAgirlik} kg/${secili.birim === "m2" ? "m²" : secili.birim === "adet" ? "adet" : "m"}`
              : ""}
            {secili.aciklama ? ` · ${secili.aciklama}` : ""}
          </p>
        )}
        <div className="mt-2">
          <Dugme varyant="hayalet" onClick={elleEkle}>
            + Elle boş satır ekle
          </Dugme>
        </div>
      </Kart>

      {/* Malzeme listesi tablosu */}
      <Kart
        baslik={`Malzeme Listesi (${proje.kalemler.length} kalem)`}
        aksiyon={
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Net: <strong>{fmt(hesap.toplamNetKg)} kg</strong> · Brüt (fire dahil):{" "}
            <strong>{fmt(hesap.toplamBrutKg)} kg</strong>
          </span>
        }
      >
        {proje.kalemler.length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-400">
            Henüz malzeme eklenmedi. Yukarıdan katalogdan seçip ekleyin.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-zinc-700 dark:text-slate-400">
                  <th className="px-1 py-2 font-medium">Poz</th>
                  <th className="px-1 py-2 font-medium">Malzeme / Açıklama</th>
                  <th className="px-1 py-2 font-medium">Kalite</th>
                  <th className="px-1 py-2 font-medium">Birim</th>
                  <th className="px-1 py-2 font-medium">Miktar</th>
                  <th className="px-1 py-2 text-right font-medium">kg/br</th>
                  <th className="px-1 py-2 text-right font-medium">Fire %</th>
                  <th className="px-1 py-2 font-medium">Fiyat</th>
                  <th className="px-1 py-2 text-right font-medium">Net kg</th>
                  <th className="px-1 py-2 text-right font-medium">Brüt kg</th>
                  <th className="px-1 py-2 text-right font-medium">Maliyet</th>
                  <th className="px-1 py-2 font-medium">Durum</th>
                  <th className="px-1 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {proje.kalemler.map((k) => {
                  const h = kalemHesapla(k);
                  return (
                    <tr
                      key={k.id}
                      className="border-b border-slate-100 align-top dark:border-zinc-800"
                    >
                      <td className="px-1 py-1.5">
                        <Metin
                          value={k.pozNo}
                          onChange={(v) => kalemDegistir(k.id, { pozNo: v })}
                          placeholder="K-01"
                          className="w-16"
                        />
                      </td>
                      <td className="px-1 py-1.5">
                        <Metin
                          value={k.ad}
                          onChange={(v) => kalemDegistir(k.id, { ad: v })}
                          placeholder="Malzeme"
                          className="w-32"
                        />
                        <Metin
                          value={k.aciklama}
                          onChange={(v) => kalemDegistir(k.id, { aciklama: v })}
                          placeholder="açıklama (ör. ana kolon)"
                          className="mt-1 w-32 !text-[11px]"
                        />
                        {k.standart && (
                          <span className="mt-0.5 block text-[10px] text-slate-400">
                            {k.standart}
                          </span>
                        )}
                      </td>
                      <td className="px-1 py-1.5">
                        <Secim
                          value={k.kalite}
                          onChange={(v) => kalemDegistir(k.id, { kalite: v })}
                          secenekler={KALITE_SECENEK}
                          className="w-24"
                        />
                      </td>
                      <td className="px-1 py-1.5">
                        <Secim
                          value={k.birim}
                          onChange={(v) =>
                            kalemDegistir(k.id, { birim: v as Birim })
                          }
                          secenekler={BIRIMLER}
                          className="w-24"
                        />
                      </td>
                      <td className="px-1 py-1.5">
                        {k.birim === "m" && (
                          <div className="flex items-center gap-1">
                            <Sayi
                              value={k.adet}
                              onChange={(v) => kalemDegistir(k.id, { adet: v })}
                              className="w-14"
                              min={0}
                            />
                            <span className="text-slate-400">×</span>
                            <Sayi
                              value={k.boy}
                              onChange={(v) => kalemDegistir(k.id, { boy: v })}
                              className="w-16"
                              min={0}
                            />
                            <span className="text-[10px] text-slate-400">m</span>
                          </div>
                        )}
                        {k.birim === "m2" && (
                          <Sayi
                            value={k.alan}
                            onChange={(v) => kalemDegistir(k.id, { alan: v })}
                            className="w-20"
                            min={0}
                          />
                        )}
                        {k.birim === "adet" && (
                          <Sayi
                            value={k.miktarAdet}
                            onChange={(v) =>
                              kalemDegistir(k.id, { miktarAdet: v })
                            }
                            className="w-20"
                            min={0}
                          />
                        )}
                        {k.birim === "kg" && (
                          <Sayi
                            value={k.miktarKg}
                            onChange={(v) => kalemDegistir(k.id, { miktarKg: v })}
                            className="w-20"
                            min={0}
                          />
                        )}
                      </td>
                      <td className="px-1 py-1.5">
                        <Sayi
                          value={k.birimAgirlik}
                          onChange={(v) =>
                            kalemDegistir(k.id, { birimAgirlik: v })
                          }
                          className="w-16"
                          min={0}
                        />
                      </td>
                      <td className="px-1 py-1.5">
                        <Sayi
                          value={k.fireYuzde}
                          onChange={(v) => kalemDegistir(k.id, { fireYuzde: v })}
                          className="w-14"
                          min={0}
                        />
                      </td>
                      <td className="px-1 py-1.5">
                        <div className="flex items-center gap-1">
                          <Sayi
                            value={k.birimFiyat}
                            onChange={(v) =>
                              kalemDegistir(k.id, { birimFiyat: v })
                            }
                            className="w-20"
                            min={0}
                          />
                          <Secim
                            value={k.fiyatTipi}
                            onChange={(v) =>
                              kalemDegistir(k.id, {
                                fiyatTipi: v as "kg" | "birim",
                              })
                            }
                            secenekler={[
                              { value: "kg", label: "₺/kg" },
                              { value: "birim", label: `₺/${k.birim}` },
                            ]}
                            className="w-20"
                          />
                        </div>
                      </td>
                      <td className="px-1 py-1.5 text-right tabular-nums">
                        {fmt(h.netKg)}
                      </td>
                      <td className="px-1 py-1.5 text-right tabular-nums text-amber-700 dark:text-amber-300">
                        {fmt(h.brutKg)}
                      </td>
                      <td className="px-1 py-1.5 text-right font-semibold tabular-nums">
                        {fmtTL(h.malzemeMaliyet)}
                      </td>
                      <td className="px-1 py-1.5">
                        <Secim
                          value={k.durum}
                          onChange={(v) =>
                            kalemDegistir(k.id, { durum: v as BomKalemi["durum"] })
                          }
                          secenekler={IMALAT_DURUMLARI}
                          className="w-28"
                        />
                      </td>
                      <td className="px-1 py-1.5 text-center">
                        <Dugme
                          varyant="tehlike"
                          onClick={() => kalemSil(k.id)}
                          title="Sil"
                          className="!px-2"
                        >
                          ✕
                        </Dugme>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-300 font-semibold dark:border-zinc-600">
                  <td colSpan={8} className="px-1 py-2 text-right">
                    Toplam
                  </td>
                  <td className="px-1 py-2 text-right tabular-nums">
                    {fmt(hesap.toplamNetKg)}
                  </td>
                  <td className="px-1 py-2 text-right tabular-nums text-amber-700 dark:text-amber-300">
                    {fmt(hesap.toplamBrutKg)}
                  </td>
                  <td className="px-1 py-2 text-right tabular-nums">
                    {fmtTL(hesap.malzemeToplam)}
                  </td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
        <p className="mt-3 text-[11px] text-slate-400">
          Fire: kesim/optimizasyon kaybını temsil eder ve brüt (satın alınacak)
          ağırlığa eklenir. Katalog birim ağırlıkları TS EN 10365 / TS 708 ve
          7.85 g/cm³ yoğunluğa göredir; değerleri gerektiğinde düzenleyebilirsiniz.
        </p>
      </Kart>
    </div>
  );
}
