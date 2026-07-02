// DXF okuma ve mimari eleman çıkarımı (tarayıcı tarafı).
// Masaüstü sürümündeki dwg_reader.py ile aynı mantığı izler.
import DxfParser, { type IDxf, type IEntity } from "dxf-parser";

export interface Seg {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface RawLine {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  layer: string;
  cat: Category | null;
}
export interface RawText {
  x: number;
  y: number;
  h: number;
  text: string;
}

export type Category = "wall" | "door" | "window" | "column";

export interface DrawingData {
  unitScale: number; // çizim birimi -> metre
  unitName: string;
  bboxRaw: [number, number, number, number]; // çizim birimi
  bbox: [number, number, number, number]; // metre
  wall: Seg[];
  door: Seg[];
  window: Seg[];
  column: Seg[];
  layers: string[];
  texts: string[];
  info: Record<string, string>;
  entityCounts: Record<string, number>;
  // 2B plan çizimi için ham geometri
  rawLines: RawLine[];
  rawTexts: RawText[];
}

const LAYER_KEYWORDS: Record<string, string[]> = {
  wall: ["DUVAR", "WALL", "AWALL", "MUR", "PERDE"],
  door: ["KAPI", "DOOR", "ADOOR"],
  window: ["PENCERE", "WINDOW", "GLAZ", "WIND", "CAM"],
  column: ["KOLON", "COLUMN", "COL"],
};
const DIM_TEXT_KEYWORDS = ["OLCU", "ÖLÇÜ", "DIM", "YAZI", "TEXT", "METIN", "ANNO"];

const INSUNITS_TO_M: Record<number, number> = {
  1: 0.0254,
  2: 0.3048,
  4: 0.001,
  5: 0.01,
  6: 1.0,
  8: 1e-6,
  9: 0.001,
  10: 0.9144,
};

const INFO_KEYS = [
  "ADA", "PARSEL", "PAFTA", "MALIK", "MALİK", "MIMAR", "MİMAR", "PROJE",
  "TARIH", "TARİH", "OLCEK", "ÖLÇEK", "SCALE", "PROJECT", "ARCHITECT",
  "OWNER", "ADRES", "ADDRESS", "KAT", "ALAN", "TAKS", "KAKS", "YAPI", "RUHSAT",
];

export function classifyLayer(layer: string): Category | null {
  const up = (layer || "").toUpperCase();
  for (const cat of Object.keys(LAYER_KEYWORDS) as Category[]) {
    if (LAYER_KEYWORDS[cat].some((k) => up.includes(k))) return cat;
  }
  return null;
}

function isAnnoLayer(layer: string): boolean {
  const up = (layer || "").toUpperCase();
  return DIM_TEXT_KEYWORDS.some((k) => up.includes(k));
}

function looksLikeInfo(key: string): boolean {
  const up = key.toUpperCase();
  return INFO_KEYS.some((k) => up.includes(k));
}

export function parseDxf(text: string): IDxf {
  const parser = new DxfParser();
  const doc = parser.parseSync(text);
  if (!doc) throw new Error("DXF ayrıştırılamadı.");
  return doc;
}

function entityLines(e: IEntity): [number, number, number, number][] {
  const out: [number, number, number, number][] = [];
  const anyE = e as unknown as { vertices?: { x: number; y: number }[]; shape?: boolean; closed?: boolean };
  const v = anyE.vertices;
  if (!v || v.length < 2) return out;
  if (e.type === "LINE") {
    out.push([v[0].x, v[0].y, v[1].x, v[1].y]);
    return out;
  }
  // LWPOLYLINE / POLYLINE
  const pts = v.map((p) => [p.x, p.y] as [number, number]);
  if ((anyE.shape || anyE.closed) && pts.length > 2) pts.push(pts[0]);
  for (let i = 0; i + 1 < pts.length; i++) {
    out.push([pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]]);
  }
  return out;
}

