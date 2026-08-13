import type { MeshData } from "../core/types";

/** Wavefront OBJ (köşe + yüz). Ölçü birimi mm, Z yukarı. */
export function toOBJ(mesh: MeshData, name = "FormStudio"): Blob {
  const { positions, indices } = mesh;
  const out: string[] = [
    "# formstudio — parametrik 3B obje",
    `o ${name}`,
  ];
  for (let i = 0; i < positions.length; i += 3) {
    out.push(`v ${positions[i].toFixed(4)} ${positions[i + 1].toFixed(4)} ${positions[i + 2].toFixed(4)}`);
  }
  for (let t = 0; t < indices.length; t += 3) {
    out.push(`f ${indices[t] + 1} ${indices[t + 1] + 1} ${indices[t + 2] + 1}`);
  }
  return new Blob([out.join("\n")], { type: "model/obj" });
}
