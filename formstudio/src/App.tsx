import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { buildMesh } from "./core/geometry";
import { PRESETS, presetParams } from "./core/presets";
import type { ModelParams, ObjectKind } from "./core/types";
import { DEFAULT_PRINT, estimatePrint, toGCode, type PrintSettings } from "./export/gcode";
import { toOBJ } from "./export/obj";
import { toBinarySTL } from "./export/stl";
import { Button, Section, Slider, Toggle } from "./ui/Controls";
import { LatticeEditor } from "./ui/LatticeEditor";
import { ProfileEditor } from "./ui/ProfileEditor";
import { Viewport, type ViewOptions } from "./ui/Viewport";

const TABS = ["Profil", "Biçim", "Doku", "Kafes", "Baskı", "Görünüm"] as const;
type Tab = (typeof TABS)[number];

const STORAGE_KEY = "formstudio.project.v1";

const DEFAULT_VIEW: ViewOptions = {
  colorA: "#f97316",
  colorB: "#3b82f6",
  layerHeight: 0.28,
  showLayers: true,
  wireframe: false,
  autoRotate: false,
  showGrid: true,
};

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export default function App() {
  const [params, setParamsRaw] = useState<ModelParams>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved) as ModelParams;
    } catch {
      /* bozuk kayıt: varsayılana dön */
    }
    return presetParams("vazo");
  });
  const [view, setView] = useState<ViewOptions>(DEFAULT_VIEW);
  const [print, setPrint] = useState<PrintSettings>(DEFAULT_PRINT);
  const [tab, setTab] = useState<Tab>("Profil");
  const [fitToken, setFitToken] = useState(0);
  const [panelOpen, setPanelOpen] = useState(true);
  // Dar ekranlarda panel ve 3B görünüm aynı anda sığmaz; hangisinin
  // gösterileceğini bu seçer. Uygulama önce 3B önizlemeyle açılır.
  const [mobilePane, setMobilePane] = useState<"preview" | "edit">("preview");

  const history = useRef<ModelParams[]>([]);
  const future = useRef<ModelParams[]>([]);
  const snapshot = useRef<(() => void) | null>(null);

  const setParams = useCallback((updater: (p: ModelParams) => ModelParams) => {
    setParamsRaw((prev) => {
      history.current = [...history.current.slice(-40), prev];
      future.current = [];
      return updater(prev);
    });
  }, []);

  const undo = useCallback(() => {
    setParamsRaw((prev) => {
      const last = history.current.pop();
      if (!last) return prev;
      future.current = [...future.current, prev];
      return last;
    });
  }, []);

  const redo = useCallback(() => {
    setParamsRaw((prev) => {
      const next = future.current.pop();
      if (!next) return prev;
      history.current = [...history.current, prev];
      return next;
    });
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
      } catch {
        /* kota dolu olabilir; kritik değil */
      }
    }, 400);
    return () => clearTimeout(id);
  }, [params]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key.toLowerCase() === "z" && !e.shiftKey) { e.preventDefault(); undo(); }
      else if ((e.key.toLowerCase() === "z" && e.shiftKey) || e.key.toLowerCase() === "y") { e.preventDefault(); redo(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [undo, redo]);

  // Ağ üretimi ağır; kaydırıcılar akıcı kalsın diye ertelenmiş değer kullanılır.
  const deferred = useDeferredValue(params);
  const mesh = useMemo(() => buildMesh(deferred), [deferred]);
  const busy = deferred !== params;

  const estimate = useMemo(() => estimatePrint(deferred, print), [deferred, print]);

  const applyPreset = (kind: ObjectKind) => {
    setParams(() => presetParams(kind));
    setFitToken((t) => t + 1);
  };

  const patch = (part: Partial<ModelParams>) => setParams((p) => ({ ...p, ...part }));

  const baseName = `${params.kind}-${Math.round(params.height)}x${Math.round(params.radius * 2)}`;

  const mainVisibleOnMobile = !panelOpen || mobilePane === "preview";

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-neutral-950 text-neutral-200">
      {/* Üst çubuk */}
      <header className="flex shrink-0 items-center gap-2 overflow-x-auto border-b border-neutral-800 px-3 py-2.5 sm:gap-3 sm:px-4">
        <span className="shrink-0 font-mono text-lg font-bold tracking-tight">
          <span className="text-orange-500">FORM</span>studio
        </span>
        <span className="hidden shrink-0 rounded-md border border-neutral-700 px-2 py-0.5 font-mono text-[11px] text-neutral-400 sm:inline-block">
          v1.0
        </span>
        <span className="hidden text-[11px] uppercase tracking-[0.2em] text-neutral-600 sm:inline">
          parametrik 3B obje modelleme
        </span>
        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          {busy ? <span className="hidden text-[11px] text-orange-400 sm:inline">hesaplanıyor…</span> : null}
          <Button onClick={undo} title="Geri al (Ctrl+Z)">↶</Button>
          <Button onClick={redo} title="İleri al (Ctrl+Shift+Z)">↷</Button>
          <Button onClick={() => setFitToken((t) => t + 1)} title="Görünümü sığdır">⤢</Button>
          <Button onClick={() => setPanelOpen((o) => !o)}>
            <span className="hidden sm:inline">{panelOpen ? "Paneli gizle" : "Panel"}</span>
            <span className="sm:hidden">{panelOpen ? "⛶" : "☰"}</span>
          </Button>
        </div>
      </header>

      {/* Mobil sekme anahtarı: panel açıkken 3B önizleme ile ayarlar arasında geçiş */}
      {panelOpen ? (
        <div className="flex shrink-0 gap-1 border-b border-neutral-800 p-1.5 md:hidden">
          <button
            type="button"
            onClick={() => setMobilePane("preview")}
            className={`flex-1 rounded-md py-2 text-[13px] font-medium transition-colors ${
              mobilePane === "preview" ? "bg-orange-600 text-white" : "text-neutral-400"
            }`}
          >
            3B Önizleme
          </button>
          <button
            type="button"
            onClick={() => setMobilePane("edit")}
            className={`flex-1 rounded-md py-2 text-[13px] font-medium transition-colors ${
              mobilePane === "edit" ? "bg-neutral-800 text-white" : "text-neutral-400"
            }`}
          >
            Ayarlar
          </button>
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        {/* Sol panel */}
        {panelOpen ? (
          <aside
            className={`${
              mobilePane === "edit" ? "flex" : "hidden"
            } w-full min-h-0 flex-col border-neutral-800 md:flex md:h-full md:w-[370px] md:border-r md:border-b-0`}
          >
            {/* Obje türleri */}
            <div className="flex gap-1 overflow-x-auto border-b border-neutral-800 p-2 md:grid md:grid-cols-5 md:overflow-visible">
              {(Object.keys(PRESETS) as ObjectKind[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  title={PRESETS[k].hint}
                  onClick={() => applyPreset(k)}
                  className={`shrink-0 rounded-lg px-2.5 py-2 text-[11px] leading-tight whitespace-nowrap transition-colors md:w-full md:whitespace-normal md:px-1 ${
                    params.kind === k
                      ? "bg-orange-600 text-white"
                      : "border border-neutral-800 text-neutral-400 hover:border-neutral-600"
                  }`}
                >
                  {PRESETS[k].label}
                </button>
              ))}
            </div>

            {/* Sekmeler */}
            <div className="flex gap-1 overflow-x-auto border-b border-neutral-800 px-2 py-1.5">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`shrink-0 rounded-md px-2.5 py-1 text-[12px] ${
                    tab === t ? "bg-neutral-800 text-white" : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-4">
              {tab === "Profil" ? (
                <Section title="Profil eğrisi">
                  <ProfileEditor
                    points={params.profile}
                    onChange={(profile) => patch({ profile })}
                  />
                  <Slider label="Yükseklik" value={params.height} min={20} max={400} step={1} unit="mm"
                    onChange={(height) => patch({ height })} />
                  <Slider label="Azami yarıçap" value={params.radius} min={10} max={150} step={1} unit="mm"
                    onChange={(radius) => patch({ radius })} />
                  <Slider label="Cidar kalınlığı" value={params.wall} min={0.4} max={8} step={0.1} unit="mm"
                    onChange={(wall) => patch({ wall })} />
                  <Slider label="Taban kalınlığı" value={params.base} min={0} max={12} step={0.1} unit="mm"
                    hint="0 = alttan açık (armatür/abajur)"
                    onChange={(base) => patch({ base })} />
                  {params.base > 0 ? (
                    <Slider label="Su deliği çapı" value={params.drainHole} min={0} max={40} step={1} unit="mm"
                      hint="Saksılar için drenaj deliği"
                      onChange={(drainHole) => patch({ drainHole })} />
                  ) : null}
                </Section>
              ) : null}

              {tab === "Biçim" ? (
                <>
                  <Section title="Enine kesit">
                    <Slider label="Çokgen kenar sayısı" value={params.cross.polygonSides} min={0} max={16} step={1}
                      hint="0 = tam daire"
                      onChange={(v) => patch({ cross: { ...params.cross, polygonSides: v } })} />
                    <Slider label="Köşe yuvarlatma" value={params.cross.polygonRound} min={0} max={1} step={0.01}
                      onChange={(v) => patch({ cross: { ...params.cross, polygonRound: v } })} />
                    <Slider label="Lob sayısı" value={params.cross.lobes} min={0} max={40} step={1}
                      hint="Çevresel dalgalanma (papatya kesit)"
                      onChange={(v) => patch({ cross: { ...params.cross, lobes: v } })} />
                    <Slider label="Lob genliği" value={params.cross.lobeAmount} min={0} max={0.5} step={0.01}
                      onChange={(v) => patch({ cross: { ...params.cross, lobeAmount: v } })} />
                    <Slider label="Burulma" value={params.cross.twist} min={-720} max={720} step={5} unit="°"
                      hint="Yükseklik boyunca toplam dönüş"
                      onChange={(v) => patch({ cross: { ...params.cross, twist: v } })} />
                  </Section>
                  <Section title="Çözünürlük">
                    <Slider label="Yatay dilim" value={params.layers} min={20} max={600} step={10}
                      onChange={(layers) => patch({ layers })} />
                    <Slider label="Çevresel segment" value={params.segments} min={24} max={512} step={8}
                      onChange={(segments) => patch({ segments })} />
                  </Section>
                </>
              ) : null}

              {tab === "Doku" ? (
                <>
                  <Section title="Dikey dalga">
                    <Slider label="Dalga sayısı" value={params.texture.waveCount} min={0} max={60} step={1}
                      onChange={(v) => patch({ texture: { ...params.texture, waveCount: v } })} />
                    <Slider label="Dalga genliği" value={params.texture.waveAmount} min={0} max={20} step={0.1} unit="mm"
                      onChange={(v) => patch({ texture: { ...params.texture, waveAmount: v } })} />
                    <Slider label="Spiral kayması" value={params.texture.waveSpiral} min={-8} max={8} step={0.1}
                      hint="Dalgayı açıyla kaydırır → burgu deseni"
                      onChange={(v) => patch({ texture: { ...params.texture, waveSpiral: v } })} />
                  </Section>
                  <Section title="Nervür">
                    <Slider label="Nervür sayısı" value={params.texture.ribCount} min={0} max={200} step={1}
                      onChange={(v) => patch({ texture: { ...params.texture, ribCount: v } })} />
                    <Slider label="Nervür genliği" value={params.texture.ribAmount} min={0} max={6} step={0.1} unit="mm"
                      onChange={(v) => patch({ texture: { ...params.texture, ribAmount: v } })} />
                  </Section>
                  <Section title="Pürüz">
                    <Slider label="Gürültü genliği" value={params.texture.noiseAmount} min={0} max={10} step={0.1} unit="mm"
                      onChange={(v) => patch({ texture: { ...params.texture, noiseAmount: v } })} />
                    <Slider label="Gürültü ölçeği" value={params.texture.noiseScale} min={0.5} max={30} step={0.5}
                      onChange={(v) => patch({ texture: { ...params.texture, noiseScale: v } })} />
                  </Section>
                </>
              ) : null}

              {tab === "Kafes" ? (
                <Section title="Kafes deformasyonu">
                  <Toggle label="Kafesi uygula" checked={params.lattice.enabled}
                    onChange={(enabled) => patch({ lattice: { ...params.lattice, enabled } })} />
                  <Slider label="Etki" value={params.lattice.strength} min={0} max={40} step={0.5} unit="mm"
                    onChange={(strength) => patch({ lattice: { ...params.lattice, strength } })} />
                  <LatticeEditor lattice={params.lattice} onChange={(lattice) => patch({ lattice })} />
                  <p className="mt-2 text-[11px] text-neutral-500">
                    Turuncu hücreler yüzeyi dışarı, mavi hücreler içeri iter. Sağ tık/Alt+tık hücreyi sıfırlar.
                  </p>
                </Section>
              ) : null}

              {tab === "Baskı" ? (
                <>
                  <Section title="3B baskı ayarları">
                    <Slider label="Katman yüksekliği" value={print.layerHeight} min={0.1} max={0.6} step={0.02} unit="mm"
                      onChange={(layerHeight) => { setPrint({ ...print, layerHeight }); setView((v) => ({ ...v, layerHeight })); }} />
                    <Slider label="Nozul çapı" value={print.nozzle} min={0.2} max={1.2} step={0.05} unit="mm"
                      onChange={(nozzle) => setPrint({ ...print, nozzle, lineWidth: +(nozzle * 1.2).toFixed(2) })} />
                    <Slider label="Çizgi genişliği" value={print.lineWidth} min={0.2} max={1.6} step={0.05} unit="mm"
                      onChange={(lineWidth) => setPrint({ ...print, lineWidth })} />
                    <Slider label="Baskı hızı" value={print.speed} min={10} max={120} step={1} unit="mm/s"
                      onChange={(speed) => setPrint({ ...print, speed })} />
                    <Slider label="İlk katman hızı" value={print.firstLayerSpeed} min={5} max={60} step={1} unit="mm/s"
                      onChange={(firstLayerSpeed) => setPrint({ ...print, firstLayerSpeed })} />
                    <Slider label="Nozul sıcaklığı" value={print.nozzleTemp} min={170} max={300} step={5} unit="°C"
                      onChange={(nozzleTemp) => setPrint({ ...print, nozzleTemp })} />
                    <Slider label="Tabla sıcaklığı" value={print.bedTemp} min={0} max={120} step={5} unit="°C"
                      onChange={(bedTemp) => setPrint({ ...print, bedTemp })} />
                    <Slider label="Tabla X" value={print.bedX} min={100} max={400} step={10} unit="mm"
                      onChange={(bedX) => setPrint({ ...print, bedX })} />
                    <Slider label="Tabla Y" value={print.bedY} min={100} max={400} step={10} unit="mm"
                      onChange={(bedY) => setPrint({ ...print, bedY })} />
                    <Toggle label="Soğutma fanı" checked={print.fan}
                      onChange={(fan) => setPrint({ ...print, fan })} />
                  </Section>
                  <Section title="Tahmin">
                    <ul className="space-y-1 py-1 font-mono text-[12px] text-neutral-400">
                      <li>Filament: {estimate.lengthM.toFixed(2)} m (~{estimate.grams.toFixed(0)} g)</li>
                      <li>Süre (kaba): ~{Math.round(estimate.minutes)} dk</li>
                      <li>Baskı hacmi: {estimate.volumeCm3.toFixed(1)} cm³</li>
                      <li>Model hacmi (STL): {mesh.volumeCm3.toFixed(1)} cm³</li>
                    </ul>
                    <p className="text-[11px] text-neutral-500">
                      G-code “vazo modu”nda üretilir: dolu taban + tek duvarlı sürekli spiral. Bu
                      nedenle baskı, modeldeki cidar kalınlığından bağımsız olarak tek çizgi
                      genişliğindedir; STL’yi dilimleyiciye verirseniz model hacmi geçerli olur.
                    </p>
                  </Section>
                </>
              ) : null}

              {tab === "Görünüm" ? (
                <Section title="Görünüm">
                  <label className="flex items-center justify-between py-2 text-[13px] text-neutral-300">
                    <span>Alt renk</span>
                    <input type="color" value={view.colorA} className="h-7 w-12 rounded border border-neutral-700 bg-transparent"
                      onChange={(e) => setView({ ...view, colorA: e.target.value })} />
                  </label>
                  <label className="flex items-center justify-between py-2 text-[13px] text-neutral-300">
                    <span>Üst renk</span>
                    <input type="color" value={view.colorB} className="h-7 w-12 rounded border border-neutral-700 bg-transparent"
                      onChange={(e) => setView({ ...view, colorB: e.target.value })} />
                  </label>
                  <Toggle label="Baskı katman çizgileri" checked={view.showLayers}
                    onChange={(showLayers) => setView({ ...view, showLayers })} />
                  <Toggle label="Tel kafes" checked={view.wireframe}
                    onChange={(wireframe) => setView({ ...view, wireframe })} />
                  <Toggle label="Otomatik döndür" checked={view.autoRotate}
                    onChange={(autoRotate) => setView({ ...view, autoRotate })} />
                  <Toggle label="Zemin ızgarası" checked={view.showGrid}
                    onChange={(showGrid) => setView({ ...view, showGrid })} />
                  <Button onClick={() => snapshot.current?.()}>PNG anlık görüntü</Button>
                </Section>
              ) : null}
            </div>

            {/* Dışa aktarım */}
            <div className="grid shrink-0 grid-cols-3 gap-2 border-t border-neutral-800 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
              <Button variant="primary" onClick={() => download(toBinarySTL(mesh, baseName), `${baseName}.stl`)}>
                STL
              </Button>
              <Button onClick={() => download(toOBJ(mesh, baseName), `${baseName}.obj`)}>OBJ</Button>
              <Button onClick={() => download(toGCode(params, print), `${baseName}.gcode`)}>G-code</Button>
              <Button
                onClick={() =>
                  download(new Blob([JSON.stringify(params, null, 2)], { type: "application/json" }), `${baseName}.json`)
                }
              >
                Proje
              </Button>
              <label className="cursor-pointer rounded-lg border border-neutral-700 px-3 py-2 text-center text-[13px] text-neutral-300 hover:border-neutral-500">
                Yükle
                <input
                  type="file"
                  accept="application/json,.json"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      const loaded = JSON.parse(await file.text()) as ModelParams;
                      setParams(() => loaded);
                      setFitToken((t) => t + 1);
                    } catch {
                      alert("Proje dosyası okunamadı.");
                    }
                    e.target.value = "";
                  }}
                />
              </label>
              <Button onClick={() => applyPreset(params.kind)}>Sıfırla</Button>
            </div>
          </aside>
        ) : null}

        {/* 3B görünüm */}
        <main
          className={`${
            mainVisibleOnMobile ? "flex" : "hidden"
          } relative min-h-0 flex-1 md:flex`}
        >
          <Viewport mesh={mesh} view={view} fitToken={fitToken} snapshotRef={snapshot} />
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-black/50 px-3 py-2 font-mono text-[11px] leading-relaxed text-neutral-400 backdrop-blur">
            <div>
              {mesh.size[0].toFixed(0)} × {mesh.size[1].toFixed(0)} × {mesh.size[2].toFixed(0)} mm
            </div>
            <div>{mesh.triangleCount.toLocaleString("tr-TR")} üçgen · {mesh.volumeCm3.toFixed(1)} cm³</div>
          </div>
        </main>
      </div>
    </div>
  );
}
