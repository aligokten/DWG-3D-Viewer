import { outerRadius } from "../core/geometry";
import { sampleProfile } from "../core/profile";
import type { ModelParams } from "../core/types";

const TAU = Math.PI * 2;

export interface PrintSettings {
  nozzle: number;
  layerHeight: number;
  lineWidth: number;
  filament: number;
  nozzleTemp: number;
  bedTemp: number;
  speed: number;
  firstLayerSpeed: number;
  bedX: number;
  bedY: number;
  fan: boolean;
  flow: number;
}

export const DEFAULT_PRINT: PrintSettings = {
  nozzle: 0.4,
  layerHeight: 0.28,
  lineWidth: 0.5,
  filament: 1.75,
  nozzleTemp: 210,
  bedTemp: 60,
  speed: 40,
  firstLayerSpeed: 18,
  bedX: 220,
  bedY: 220,
  fan: true,
  flow: 1,
};

/**
 * "Vazo modu" G-code: taban için eşmerkezli dolgu, ardından tek duvarlı sürekli
 * spiral. Marlin uyumlu, mutlak E (M82) kullanır.
 */
export function toGCode(p: ModelParams, s: PrintSettings): Blob {
  const curve = sampleProfile(p.profile);
  const area = Math.PI * (s.filament / 2) ** 2;
  const cx = s.bedX / 2;
  const cy = s.bedY / 2;
  const segs = Math.max(48, Math.min(360, Math.round(p.segments)));

  const g: string[] = [];
  let e = 0;
  let px = cx;
  let py = cy;
  let pz = 0;

  const eFor = (dist: number, h: number) => (dist * h * s.lineWidth * s.flow) / area;

  const path = (x: number, y: number, z: number, h: number, feed: number) => {
    const d = Math.hypot(x - px, y - py);
    if (d < 1e-5 && Math.abs(z - pz) < 1e-5) return;
    e += eFor(d, h);
    g.push(`G1 X${x.toFixed(3)} Y${y.toFixed(3)} Z${z.toFixed(3)} E${e.toFixed(5)} F${Math.round(feed * 60)}`);
    px = x; py = y; pz = z;
  };

  const travel = (x: number, y: number, z: number) => {
    g.push(`G0 X${x.toFixed(3)} Y${y.toFixed(3)} Z${z.toFixed(3)} F7200`);
    px = x; py = y; pz = z;
  };

  // Yol merkez hattı: dış yüzeyden yarım çizgi genişliği içeride.
  const pathRadius = (theta: number, zNorm: number) =>
    Math.max(0.2, outerRadius(p, curve, theta, zNorm) - s.lineWidth / 2);

  g.push(
    "; formstudio — parametrik obje (vazo modu)",
    `; obje: ${p.kind}  yükseklik: ${p.height} mm  yarıçap: ${p.radius} mm`,
    `; nozul: ${s.nozzle} mm  katman: ${s.layerHeight} mm  çizgi: ${s.lineWidth} mm`,
    "M82 ; mutlak ekstrüzyon",
    "G21 ; mm",
    "G90 ; mutlak konum",
    `M104 S${s.nozzleTemp}`,
    `M140 S${s.bedTemp}`,
    "G28 ; eksenleri sıfırla",
    `M190 S${s.bedTemp}`,
    `M109 S${s.nozzleTemp}`,
    "G92 E0",
    "; hazırlık çizgisi",
    "G1 Z0.3 F1200",
    `G1 X${(cx - 60).toFixed(2)} Y${(cy - 80).toFixed(2)} F6000`,
    `G1 X${(cx + 60).toFixed(2)} Y${(cy - 80).toFixed(2)} E12 F1000`,
    "G92 E0"
  );
  px = cx + 60; py = cy - 80; pz = 0.3;

  const baseLayers = Math.max(1, Math.round(Math.max(p.base, s.layerHeight) / s.layerHeight));
  const holeR = p.drainHole > 0 && p.base > 0 ? p.drainHole / 2 + s.lineWidth / 2 : 0;

  // --- Taban: eşmerkezli halkalar ---
  for (let li = 0; li < baseLayers; li++) {
    const z = (li + 1) * s.layerHeight;
    const zNorm = Math.min(1, z / p.height);
    const feed = li === 0 ? s.firstLayerSpeed : s.speed;
    if (li === 0 && s.fan) g.push("M106 S0");
    if (li === 1 && s.fan) g.push("M106 S255");
    g.push(`; taban katmanı ${li + 1}/${baseLayers}`);

    const rOuter = pathRadius(0, zNorm);
    let ring = 0;
    for (let r = rOuter; r > holeR + s.lineWidth * 0.5; r -= s.lineWidth) {
      const first = { x: cx + r * Math.cos(0), y: cy + r * Math.sin(0) };
      if (ring === 0) travel(first.x, first.y, z);
      else path(first.x, first.y, z, s.layerHeight, feed);
      for (let j = 1; j <= segs; j++) {
        const th = (j / segs) * TAU;
        const rr = Math.max(0.2, Math.min(r, pathRadius(th, zNorm)));
        path(cx + rr * Math.cos(th), cy + rr * Math.sin(th), z, s.layerHeight, feed);
      }
      ring++;
      if (ring > 400) break;
    }
  }

  // --- Gövde: sürekli spiral (tek duvar) ---
  const zStart = baseLayers * s.layerHeight;
  const turns = Math.max(1, Math.floor((p.height - zStart) / s.layerHeight));
  g.push(`; spiral gövde: ${turns} tur`);
  for (let t = 0; t < turns; t++) {
    for (let j = 0; j <= segs; j++) {
      const frac = (t + j / segs) / turns;
      const z = zStart + frac * (p.height - zStart);
      const zNorm = Math.min(1, z / p.height);
      const th = (j / segs) * TAU;
      const r = pathRadius(th, zNorm);
      path(cx + r * Math.cos(th), cy + r * Math.sin(th), z, s.layerHeight, s.speed);
    }
  }

  g.push(
    "; bitiş",
    `G1 E${(e - 3).toFixed(5)} F1800 ; geri çekme`,
    `G0 Z${(p.height + 10).toFixed(2)} F1200`,
    "M104 S0",
    "M140 S0",
    "M107",
    "G28 X Y",
    "M84",
    `; toplam filament: ${(e / 1000).toFixed(2)} m`
  );

  return new Blob([g.join("\n")], { type: "text/plain" });
}

