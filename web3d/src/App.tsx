// Mimari3D — Online sürüm.
// DXF mimari çizimini tarayıcıda 3B modele ve A3 yatay PDF portföye çevirir.
// Firebase/oturum gerektirmez; herkese açık kullanılabilir.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { extract, segLength, type DrawingData } from "./model3d/dxf";
import { attachPreview, captureViews, exportObj, type ModelOptions } from "./model3d/build3d";
import { renderPlan } from "./model3d/plan2d";
import { buildPdf } from "./model3d/pdf";

function computeStats(data: DrawingData, height: number): Record<string, string> {
  const wallLen = data.wall.reduce((a, s) => a + segLength(s), 0);
  // Bina ölçüleri: plan dışı yazı/ölçü metinleri sınırı şişirmesin diye
  // yalnızca duvar (yoksa tüm) parçalarının sınırlarından hesapla.
  const segs = data.wall.length ? data.wall : [...data.door, ...data.window, ...data.column];
  let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
  for (const s of segs) {
    minx = Math.min(minx, s.x0, s.x1);
    miny = Math.min(miny, s.y0, s.y1);
    maxx = Math.max(maxx, s.x0, s.x1);
    maxy = Math.max(maxy, s.y0, s.y1);
  }
  const w = isFinite(minx) ? maxx - minx : data.bbox[2] - data.bbox[0];
  const d = isFinite(miny) ? maxy - miny : data.bbox[3] - data.bbox[1];
  return {
    Birim: data.unitName,
    "Genislik (m)": w.toFixed(2),
    "Derinlik (m)": d.toFixed(2),
    "Taban Alani (m2)": (Math.max(0, w) * Math.max(0, d)).toFixed(1),
    "Toplam Duvar (m)": wallLen.toFixed(1),
    "Duvar Yuksekligi (m)": height.toFixed(2),
    "Duvar Sayisi": String(data.wall.length),
    "Kapi Sayisi": String(data.door.length),
    "Pencere Sayisi": String(data.window.length),
    "Kolon Sayisi": String(data.column.length),
    "Toplam Nesne": String(Object.values(data.entityCounts).reduce((a, b) => a + b, 0)),
  };
}

