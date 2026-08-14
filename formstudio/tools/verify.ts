/**
 * Geometri doğrulaması: her hazır ayar için üretilen ağın
 *  - kapalı (su geçirmez) olduğunu: her kenar tam olarak iki üçgende ve ters yönde,
 *  - hacminin pozitif ve tutarlı olduğunu,
 *  - G-code çıktısının beklenen komutları içerdiğini
 * kontrol eder.  Çalıştırma: npm run verify
 */
import { buildMesh } from "../src/core/geometry";
import { PRESETS, presetParams } from "../src/core/presets";
import { DEFAULT_PRINT, toGCode } from "../src/export/gcode";
import { toBinarySTL } from "../src/export/stl";
import type { ModelParams, ObjectKind } from "../src/core/types";

let failures = 0;

function check(name: string, ok: boolean, detail = "") {
  if (!ok) failures++;
  console.log(`${ok ? "  ok  " : " FAIL "} ${name}${detail ? ` — ${detail}` : ""}`);
}

/** Kapalı yüzey testi: yönlü kenarlar birebir eşleşmeli. */
function manifoldReport(indices: Uint32Array) {
  const edges = new Map<string, number>();
  for (let t = 0; t < indices.length; t += 3) {
    const tri = [indices[t], indices[t + 1], indices[t + 2]];
    for (let i = 0; i < 3; i++) {
      const a = tri[i];
      const b = tri[(i + 1) % 3];
      const key = `${a}_${b}`;
      const rev = `${b}_${a}`;
      const open = edges.get(rev) ?? 0;
      if (open > 0) edges.set(rev, open - 1);
      else edges.set(key, (edges.get(key) ?? 0) + 1);
    }
  }
  let unmatched = 0;
  for (const n of edges.values()) unmatched += n;
  return unmatched;
}

function degenerateCount(positions: Float32Array, indices: Uint32Array) {
  let bad = 0;
  for (let t = 0; t < indices.length; t += 3) {
    const a = indices[t] * 3, b = indices[t + 1] * 3, c = indices[t + 2] * 3;
    const ux = positions[b] - positions[a], uy = positions[b + 1] - positions[a + 1], uz = positions[b + 2] - positions[a + 2];
    const vx = positions[c] - positions[a], vy = positions[c + 1] - positions[a + 1], vz = positions[c + 2] - positions[a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    if (Math.hypot(nx, ny, nz) < 1e-9) bad++;
  }
  return bad;
}

function verify(label: string, p: ModelParams) {
  console.log(`\n# ${label}`);
  const mesh = buildMesh(p);
  const unmatched = manifoldReport(mesh.indices);
  check("üçgen üretildi", mesh.triangleCount > 100, `${mesh.triangleCount} üçgen`);
  check("kapalı yüzey (manifold)", unmatched === 0, `${unmatched} eşleşmeyen kenar`);
  check("bozuk üçgen yok", degenerateCount(mesh.positions, mesh.indices) === 0);
  check("hacim makul", mesh.volumeCm3 > 0.5 && mesh.volumeCm3 < 5000, `${mesh.volumeCm3.toFixed(1)} cm³`);

  // Deformasyonların yarıçapa ekleyebileceği azami pay.
  const sides = Math.round(p.cross.polygonSides);
  const polyMax = sides >= 3 ? 1 / Math.cos(Math.PI / sides) : 1;
  const maxRadius =
    p.radius * polyMax * (1 + p.cross.lobeAmount) +
    p.texture.waveAmount +
    p.texture.ribAmount +
    p.texture.noiseAmount +
    (p.lattice.enabled ? p.lattice.strength : 0);
  check(
    "boyutlar profile uyuyor",
    Math.abs(mesh.size[2] - p.height) < 0.5 && mesh.size[0] <= maxRadius * 2 + 0.5,
    `${mesh.size.map((v) => v.toFixed(1)).join(" × ")} mm (sınır ${(maxRadius * 2).toFixed(1)})`
  );

  const stl = toBinarySTL(mesh);
  check("STL boyutu doğru", stl.size === 84 + mesh.triangleCount * 50, `${stl.size} bayt`);
  return mesh;
}

async function main() {
  for (const kind of Object.keys(PRESETS) as ObjectKind[]) {
    verify(PRESETS[kind].label, presetParams(kind));
  }

  // Uç durumlar
  const extreme = presetParams("vazo");
  extreme.cross = { polygonSides: 5, polygonRound: 0, lobes: 12, lobeAmount: 0.35, twist: 540 };
  extreme.texture = { waveCount: 30, waveAmount: 6, waveSpiral: 4, ribCount: 60, ribAmount: 1.5, noiseAmount: 2, noiseScale: 12 };
  extreme.lattice = { enabled: true, rows: 6, cols: 8, strength: 12, values: Array.from({ length: 48 }, (_, i) => Math.sin(i)) };
  verify("uç ayarlar (tüm deformasyonlar açık)", extreme);

  const thick = presetParams("kupa");
  thick.wall = 8;
  thick.radius = 12;
  verify("kalın cidar / dar gövde", thick);

  const gcodeBlob = toGCode(presetParams("vazo"), DEFAULT_PRINT);
  const text = await gcodeBlob.text();
  console.log("\n# G-code");
  check("başlangıç bloğu", text.includes("M109") && text.includes("G28"));
  check("spiral gövde var", text.includes("spiral gövde"));
  check("ekstrüzyon artıyor", /G1 X.*E\d+\.\d+/.test(text));
  let maxZ = 0;
  for (const m of text.matchAll(/Z(\d+\.\d+)/g)) maxZ = Math.max(maxZ, parseFloat(m[1]));
  check("son Z ≈ obje yüksekliği", maxZ >= 179 && maxZ <= 195, `maks Z ${maxZ.toFixed(1)} mm`);
  check("bitiş bloğu", text.includes("M84"));

  console.log(failures === 0 ? "\nTÜM KONTROLLER GEÇTİ" : `\n${failures} KONTROL BAŞARISIZ`);
  process.exit(failures === 0 ? 0 : 1);
}

void main();
