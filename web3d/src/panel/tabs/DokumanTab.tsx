// Şantiye & Uygulama Dökümanları sekmesi — yazdırılabilir/PDF belgeler üretir.
import { useState } from "react";
import { kalemHesapla, projeHesapla, fmt, fmtTL } from "../calc";
import type { Proje } from "../types";
import { Kart, Dugme } from "../ui";

type DokTip =
  | "cekme"
  | "isemri"
  | "teklif"
  | "teslim";

const DOKUMANLAR: { tip: DokTip; ad: string; aciklama: string }[] = [
  {
    tip: "cekme",
    ad: "Malzeme Çekme Listesi",
    aciklama: "Depodan/tedarikçiden çekilecek kesim listesi (poz, boy, ağırlık).",
  },
  {
    tip: "isemri",
    ad: "İmalat İş Emri / Föyü",
    aciklama: "Atölye için parça listesi, kalite, kaynak ve üretim durumu.",
  },
  {
    tip: "teklif",
    ad: "Maliyet / Teklif Özeti",
    aciklama: "Malzeme, işçilik, genel gider, kâr ve KDV kırılımlı teklif.",
  },
  {
    tip: "teslim",
    ad: "Şantiye Teslim Tutanağı",
    aciklama: "Sevk edilen parçaların şantiyede teslim/kontrol tutanağı.",
  },
];

function esc(s: string): string {
  return String(s ?? "").replace(/[&<>]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : "&gt;",
  );
}

