import type { Lattice, ModelParams, ObjectKind, ProfilePoint } from "./types";

export function emptyLattice(rows = 6, cols = 8): Lattice {
  return { enabled: false, rows, cols, values: new Array(rows * cols).fill(0), strength: 6 };
}

const P = (z: number, r: number): ProfilePoint => ({ z, r });

interface PresetDef {
  label: string;
  hint: string;
  params: Omit<ModelParams, "kind">;
}

const commonTexture = {
  waveCount: 0,
  waveAmount: 0,
  waveSpiral: 0,
  ribCount: 0,
  ribAmount: 0,
  noiseAmount: 0,
  noiseScale: 6,
};

export const PRESETS: Record<ObjectKind, PresetDef> = {
  vazo: {
    label: "Vazo",
    hint: "İnce belli, geniş gövdeli klasik vazo",
    params: {
      height: 180,
      radius: 55,
      wall: 1.6,
      base: 2.4,
      drainHole: 0,
      layers: 220,
      segments: 220,
      profile: [P(0, 0.55), P(0.12, 0.72), P(0.35, 1.0), P(0.62, 0.78), P(0.82, 0.52), P(1, 0.62)],
      cross: { polygonSides: 0, polygonRound: 1, lobes: 0, lobeAmount: 0.12, twist: 0 },
      texture: { ...commonTexture, waveCount: 9, waveAmount: 2.5, waveSpiral: 1 },
      lattice: emptyLattice(),
    },
  },
  saksi: {
    label: "Saksı",
    hint: "Konik gövde, su deliği ve kalın taban",
    params: {
      height: 120,
      radius: 60,
      wall: 2.2,
      base: 3.5,
      drainHole: 10,
      layers: 180,
      segments: 180,
      profile: [P(0, 0.62), P(0.08, 0.66), P(0.55, 0.86), P(0.92, 0.98), P(1, 1.0)],
      cross: { polygonSides: 6, polygonRound: 0.55, lobes: 0, lobeAmount: 0, twist: 25 },
      texture: { ...commonTexture, ribCount: 24, ribAmount: 0.9 },
      lattice: emptyLattice(),
    },
  },
  kase: {
    label: "Kase",
    hint: "Alçak, geniş ağızlı kase",
    params: {
      height: 70,
      radius: 85,
      wall: 1.8,
      base: 2.6,
      drainHole: 0,
      layers: 160,
      segments: 200,
      profile: [P(0, 0.42), P(0.15, 0.62), P(0.5, 0.86), P(0.8, 0.97), P(1, 1.0)],
      cross: { polygonSides: 0, polygonRound: 1, lobes: 10, lobeAmount: 0.06, twist: 0 },
      texture: { ...commonTexture, waveCount: 4, waveAmount: 1.2, waveSpiral: 2 },
      lattice: emptyLattice(),
    },
  },
  armatur: {
    label: "Aydınlatma armatürü",
    hint: "Alttan ve üstten açık, ışık geçiren abajur gövdesi",
    params: {
      height: 200,
      radius: 90,
      wall: 1.0,
      base: 0,
      drainHole: 0,
      layers: 240,
      segments: 240,
      profile: [P(0, 1.0), P(0.25, 0.86), P(0.5, 0.6), P(0.75, 0.42), P(1, 0.34)],
      cross: { polygonSides: 0, polygonRound: 1, lobes: 24, lobeAmount: 0.05, twist: 180 },
      texture: { ...commonTexture, waveCount: 16, waveAmount: 1.6, waveSpiral: 3 },
      lattice: emptyLattice(),
    },
  },
  kupa: {
    label: "Kupa / bardak",
    hint: "Silindirik, hafif konik bardak",
    params: {
      height: 105,
      radius: 40,
      wall: 1.4,
      base: 2.0,
      drainHole: 0,
      layers: 150,
      segments: 160,
      profile: [P(0, 0.78), P(0.3, 0.86), P(0.7, 0.94), P(1, 1.0)],
      cross: { polygonSides: 0, polygonRound: 1, lobes: 0, lobeAmount: 0, twist: 0 },
      texture: { ...commonTexture, ribCount: 40, ribAmount: 0.5 },
      lattice: emptyLattice(),
    },
  },
};

export function presetParams(kind: ObjectKind): ModelParams {
  const def = PRESETS[kind];
  return {
    kind,
    ...structuredClone(def.params),
  };
}
