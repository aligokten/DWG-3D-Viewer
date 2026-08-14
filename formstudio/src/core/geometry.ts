import { deformedRadius } from "./deform";
import { radiusAt, sampleProfile, slopeAt } from "./profile";
import type { MeshData, ModelParams } from "./types";

const TAU = Math.PI * 2;

/** Basit üçgen ağı toplayıcısı. */
class MeshBuilder {
  private pos: number[] = [];
  private idx: number[] = [];

  vertex(x: number, y: number, z: number): number {
    const i = this.pos.length / 3;
    this.pos.push(x, y, z);
    return i;
  }

  tri(a: number, b: number, c: number): void {
    this.idx.push(a, b, c);
  }

  /**
   * İki halkayı (aynı segment sayısı) yüzeyle birleştirir.
   * Varsayılan sarım, A -> B yönü +z iken dışa bakan normal üretir.
   */
  bridge(startA: number, startB: number, segments: number, flip = false): void {
    for (let j = 0; j < segments; j++) {
      const j2 = (j + 1) % segments;
      const a = startA + j;
      const b = startA + j2;
      const c = startB + j;
      const d = startB + j2;
      if (flip) {
        this.tri(a, d, b);
        this.tri(a, c, d);
      } else {
        this.tri(a, b, d);
        this.tri(a, d, c);
      }
    }
  }

  /** Halkayı merkez noktaya kapatır. up=false ise normal -z yönündedir. */
  cap(startRing: number, segments: number, cx: number, cy: number, cz: number, up: boolean): void {
    const center = this.vertex(cx, cy, cz);
    for (let j = 0; j < segments; j++) {
      const a = startRing + j;
      const b = startRing + ((j + 1) % segments);
      if (up) this.tri(center, a, b);
      else this.tri(center, b, a);
    }
  }

  build(): { positions: Float32Array; indices: Uint32Array } {
    return {
      positions: new Float32Array(this.pos),
      indices: new Uint32Array(this.idx),
    };
  }
}

/** Belirli bir yükseklikteki (0..1) dış yarıçapı, tüm deformasyonlar uygulanmış olarak verir. */
export function outerRadius(p: ModelParams, curve: ReturnType<typeof sampleProfile>, theta: number, zNorm: number): number {
  const base = radiusAt(curve, zNorm) * p.radius;
  return deformedRadius(p, base, theta, zNorm);
}

/** Eğimli duvarda gerçek cidar kalınlığını korumak için yatay ofset düzeltmesi. */
function wallOffsetAt(p: ModelParams, curve: ReturnType<typeof sampleProfile>, zNorm: number): number {
  const drdz = (slopeAt(curve, zNorm) * p.radius) / Math.max(1e-6, p.height);
  return p.wall * Math.sqrt(1 + drdz * drdz);
}

/**
 * Parametrelerden kapalı (baskıya hazır) bir kabuk üretir:
 * dış yüzey + iç yüzey + taban + ağız kenarı (+ isteğe bağlı su deliği).
 */