function belgeGovde(proje: Proje, tip: DokTip): string {
  const h = projeHesapla(proje);
  const bugun = new Date().toLocaleDateString("tr-TR");

  const ustBilgi = `
    <div class="ust">
      <div>
        <div class="firma">ÇELİK YAPI İMALAT</div>
        <div class="belge">${DOKUMANLAR.find((d) => d.tip === tip)!.ad}</div>
      </div>
      <table class="meta">
        <tr><td>Proje</td><td>${esc(proje.ad)}</td></tr>
        <tr><td>Müşteri</td><td>${esc(proje.musteri) || "—"}</td></tr>
        <tr><td>Şantiye</td><td>${esc(proje.konum) || "—"}</td></tr>
        <tr><td>Tarih</td><td>${esc(proje.tarih)} / Baskı: ${bugun}</td></tr>
      </table>
    </div>`;

  if (tip === "cekme") {
    const satirlar = proje.kalemler
      .map((k, i) => {
        const kh = kalemHesapla(k);
        const miktar =
          k.birim === "m"
            ? `${fmt(k.adet, 0)} ad × ${fmt(k.boy)} m`
            : k.birim === "m2"
            ? `${fmt(k.alan)} m²`
            : k.birim === "adet"
            ? `${fmt(k.miktarAdet, 0)} ad`
            : `${fmt(k.miktarKg)} kg`;
        return `<tr>
          <td>${i + 1}</td>
          <td>${esc(k.pozNo)}</td>
          <td>${esc(k.ad)}<br><span class="alt">${esc(k.aciklama)}</span></td>
          <td>${esc(k.kalite)}</td>
          <td class="r">${miktar}</td>
          <td class="r">%${fmt(k.fireYuzde, 0)}</td>
          <td class="r">${fmt(kh.brutKg)}</td>
          <td class="cek"></td>
        </tr>`;
      })
      .join("");
    return `${ustBilgi}
      <table class="liste">
        <thead><tr>
          <th>#</th><th>Poz</th><th>Malzeme</th><th>Kalite</th>
          <th class="r">Miktar</th><th class="r">Fire</th><th class="r">Brüt kg</th><th>✓ Çekildi</th>
        </tr></thead>
        <tbody>${satirlar}</tbody>
        <tfoot><tr><td colspan="6" class="r">Toplam brüt (fire dahil)</td><td class="r">${fmt(h.toplamBrutKg)} kg</td><td></td></tr></tfoot>
      </table>
      <div class="imza"><div>Hazırlayan</div><div>Depo/Teslim Alan</div></div>`;
  }

  if (tip === "isemri") {
    const satirlar = proje.kalemler
      .map((k, i) => {
        const kh = kalemHesapla(k);
        return `<tr>
          <td>${i + 1}</td>
          <td>${esc(k.pozNo)}</td>
          <td>${esc(k.ad)} — ${esc(k.aciklama)}</td>
          <td>${esc(k.standart)}</td>
          <td>${esc(k.kalite)}</td>
          <td class="r">${k.birim === "m" ? `${fmt(k.adet, 0)}×${fmt(k.boy)}m` : k.birim === "adet" ? `${fmt(k.miktarAdet, 0)} ad` : k.birim === "m2" ? `${fmt(k.alan)} m²` : `${fmt(k.miktarKg)} kg`}</td>
          <td class="r">${fmt(kh.netKg)}</td>
          <td>${esc(k.durum)}</td>
        </tr>`;
      })
      .join("");
    return `${ustBilgi}
      <table class="liste">
        <thead><tr>
          <th>#</th><th>Poz</th><th>Parça</th><th>Standart</th><th>Kalite</th>
          <th class="r">Miktar</th><th class="r">Net kg</th><th>Durum</th>
        </tr></thead>
        <tbody>${satirlar}</tbody>
        <tfoot><tr><td colspan="6" class="r">Toplam net</td><td class="r">${fmt(h.toplamNetKg)} kg</td><td></td></tr></tfoot>
      </table>
      <div class="not"><strong>Kaynak / imalat notu:</strong> ${esc(proje.notlar) || "—"}</div>
      <div class="imza"><div>İmalat Sorumlusu</div><div>Kalite Kontrol</div></div>`;
  }

  if (tip === "teklif") {
    const rows = [
      ["Malzeme (fire dahil)", fmtTL(h.malzemeToplam)],
      [`Atölye imalat işçiliği (${fmt(h.toplamNetKg)} kg × ${fmt(proje.atolyeIscilikKg)} ₺)`, fmtTL(h.atolyeIscilik)],
      ["Ek işçilik / ekipman / nakliye", fmtTL(h.ekIscilikToplam)],
      ["Ara toplam", fmtTL(h.araToplam)],
      [`Genel gider (%${fmt(proje.genelGiderYuzde)})`, fmtTL(h.genelGider)],
      [`Kâr (%${fmt(proje.karYuzde)})`, fmtTL(h.kar)],
    ]
      .map(([a, b]) => `<tr><td>${a}</td><td class="r">${b}</td></tr>`)
      .join("");
    return `${ustBilgi}
      <table class="liste ozet">
        <tbody>
          ${rows}
          <tr class="vurgu"><td>Teklif tutarı (KDV hariç)</td><td class="r">${fmtTL(h.kdvHaric)}</td></tr>
          <tr><td>KDV (%${fmt(proje.kdvYuzde)})</td><td class="r">${fmtTL(h.kdv)}</td></tr>
          <tr class="vurgu buyuk"><td>GENEL TOPLAM (KDV dahil)</td><td class="r">${fmtTL(h.genelToplam)}</td></tr>
        </tbody>
      </table>
      <table class="liste"><tbody>
        <tr><td>Net çelik ağırlığı</td><td class="r">${fmt(h.toplamNetKg)} kg</td></tr>
        <tr><td>Brüt (fire dahil) ağırlık</td><td class="r">${fmt(h.toplamBrutKg)} kg</td></tr>
        <tr><td>Birim fiyat (KDV hariç)</td><td class="r">${fmt(h.birimFiyatKg)} ₺/kg</td></tr>
      </tbody></table>
      <div class="not">Fiyatlar piyasa koşullarına göre ___ gün geçerlidir. Malzeme fiyat farkı hakkı saklıdır.</div>
      <div class="imza"><div>Teklifi Veren</div><div>Onay</div></div>`;
  }

  // teslim
  const satirlar = proje.kalemler
    .map((k, i) => {
      const kh = kalemHesapla(k);
      return `<tr>
        <td>${i + 1}</td>
        <td>${esc(k.pozNo)}</td>
        <td>${esc(k.ad)} — ${esc(k.aciklama)}</td>
        <td class="r">${k.birim === "m" ? `${fmt(k.adet, 0)} ad` : k.birim === "adet" ? `${fmt(k.miktarAdet, 0)} ad` : "—"}</td>
        <td class="r">${fmt(kh.netKg)}</td>
        <td class="cek"></td><td class="cek"></td>
      </tr>`;
    })
    .join("");
  return `${ustBilgi}
    <table class="liste">
      <thead><tr>
        <th>#</th><th>Poz</th><th>Parça</th><th class="r">Adet</th><th class="r">Net kg</th>
        <th>Teslim ✓</th><th>Hasar/Not</th>
      </tr></thead>
      <tbody>${satirlar}</tbody>
    </table>
    <div class="not">Yukarıdaki parçalar şantiyede sayılarak teslim alınmıştır.</div>
    <div class="imza"><div>Teslim Eden (Nakliye)</div><div>Teslim Alan (Şantiye)</div></div>`;
}