export function extract(text: string): DrawingData {
  const doc = parseDxf(text);
  const entities: IEntity[] = doc.entities || [];

  const layers = doc.tables?.layer?.layers
    ? Object.keys(doc.tables.layer.layers).sort()
    : [];

  // Ham bounding box
  let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
  const acc = (x: number, y: number) => {
    if (x < minx) minx = x;
    if (y < miny) miny = y;
    if (x > maxx) maxx = x;
    if (y > maxy) maxy = y;
  };

  const rawLines: RawLine[] = [];
  const rawTexts: RawText[] = [];
  const texts: string[] = [];
  const counts: Record<string, number> = {};

  const buckets: Record<Category, Seg[]> = { wall: [], door: [], window: [], column: [] };
  const info: Record<string, string> = {};

  // Önce birim ölçeğini bilmeden ham geometriyi topla, sonra ölçekle.
  for (const e of entities) {
    counts[e.type] = (counts[e.type] || 0) + 1;
    const layer = (e.layer as string) || "0";
    const cat = classifyLayer(layer);

    if (e.type === "LINE" || e.type === "LWPOLYLINE" || e.type === "POLYLINE") {
      for (const [x0, y0, x1, y1] of entityLines(e)) {
        acc(x0, y0);
        acc(x1, y1);
        rawLines.push({ x0, y0, x1, y1, layer, cat });
      }
    } else if (e.type === "TEXT" || e.type === "MTEXT") {
      const anyE = e as unknown as {
        text?: string;
        startPoint?: { x: number; y: number };
        position?: { x: number; y: number };
        textHeight?: number;
        height?: number;
      };
      const t = (anyE.text || "").trim();
      const pos = anyE.startPoint || anyE.position;
      if (t) {
        texts.push(t);
        if (pos) {
          rawTexts.push({ x: pos.x, y: pos.y, h: anyE.textHeight || anyE.height || 1, text: t });
          acc(pos.x, pos.y);
        }
        if (t.includes(":")) {
          const idx = t.indexOf(":");
          const key = t.slice(0, idx).trim();
          const val = t.slice(idx + 1).trim();
          if (key && val && key.length <= 30 && looksLikeInfo(key)) {
            if (!(key.toUpperCase() in info)) info[key.toUpperCase()] = val;
          }
        }
      }
    }
  }

  if (!isFinite(minx)) {
    minx = miny = 0;
    maxx = maxy = 1;
  }
  const bboxRaw: [number, number, number, number] = [minx, miny, maxx, maxy];

  // Birim tespiti
  const insunits = Number(doc.header?.["$INSUNITS"] ?? 0);
  let unitScale = INSUNITS_TO_M[insunits];
  let unitName: string;
  if (unitScale) {
    unitName = unitScale === 0.001 ? "mm" : unitScale === 0.01 ? "cm" : unitScale === 1 ? "m" : `x${unitScale}`;
  } else {
    const maxDim = Math.max(maxx - minx, maxy - miny);
    if (maxDim > 2000) {
      unitScale = 0.001;
      unitName = "mm (tahmin)";
    } else {
      unitScale = 1.0;
      unitName = "m (tahmin)";
    }
  }

  // Duvar katmanı yoksa: ölçü/yazı dışı tüm çizgileri duvar say (yedek plan)
  const hasWallLayer = rawLines.some((l) => l.cat === "wall");
  for (const l of rawLines) {
    let cat = l.cat;
    if (!hasWallLayer && cat === null && !isAnnoLayer(l.layer)) {
      cat = "wall";
      l.cat = "wall"; // 2B planda da duvar rengiyle çizilsin
    }
    if (cat && cat in buckets) {
      buckets[cat].push({
        x0: l.x0 * unitScale,
        y0: l.y0 * unitScale,
        x1: l.x1 * unitScale,
        y1: l.y1 * unitScale,
      });
    }
  }

  const sc = (v: number) => v * unitScale;
  return {
    unitScale,
    unitName,
    bboxRaw,
    bbox: [sc(minx), sc(miny), sc(maxx), sc(maxy)],
    wall: buckets.wall,
    door: buckets.door,
    window: buckets.window,
    column: buckets.column,
    layers,
    texts,
    info,
    entityCounts: counts,
    rawLines,
    rawTexts,
  };
}

export function segLength(s: Seg): number {
  return Math.hypot(s.x1 - s.x0, s.y1 - s.y0);
}
