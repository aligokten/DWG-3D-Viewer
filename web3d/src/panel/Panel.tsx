// Çelik İmalat Yönetim Paneli — proje seçimi, sekmeler ve genel çerçeve.
import { useRef, useState } from "react";
import { usePanelStore } from "./store";
import { projeHesapla, fmt, fmtTL } from "./calc";
import { Metin, Dugme } from "./ui";
import { MalzemeTab } from "./tabs/MalzemeTab";
import { IscilikTab } from "./tabs/IscilikTab";
import { MaliyetTab } from "./tabs/MaliyetTab";
import { SatinAlmaTab } from "./tabs/SatinAlmaTab";
import { DokumanTab } from "./tabs/DokumanTab";

type Sekme = "malzeme" | "iscilik" | "maliyet" | "satinalma" | "dokuman";

const SEKMELER: { id: Sekme; ad: string; ikon: string }[] = [
  { id: "malzeme", ad: "Malzeme Listesi", ikon: "📋" },
  { id: "iscilik", ad: "İşçilik & Üretim", ikon: "🔧" },
  { id: "maliyet", ad: "Maliyet Özeti", ikon: "💰" },
  { id: "satinalma", ad: "Sipariş & Satın Alma", ikon: "🛒" },
  { id: "dokuman", ad: "Şantiye Dökümanları", ikon: "📄" },
];

export default function Panel() {
  const store = usePanelStore();
  const [sekme, setSekme] = useState<Sekme>("malzeme");
  const dosyaRef = useRef<HTMLInputElement>(null);
  const proje = store.aktif;
  const hesap = projeHesapla(proje);

  const iceAktarSec = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    f.text().then((t) => {
      if (!store.iceAktar(t)) alert("Yedek dosyası okunamadı.");
    });
    e.target.value = "";
  };

  return (
    <div className="space-y-5">
      {/* Proje seçimi ve genel bilgiler */}
      <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
        <div className="flex flex-wrap items-end gap-3">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
              Aktif Proje
            </span>
            <select
              value={store.aktifId}
              onChange={(e) => store.setAktifId(e.target.value)}
              className="min-w-[200px] rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm font-semibold dark:border-zinc-600 dark:bg-zinc-900 dark:text-slate-100"
            >
              {store.projeler.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.ad}
                </option>
              ))}
            </select>
          </label>
          <Dugme varyant="ikincil" onClick={() => store.projeEkle()}>
            + Yeni Proje
          </Dugme>
          <Dugme
            varyant="tehlike"
            onClick={() => {
              if (confirm(`"${proje.ad}" projesini silmek istiyor musunuz?`))
                store.projeSil(proje.id);
            }}
          >
            Projeyi Sil
          </Dugme>
          <div className="ml-auto flex gap-2">
            <Dugme varyant="hayalet" onClick={store.disaAktar} title="JSON yedek indir">
              ⬇️ Yedekle
            </Dugme>
            <Dugme
              varyant="hayalet"
              onClick={() => dosyaRef.current?.click()}
              title="JSON yedekten geri yükle"
            >
              ⬆️ Geri Yükle
            </Dugme>
            <input
              ref={dosyaRef}
              type="file"
              accept="application/json"
              onChange={iceAktarSec}
              className="hidden"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
              Proje Adı
            </span>
            <Metin value={proje.ad} onChange={(v) => store.guncelle({ ad: v })} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
              Müşteri
            </span>
            <Metin
              value={proje.musteri}
              onChange={(v) => store.guncelle({ musteri: v })}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
              Şantiye / Konum
            </span>
            <Metin
              value={proje.konum}
              onChange={(v) => store.guncelle({ konum: v })}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
              Tarih
            </span>
            <input
              type="date"
              value={proje.tarih}
              onChange={(e) => store.guncelle({ tarih: e.target.value })}
              className="w-full rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-slate-100"
            />
          </label>
        </div>

        {/* Özet şerit */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <OzetKutu etiket="Net Çelik" deger={`${fmt(hesap.toplamNetKg)} kg`} />
          <OzetKutu
            etiket="Fire Dahil"
            deger={`${fmt(hesap.toplamBrutKg)} kg`}
            renk="amber"
          />
          <OzetKutu
            etiket="Teklif (KDV hariç)"
            deger={fmtTL(hesap.kdvHaric)}
            renk="teal"
          />
          <OzetKutu
            etiket="Birim Fiyat"
            deger={`${fmt(hesap.birimFiyatKg)} ₺/kg`}
            renk="green"
          />
        </div>
      </div>

      {/* Sekme çubuğu */}
      <div className="flex flex-wrap gap-1 rounded-2xl bg-white p-1.5 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
        {SEKMELER.map((s) => (
          <button
            key={s.id}
            onClick={() => setSekme(s.id)}
            className={`flex-1 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition ${
              sekme === s.id
                ? "bg-[#294b5a] text-white shadow"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-700/50"
            }`}
          >
            <span className="mr-1">{s.ikon}</span>
            <span className="hidden sm:inline">{s.ad}</span>
          </button>
        ))}
      </div>

      {/* Aktif sekme içeriği */}
      {sekme === "malzeme" && (
        <MalzemeTab proje={proje} degistir={store.degistir} />
      )}
      {sekme === "iscilik" && (
        <IscilikTab proje={proje} degistir={store.degistir} />
      )}
      {sekme === "maliyet" && (
        <MaliyetTab proje={proje} degistir={store.degistir} />
      )}
      {sekme === "satinalma" && (
        <SatinAlmaTab proje={proje} degistir={store.degistir} />
      )}
      {sekme === "dokuman" && <DokumanTab proje={proje} />}
    </div>
  );
}

function OzetKutu({
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
    teal: "text-[#294b5a] dark:text-cyan-300",
    green: "text-emerald-600 dark:text-emerald-300",
  };
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-zinc-900/50">
      <div className="text-[11px] text-slate-400">{etiket}</div>
      <div className={`text-base font-bold tabular-nums ${renkler[renk]}`}>
        {deger}
      </div>
    </div>
  );
}