export function buildMesh(p: ModelParams): MeshData {
  const curve = sampleProfile(p.profile);
  const S = Math.max(12, Math.round(p.segments));
  const L = Math.max(8, Math.round(p.layers));
  const mb = new MeshBuilder();

  const hasFloor = p.base > 0.01;
  const baseZ = Math.min(p.base, p.height * 0.5);
  const holeR = hasFloor ? Math.max(0, p.drainHole / 2) : 0;

  const ringAt = (zNorm: number, offset: number, minR: number): number => {
    const zMM = zNorm * p.height;
    let start = -1;
    for (let j = 0; j < S; j++) {
      const th = (j / S) * TAU;
      const r = Math.max(minR, outerRadius(p, curve, th, zNorm) - offset);
      const i = mb.vertex(r * Math.cos(th), r * Math.sin(th), zMM);
      if (j === 0) start = i;
    }
    return start;
  };

  // --- Dış yüzey ---
  const outerStarts: number[] = [];
  for (let i = 0; i < L; i++) {
    outerStarts.push(ringAt(i / (L - 1), 0, 0.05));
  }
  for (let i = 0; i < L - 1; i++) mb.bridge(outerStarts[i], outerStarts[i + 1], S);

  // --- İç yüzey (boşluk) ---
  const innerZ0 = hasFloor ? baseZ / p.height : 0;
  const innerStarts: number[] = [];
  for (let i = 0; i < L; i++) {
    const zNorm = innerZ0 + (1 - innerZ0) * (i / (L - 1));
    innerStarts.push(ringAt(zNorm, wallOffsetAt(p, curve, zNorm), 0.15));
  }
  // İç yüzey içeri bakar -> ters sarım.
  for (let i = 0; i < L - 1; i++) mb.bridge(innerStarts[i], innerStarts[i + 1], S, true);

  // --- Ağız kenarı (dış üst halka -> iç üst halka, yukarı bakar) ---
  mb.bridge(outerStarts[L - 1], innerStarts[L - 1], S);

  if (!hasFloor) {
    // Alttan açık (abajur / armatür gövdesi): alt kenarı kapat.
    mb.bridge(innerStarts[0], outerStarts[0], S);
  } else if (holeR > 0.05) {
    // Su delikli taban: alt ve üst halka + delik duvarı.
    const holeRing = (zMM: number) => {
      let start = -1;
      for (let j = 0; j < S; j++) {
        const th = (j / S) * TAU;
        const i = mb.vertex(holeR * Math.cos(th), holeR * Math.sin(th), zMM);
        if (j === 0) start = i;
      }
      return start;
    };
    const hBottom = holeRing(0);
    const hTop = holeRing(baseZ);
    // Alt yüz (aşağı bakar): delik halkası -> dış halka
    mb.bridge(hBottom, outerStarts[0], S);
    // Taban üstü (yukarı bakar): iç halka -> delik halkası
    mb.bridge(innerStarts[0], hTop, S);
    // Delik duvarı (eksene bakar)
    mb.bridge(hBottom, hTop, S, true);
  } else {
    // Düz taban: alt disk (aşağı bakar) + taban üstü (yukarı bakar)
    mb.cap(outerStarts[0], S, 0, 0, 0, false);
    mb.cap(innerStarts[0], S, 0, 0, baseZ, true);
  }

  const { positions, indices } = mb.build();
  return {
    positions,
    indices,
    triangleCount: indices.length / 3,
    size: boundsOf(positions),
    volumeCm3: meshVolumeCm3(positions, indices),
  };
}

function boundsOf(positions: Float32Array): [number, number, number] {
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < positions.length; i += 3) {
    minX = Math.min(minX, positions[i]); maxX = Math.max(maxX, positions[i]);
    minY = Math.min(minY, positions[i + 1]); maxY = Math.max(maxY, positions[i + 1]);
    minZ = Math.min(minZ, positions[i + 2]); maxZ = Math.max(maxZ, positions[i + 2]);
  }
  if (!isFinite(minX)) return [0, 0, 0];
  return [maxX - minX, maxY - minY, maxZ - minZ];
}

/** Kapalı ağın işaretli hacmi (cm³). */
function meshVolumeCm3(positions: Float32Array, indices: Uint32Array): number {
  let v = 0;
  for (let t = 0; t < indices.length; t += 3) {
    const a = indices[t] * 3;
    const b = indices[t + 1] * 3;
    const c = indices[t + 2] * 3;
    const ax = positions[a], ay = positions[a + 1], az = positions[a + 2];
    const bx = positions[b], by = positions[b + 1], bz = positions[b + 2];
    const cx = positions[c], cy = positions[c + 1], cz = positions[c + 2];
    v +=
      (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
  }
  return Math.abs(v) / 1000;
}
