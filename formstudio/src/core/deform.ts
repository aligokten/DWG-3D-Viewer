import type { CrossSection, Lattice, SurfaceTexture } from "./types";

const TAU = Math.PI * 2;

/** Düzgün çokgen kesitin açıya bağlı yarıçap çarpanı (daireye göre). */
export function polygonFactor(theta: number, sides: number, round: number): number {
  if (sides < 3) return 1;
  const seg = TAU / sides;
  const a = ((theta % seg) + seg) % seg;
  const sharp = Math.cos(Math.PI / sides) / Math.cos(a - seg / 2);
  const k = Math.min(1, Math.max(0, round));
  return sharp * (1 - k) + 1 * k;
}

/** Deterministik 2B değer gürültüsü (harici bağımlılık olmadan). */
function hash2(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function valueNoise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi);
  const b = hash2(xi + 1, yi);
  const c = hash2(xi, yi + 1);
  const d = hash2(xi + 1, yi + 1);
  const top = a + (b - a) * u;
  const bot = c + (d - c) * u;
  return (top + (bot - top) * v) * 2 - 1;
}

/** Kafes ızgarasından (satır=yükseklik, sütun=açı) çift doğrusal örnekleme. */
export function latticeOffset(lat: Lattice, theta: number, zNorm: number): number {
  if (!lat.enabled || lat.strength === 0 || lat.rows < 1 || lat.cols < 1) return 0;
  const { rows, cols, values } = lat;

  const fz = Math.min(1, Math.max(0, zNorm)) * (rows - 1);
  const r0 = Math.floor(fz);
  const r1 = Math.min(rows - 1, r0 + 1);
  const tz = fz - r0;

  const ft = (((theta % TAU) + TAU) % TAU) / TAU * cols; // açı sarmalı
  const c0 = Math.floor(ft) % cols;
  const c1 = (c0 + 1) % cols;
  const tt = ft - Math.floor(ft);

  const v = (row: number, col: number) => values[row * cols + col] ?? 0;
  const top = v(r0, c0) + (v(r0, c1) - v(r0, c0)) * tt;
  const bot = v(r1, c0) + (v(r1, c1) - v(r1, c0)) * tt;
  return (top + (bot - top) * tz) * lat.strength;
}

export interface DeformInput {
  cross: CrossSection;
  texture: SurfaceTexture;
  lattice: Lattice;
}

/**
 * Verilen açı ve normalize yükseklikte, temel yarıçapa uygulanacak son yarıçapı döndürür.
 * baseRadius mm cinsindendir; doku ve kafes katkıları da mm cinsindendir.
 */
export function deformedRadius(
  d: DeformInput,
  baseRadius: number,
  theta: number,
  zNorm: number
): number {
  const { cross, texture: tx, lattice } = d;

  // Burulma: açıyı yükseklikle kaydır.
  const twisted = theta + (cross.twist * Math.PI / 180) * zNorm;

  let f = polygonFactor(twisted, Math.round(cross.polygonSides), cross.polygonRound);
  if (cross.lobes >= 1 && cross.lobeAmount !== 0) {
    f *= 1 + cross.lobeAmount * Math.cos(Math.round(cross.lobes) * twisted);
  }

  let r = baseRadius * f;

  if (tx.waveCount > 0 && tx.waveAmount !== 0) {
    r += tx.waveAmount * Math.sin(TAU * tx.waveCount * zNorm + tx.waveSpiral * twisted);
  }
  if (tx.ribCount > 0 && tx.ribAmount !== 0) {
    r += tx.ribAmount * Math.sin(Math.round(tx.ribCount) * twisted);
  }
  if (tx.noiseAmount !== 0) {
    const s = Math.max(0.1, tx.noiseScale);
    // Açı yönünde sürekli (sarmalı bozmayan) gürültü: birim çemberin iki ekseninden örnekle.
    const n =
      valueNoise(Math.cos(twisted) * s, zNorm * s * 4) +
      valueNoise(Math.sin(twisted) * s + 17.3, zNorm * s * 4 + 5.1);
    r += tx.noiseAmount * n * 0.5;
  }

  r += latticeOffset(lattice, twisted, zNorm);

  return Math.max(0.05, r);
}
