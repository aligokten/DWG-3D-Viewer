import type { MeshData } from "../core/types";

/** İkili (binary) STL üretir. Üçgen normalleri yüzeyden hesaplanır. */
export function toBinarySTL(mesh: MeshData, name = "FormStudio"): Blob {
  const { positions, indices } = mesh;
  const triCount = indices.length / 3;
  const buffer = new ArrayBuffer(84 + triCount * 50);
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);

  const header = `${name} - formstudio`.slice(0, 79);
  for (let i = 0; i < header.length; i++) bytes[i] = header.charCodeAt(i);
  view.setUint32(80, triCount, true);

  let o = 84;
  for (let t = 0; t < indices.length; t += 3) {
    const a = indices[t] * 3;
    const b = indices[t + 1] * 3;
    const c = indices[t + 2] * 3;

    const ux = positions[b] - positions[a];
    const uy = positions[b + 1] - positions[a + 1];
    const uz = positions[b + 2] - positions[a + 2];
    const vx = positions[c] - positions[a];
    const vy = positions[c + 1] - positions[a + 1];
    const vz = positions[c + 2] - positions[a + 2];
    let nx = uy * vz - uz * vy;
    let ny = uz * vx - ux * vz;
    let nz = ux * vy - uy * vx;
    const len = Math.hypot(nx, ny, nz) || 1;
    nx /= len; ny /= len; nz /= len;

    view.setFloat32(o, nx, true); view.setFloat32(o + 4, ny, true); view.setFloat32(o + 8, nz, true);
    o += 12;
    for (const idx of [a, b, c]) {
      view.setFloat32(o, positions[idx], true);
      view.setFloat32(o + 4, positions[idx + 1], true);
      view.setFloat32(o + 8, positions[idx + 2], true);
      o += 12;
    }
    view.setUint16(o, 0, true);
    o += 2;
  }

  return new Blob([buffer], { type: "model/stl" });
}