function belgeHtml(proje: Proje, tip: DokTip): string {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
    <title>${esc(proje.ad)} — ${DOKUMANLAR.find((d) => d.tip === tip)!.ad}</title>
    <style>
      * { box-sizing: border-box; }
      body { font-family: Arial, "Segoe UI", sans-serif; color: #1e293b; margin: 24px; font-size: 12px; }
      .ust { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #294b5a; padding-bottom: 10px; margin-bottom: 16px; }
      .firma { font-size: 20px; font-weight: 800; color: #294b5a; }
      .belge { font-size: 14px; color: #475569; margin-top: 2px; }
      table.meta td { padding: 1px 6px; font-size: 11px; }
      table.meta td:first-child { color: #64748b; }
      table.liste { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
      table.liste th, table.liste td { border: 1px solid #cbd5e1; padding: 5px 7px; text-align: left; vertical-align: top; }
      table.liste th { background: #294b5a; color: #fff; font-size: 11px; }
      table.liste tfoot td { font-weight: bold; background: #f1f5f9; }
      .r { text-align: right; }
      .alt { color: #64748b; font-size: 10px; }
      .cek { width: 70px; }
      .ozet td { font-size: 13px; }
      .ozet .vurgu td { font-weight: bold; background: #f1f5f9; }
      .ozet .buyuk td { font-size: 15px; background: #294b5a; color: #fff; }
      .not { border: 1px dashed #94a3b8; padding: 8px 10px; margin: 12px 0; font-size: 11px; color: #475569; }
      .imza { display: flex; justify-content: space-around; margin-top: 40px; }
      .imza div { border-top: 1px solid #334155; padding-top: 6px; width: 200px; text-align: center; font-size: 11px; }
      @media print { body { margin: 12mm; } }
    </style></head>
    <body>${belgeGovde(proje, tip)}
    <script>window.onload=function(){setTimeout(function(){window.print();},200);};<\/script>
    </body></html>`;
}

export function DokumanTab({ proje }: { proje: Proje }) {
  const [tip, setTip] = useState<DokTip>("cekme");
  const [onizle, setOnizle] = useState("");

  const yazdir = () => {
    const w = window.open("", "_blank");
    if (!w) {
      alert(
        "Açılır pencere engellendi. Tarayıcıda bu site için açılır pencerelere izin verin.",
      );
      return;
    }
    w.document.write(belgeHtml(proje, tip));
    w.document.close();
  };

  const secili = DOKUMANLAR.find((d) => d.tip === tip)!;

  return (
    <div className="space-y-4">
      <Kart baslik="Belge Seç ve Oluştur">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DOKUMANLAR.map((d) => (
            <button
              key={d.tip}
              onClick={() => {
                setTip(d.tip);
                setOnizle("");
              }}
              className={`rounded-xl border p-3 text-left text-sm transition ${
                tip === d.tip
                  ? "border-[#294b5a] bg-[#294b5a]/5 ring-1 ring-[#294b5a] dark:bg-[#294b5a]/20"
                  : "border-slate-200 hover:border-slate-300 dark:border-zinc-700"
              }`}
            >
              <div className="font-semibold text-slate-800 dark:text-slate-100">
                {d.ad}
              </div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {d.aciklama}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Dugme onClick={yazdir}>🖨️ {secili.ad} — Yazdır / PDF</Dugme>
          <Dugme
            varyant="ikincil"
            onClick={() => setOnizle(belgeGovde(proje, tip))}
          >
            👁️ Önizle
          </Dugme>
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          "Yazdır / PDF" belgeyi yeni sekmede açar; tarayıcının yazdırma
          ekranından "PDF olarak kaydet" seçebilirsiniz.
        </p>
      </Kart>

      {onizle && (
        <Kart baslik="Önizleme">
          <div
            className="dokuman-onizleme rounded-lg border border-slate-200 bg-white p-4 text-slate-800 dark:border-zinc-700"
            dangerouslySetInnerHTML={{ __html: onizle }}
          />
        </Kart>
      )}
    </div>
  );
}