/**
 * Vazo modu baskı tahmini: gerçek spiral yol uzunluğundan filament ve süre.
 * (Model hacminden değil; tek duvarlı baskı çok daha az malzeme kullanır.)
 */
export function estimatePrint(p: ModelParams, s: PrintSettings) {
  const curve = sampleProfile(p.profile);
  const segs = 64;
  const layerCount = Math.max(1, Math.floor(p.height / s.layerHeight));
  const baseLayers = Math.max(1, Math.round(Math.max(p.base, s.layerHeight) / s.layerHeight));

  let pathLen = 0;
  for (let li = 0; li < layerCount; li++) {
    const zNorm = Math.min(1, ((li + 1) * s.layerHeight) / p.height);
    let perim = 0;
    let prevX = 0;
    let prevY = 0;
    for (let j = 0; j <= segs; j++) {
      const th = (j / segs) * TAU;
      const r = Math.max(0.2, outerRadius(p, curve, th, zNorm) - s.lineWidth / 2);
      const x = r * Math.cos(th);
      const y = r * Math.sin(th);
      if (j > 0) perim += Math.hypot(x - prevX, y - prevY);
      prevX = x;
      prevY = y;
    }
    if (li < baseLayers) {
      // Dolu taban: eşmerkezli halkaların toplam uzunluğu ≈ alan / çizgi genişliği
      const rAvg = perim / TAU;
      const holeR = p.drainHole > 0 && p.base > 0 ? p.drainHole / 2 : 0;
      pathLen += (Math.PI * (rAvg * rAvg - holeR * holeR)) / s.lineWidth;
    } else {
      pathLen += perim;
    }
  }

  const area = Math.PI * (s.filament / 2) ** 2; // mm²
  const volumeMm3 = pathLen * s.layerHeight * s.lineWidth * s.flow;
  return {
    lengthM: volumeMm3 / area / 1000,
    minutes: pathLen / Math.max(1, s.speed) / 60,
    grams: (volumeMm3 / 1000) * 1.24,
    volumeCm3: volumeMm3 / 1000,
  };
}
