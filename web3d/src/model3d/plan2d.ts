// 2B mimari plan çizimi (HTML canvas). PDF ve önizleme için dataURL üretir.
import type { DrawingData, Category } from "./dxf";

const CAT_COLOR: Record<Category, string> = {
  wall: "#1f2937",
  door: "#16a34a",
  window: "#2563eb",
  column: "#dc2626",
};

export function renderPlan(data: DrawingData, width = 1600, height = 1131): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  const [minx, miny, maxx, maxy] = data.bboxRaw;
  const w = maxx - minx || 1;
  const h = maxy - miny || 1;
  const pad = 40;
  const scale = Math.min((width - 2 * pad) / w, (height - 2 * pad) / h);
  const offx = (width - w * scale) / 2;
  const offy = (height - h * scale) / 2;
  // DXF Y yukarı; canvas Y aşağı -> ters çevir
  const tx = (x: number) => offx + (x - minx) * scale;
  const ty = (y: number) => height - (offy + (y - miny) * scale);

  // Çizgiler
  for (const l of data.rawLines) {
    ctx.strokeStyle = l.cat ? CAT_COLOR[l.cat] : "#9ca3af";
    ctx.lineWidth = l.cat === "wall" ? 2.4 : 1.2;
    ctx.beginPath();
    ctx.moveTo(tx(l.x0), ty(l.y0));
    ctx.lineTo(tx(l.x1), ty(l.y1));
    ctx.stroke();
  }

  // Metinler
  ctx.fillStyle = "#374151";
  for (const t of data.rawTexts) {
    const px = tx(t.x);
    const py = ty(t.y);
    if (px < 0 || px > width || py < 0 || py > height) continue;
    const fs = Math.max(9, Math.min(28, t.h * scale));
    ctx.font = `${fs}px sans-serif`;
    ctx.fillText(t.text, px, py);
  }
  return canvas;
}

export function canvasToDataUrl(canvas: HTMLCanvasElement): string {
  return canvas.toDataURL("image/png");
}