function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export default function App() {
  const [data, setData] = useState<DrawingData | null>(null);
  const [fileName, setFileName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [height, setHeight] = useState(3.0);
  const [thickness, setThickness] = useState(0.2);
  const [planUrl, setPlanUrl] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const opts: ModelOptions = useMemo(
    () => ({ wallHeight: height, wallThickness: thickness }),
    [height, thickness],
  );

  const stats = useMemo(() => (data ? computeStats(data, height) : null), [data, height]);

  // 3B canlı önizlemeyi kur/yenile
  useEffect(() => {
    if (!data || !previewRef.current) return;
    cleanupRef.current?.();
    cleanupRef.current = attachPreview(previewRef.current, data, opts);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, [data, opts]);

  const onFile = useCallback(async (file: File) => {
    setError("");
    const lower = file.name.toLowerCase();
    if (lower.endsWith(".dwg")) {
      setError(
        "DWG dosyaları tarayıcıda doğrudan okunamaz. Lütfen AutoCAD'de 'Farklı Kaydet → DXF' ile kaydedip .dxf yükleyin (ya da masaüstü sürümünü kullanın).",
      );
      return;
    }
    if (!lower.endsWith(".dxf")) {
      setError("Lütfen bir .dxf dosyası seçin.");
      return;
    }
    setBusy(true);
    try {
      const text = await file.text();
      const d = extract(text);
      setData(d);
      setFileName(file.name);
      setProjectName((p) => p || file.name.replace(/\.[^.]+$/, ""));
      const canvas = renderPlan(d);
      setPlanUrl(canvas.toDataURL("image/png"));
    } catch (e) {
      setError("Dosya okunamadı: " + (e as Error).message);
      setData(null);
    } finally {
      setBusy(false);
    }
  }, []);

  const onDownloadPdf = useCallback(async () => {
    if (!data || !stats) return;
    setBusy(true);
    try {
      // Tarayıcının render için nefes almasına izin ver
      await new Promise((r) => setTimeout(r, 30));
      const views = captureViews(data, opts);
      const planImg = renderPlan(data).toDataURL("image/png");
      const pdf = buildPdf({
        projectName: projectName || fileName,
        data,
        stats,
        planImg,
        views,
        sourceName: fileName,
      });
      pdf.save(`${(projectName || fileName).replace(/\.[^.]+$/, "")}_portfoy.pdf`);
    } catch (e) {
      setError("PDF oluşturulamadı: " + (e as Error).message);
    } finally {
      setBusy(false);
    }
  }, [data, stats, opts, projectName, fileName]);

  const onDownloadObj = useCallback(() => {
    if (!data) return;
    const obj = exportObj(data, opts);
    download(new Blob([obj], { type: "text/plain" }), `${(projectName || fileName).replace(/\.[^.]+$/, "")}.obj`);
  }, [data, opts, projectName, fileName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-8 dark:from-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 rounded-2xl bg-[#294b5a] px-6 py-5 text-white shadow-lg">
          <h1 className="text-2xl font-extrabold tracking-tight">Mimari3D — Online</h1>
          <p className="mt-1 text-sm text-cyan-100">
            AutoCAD DXF çiziminizi tarayıcıda 3B modele ve A3 yatay PDF proje portföyüne dönüştürün.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          {/* Sol panel: ayarlar */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Çizim dosyası (.dxf)
              </label>
              <input
                type="file"
                accept=".dxf"
                onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
                className="mt-2 block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-[#294b5a] file:px-3 file:py-2 file:text-white hover:file:bg-[#1f3946] dark:text-slate-300"
              />
              {fileName && (
                <p className="mt-2 truncate text-xs text-slate-500 dark:text-slate-400">
                  Seçili: {fileName}
                </p>
              )}
              <p className="mt-2 text-xs text-slate-400">
                .dwg dosyanız varsa AutoCAD'de DXF olarak kaydedin.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
              <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Model Ayarları
              </h2>
              <div className="space-y-3">
                <Field label="Proje adı">
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
                  />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Duvar yük. (m)">
                    <input
                      type="number"
                      step="0.1"
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
                    />
                  </Field>
                  <Field label="Duvar kal. (m)">
                    <input
                      type="number"
                      step="0.05"
                      value={thickness}
                      onChange={(e) => setThickness(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-sm dark:border-zinc-600 dark:bg-zinc-900"
                    />
                  </Field>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <button
                  disabled={!data || busy}
                  onClick={onDownloadPdf}
                  className="rounded-lg bg-[#294b5a] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#1f3946] disabled:opacity-40"
                >
                  {busy ? "İşleniyor…" : "📄  A3 PDF Portföy indir"}
                </button>
                <button
                  disabled={!data || busy}
                  onClick={onDownloadObj}
                  className="rounded-lg border border-[#294b5a] px-4 py-2 text-sm font-semibold text-[#294b5a] hover:bg-slate-50 disabled:opacity-40 dark:text-cyan-200"
                >
                  🧊  3B Model (.obj) indir
                </button>
              </div>
            </div>

            {stats && (
              <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
                <h2 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  İstatistikler
                </h2>
                <dl className="space-y-1 text-xs">
                  {Object.entries(stats).map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-slate-100 py-0.5 dark:border-zinc-700">
                      <dt className="text-slate-500 dark:text-slate-400">{k}</dt>
                      <dd className="font-medium text-slate-800 dark:text-slate-200">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* Sağ panel: önizlemeler */}
          <div className="space-y-6">
            {error && (
              <div className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-200">
                {error}
              </div>
            )}
            {!data && !error && (
              <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 dark:border-zinc-700">
                Başlamak için bir .dxf dosyası yükleyin
              </div>
            )}

            <div className="rounded-2xl bg-white p-3 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
              <h2 className="mb-2 px-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                3B Model (fare ile döndürün)
              </h2>
              <div
                ref={previewRef}
                className="h-[420px] w-full overflow-hidden rounded-xl bg-white"
                style={{ display: data ? "block" : "none" }}
              />
            </div>

            {planUrl && (
              <div className="rounded-2xl bg-white p-3 shadow ring-1 ring-black/5 dark:bg-zinc-800/70">
                <h2 className="mb-2 px-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  2B Plan
                </h2>
                <img src={planUrl} alt="2B plan" className="w-full rounded-xl" />
              </div>
            )}
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-slate-400">
          Mimari3D — Tüm işlemler tarayıcınızda yapılır; dosyanız sunucuya gönderilmez.
        </footer>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">{label}</span>
      {children}
    </label>
  );
}
