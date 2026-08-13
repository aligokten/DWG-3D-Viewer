import type { ProfilePoint } from "./types";

/**
 * Profil eğrisi: kontrol noktalarından geçen yumuşak (Catmull-Rom) eğri.
 * Eğri z'ye göre artan sırada örneklenir ve r(z) tablosuna çevrilir.
 */

function catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  );
}

/** Kontrol noktalarını z'ye göre sıralayıp yumuşak eğri örnekler. */
export function sampleProfile(points: ProfilePoint[], samples = 400): { z: number[]; r: number[] } {
  const pts = [...points].sort((a, b) => a.z - b.z);
  if (pts.length === 0) return { z: [0, 1], r: [1, 1] };
  if (pts.length === 1) return { z: [0, 1], r: [pts[0].r, pts[0].r] };

  const z: number[] = [];
  const r: number[] = [];
  const perSeg = Math.max(2, Math.ceil(samples / (pts.length - 1)));

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const last = i === pts.length - 2;
    const count = last ? perSeg + 1 : perSeg;
    for (let s = 0; s < count; s++) {
      const t = s / perSeg;
      z.push(catmullRom(p0.z, p1.z, p2.z, p3.z, t));
      r.push(Math.max(0, catmullRom(p0.r, p1.r, p2.r, p3.r, t)));
    }
  }

  // Catmull-Rom z'de geri dönebilir; monoton hale getir (dilim aramasının doğru olması için).
  for (let i = 1; i < z.length; i++) if (z[i] < z[i - 1]) z[i] = z[i - 1];
  return { z, r };
}

/** Örneklenmiş eğriden verilen yükseklikteki yarıçapı okur (doğrusal ara değer). */
export function radiusAt(curve: { z: number[]; r: number[] }, zNorm: number): number {
  const { z, r } = curve;
  if (zNorm <= z[0]) return r[0];
  const n = z.length;
  if (zNorm >= z[n - 1]) return r[n - 1];

  let lo = 0;
  let hi = n - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (z[mid] <= zNorm) lo = mid;
    else hi = mid;
  }
  const span = z[hi] - z[lo];
  const t = span > 1e-9 ? (zNorm - z[lo]) / span : 0;
  return r[lo] + (r[hi] - r[lo]) * t;
}

/** Eğrinin dikeyle yaptığı eğim (dr/dz); cidar ofsetini normale göre düzeltmek için. */
export function slopeAt(curve: { z: number[]; r: number[] }, zNorm: number, eps = 0.005): number {
  const a = radiusAt(curve, Math.max(0, zNorm - eps));
  const b = radiusAt(curve, Math.min(1, zNorm + eps));
  const dz = Math.min(1, zNorm + eps) - Math.max(0, zNorm - eps);
  return dz > 1e-9 ? (b - a) / dz : 0;
}
