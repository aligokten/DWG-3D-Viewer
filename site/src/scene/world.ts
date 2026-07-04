import * as THREE from "three";
import {
  GOLD,
  GOLD_BRIGHT,
  goldDust,
  goldLine,
  liquidGold,
  matteCharcoal,
} from "./materials";
import { PROJECTS } from "../data";

export interface World {
  group: THREE.Group;
  /** Raycast hedefleri; userData.projectIndex ile eşleşir. */
  pickables: THREE.Mesh[];
  /** interact.ts hover durumunu yazar, update() yumuşatarak uygular. */
  hoverTarget: number[];
  update(dt: number, t: number): void;
}

const charcoal = matteCharcoal();

/** Mat kütle + parlayan altın kenar çizgisi. Geometriler paylaşılır. */
function massing(
  geo: THREE.BufferGeometry,
  edgeMat: THREE.LineBasicMaterial
): THREE.Group {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, charcoal));
  g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMat));
  return g;
}

/** Burularak yükselen kule: her kat hafifçe döner ve daralır. */
function twistedTower(
  floors: number,
  base: number,
  floorH: number,
  twist: number,
  edgeMat: THREE.LineBasicMaterial
): THREE.Group {
  const tower = new THREE.Group();
  const geo = new THREE.BoxGeometry(base, floorH * 0.92, base);
  const edges = new THREE.EdgesGeometry(geo);
  for (let i = 0; i < floors; i++) {
    const s = 1 - (i / floors) * 0.35;
    const floor = new THREE.Group();
    floor.add(new THREE.Mesh(geo, charcoal));
    floor.add(new THREE.LineSegments(edges, edgeMat));
    floor.position.y = (i + 0.5) * floorH;
    floor.rotation.y = i * twist;
    floor.scale.set(s, 1, s);
    tower.add(floor);
  }
  return tower;
}

/** Kademeli teraslı konut blokları (Avlu Konutları). */
function terracedBlocks(edgeMat: THREE.LineBasicMaterial): THREE.Group {
  const g = new THREE.Group();
  const steps = [
    { w: 9, h: 2.2, d: 4.5, x: 0, z: 0 },
    { w: 7, h: 2.2, d: 4.5, x: -1, z: 0 },
    { w: 5, h: 2.2, d: 4.5, x: -2, z: 0 },
  ];
  for (const [row, zOff] of [
    [0, -3.2],
    [1, 3.2],
  ] as const) {
    steps.forEach((s, i) => {
      const geo = new THREE.BoxGeometry(s.w, s.h, s.d);
      const m = massing(geo, edgeMat);
      m.position.set(s.x + row * 0.6, s.h / 2 + i * s.h, s.z + zOff);
      g.add(m);
    });
  }
  return g;
}

/** Jeodezik altın kafes pavyon (Cam Pavyon / Stüdyo). */
function latticeDome(
  radius: number,
  detail: number,
  edgeMat: THREE.LineBasicMaterial
): THREE.Group {
  const g = new THREE.Group();
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMat));
  return g;
}

/** Basit mimari kat planı çizgileri (hizmetler bölümü fonu). */
function floorPlanLines(): THREE.BufferGeometry {
  // (x1,z1,x2,z2) duvar parçaları — kapı boşluklu şematik plan.
  const w: number[] = [
    // dış kabuk
    -15, -10, 15, -10, 15, -10, 15, 10, 15, 10, -6, 10, -9, 10, -15, 10, -15,
    10, -15, -10,
    // iç duvarlar
    -15, 2, -4, 2, -1, 2, 6, 2, 6, 2, 6, 10, -4, -10, -4, -4, -4, -1, -4, 2, 6,
    -10, 6, -4, 9, -10, 9, -2, 9, 1, 9, 2,
  ];
  const pts: number[] = [];
  for (let i = 0; i < w.length; i += 4) {
    pts.push(w[i], 0, w[i + 1], w[i + 2], 0, w[i + 3]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
  return geo;
}

/** Uzak kent silueti (iletişim bölümü ufku). */
function skyline(edgeMat: THREE.LineBasicMaterial): THREE.Group {
  const g = new THREE.Group();
  const rnd = (seed: number) => {
    // Deterministik: her yüklemede aynı siluet.
    const x = Math.sin(seed * 127.1) * 43758.5453;
    return x - Math.floor(x);
  };
  for (let i = 0; i < 26; i++) {
    const wdt = 4 + rnd(i) * 6;
    const hgt = 6 + rnd(i + 40) * 26;
    const geo = new THREE.BoxGeometry(wdt, hgt, wdt);
    const m = massing(geo, edgeMat);
    m.position.set((i - 13) * 7 + rnd(i + 80) * 4, hgt / 2, -rnd(i + 120) * 30);
    g.add(m);
  }
  return g;
}

function goldParticles(count: number): THREE.Points {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 220;
    pos[i * 3 + 1] = Math.random() * 45;
    pos[i * 3 + 2] = -Math.random() * 280 + 30;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  return new THREE.Points(geo, goldDust());
}

export function buildWorld(scene: THREE.Scene): World {
  const group = new THREE.Group();
  scene.add(group);

  // ---- Işıklar: loş, sıcak; karanlık boşluğu ezmeyen ----
  group.add(new THREE.AmbientLight(0x3c3c44, 1.1));
  const key = new THREE.DirectionalLight(0xffe2b0, 0.9);
  key.position.set(18, 40, 20);
  group.add(key);
  const heroGlow = new THREE.PointLight(GOLD.getHex(), 60, 60, 1.8);
  heroGlow.position.set(6, 10, 8);
  group.add(heroGlow);

  // ---- Zemin ızgarası: boşlukta yüzen çizim altlığı ----
  const grid = new THREE.GridHelper(460, 92, GOLD.getHex(), 0x1b1b20);
  const gm = grid.material as THREE.LineBasicMaterial;
  gm.transparent = true;
  gm.opacity = 0.16;
  grid.position.z = -110;
  group.add(grid);

  // ---- Bölüm 0 · GİRİŞ: burulan kule + sıvı altın çekirdek ----
  const heroEdges = goldLine(0.8);
  const hero = twistedTower(26, 7, 1.1, 0.045, heroEdges);
  group.add(hero);

  const goldCore = liquidGold();
  const core = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.4, 26 * 1.1, 24, 1),
    goldCore
  );
  core.position.y = (26 * 1.1) / 2;
  group.add(core);

  // ---- Bölüm 1 · PROJELER: üç maket, kaideler ve seçim kutuları ----
  const pickables: THREE.Mesh[] = [];
  const hoverTarget = [0, 0, 0];
  const projectEdgeMats = PROJECTS.map(() => goldLine(0.55));
  const plinthGeo = new THREE.BoxGeometry(12, 0.6, 12);
  const projectPos = [
    new THREE.Vector3(-16, 0, -46),
    new THREE.Vector3(0, 0, -48),
    new THREE.Vector3(16, 0, -46),
  ];

  const models = [
    twistedTower(12, 4, 0.85, 0.08, projectEdgeMats[0]),
    terracedBlocks(projectEdgeMats[1]),
    (() => {
      const dome = latticeDome(3.6, 1, projectEdgeMats[2]);
      dome.position.y = 2.2;
      return dome;
    })(),
  ];

  models.forEach((model, i) => {
    const stand = new THREE.Group();
    stand.position.copy(projectPos[i]);
    const plinth = massing(plinthGeo, projectEdgeMats[i]);
    plinth.position.y = 0.3;
    stand.add(plinth, model);
    model.position.y += 0.6;

    // Görünmez seçim hacmi: raycast hedefi.
    const pick = new THREE.Mesh(
      new THREE.BoxGeometry(12, 15, 12),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    pick.position.set(projectPos[i].x, 7.5, projectPos[i].z);
    pick.userData.projectIndex = i;
    pickables.push(pick);
    group.add(stand, pick);
  });

  // ---- Bölüm 2 · STÜDYO: dönen kafes pavyon + sıvı altın küre ----
  const studio = new THREE.Group();
  studio.position.set(58, 0, -95);
  const dome = latticeDome(6.5, 1, goldLine(0.85));
  dome.position.y = 6.5;
  const orb = new THREE.Mesh(new THREE.SphereGeometry(2.4, 48, 32), goldCore);
  orb.position.y = 6.5;
  const plinth = massing(new THREE.CylinderGeometry(8, 8.6, 1, 40), goldLine(0.5));
  plinth.position.y = 0.5;
  studio.add(dome, orb, plinth);
  group.add(studio);

  // ---- Bölüm 3 · HİZMETLER: plandan yükselen çizim katmanları ----
  const plan = new THREE.Group();
  plan.position.set(-30, 0.05, -132);
  const planGeo = floorPlanLines();
  [0, 1.6, 3.2].forEach((y, i) => {
    const layer = new THREE.LineSegments(planGeo, goldLine(0.75 - i * 0.25));
    layer.position.y = y;
    plan.add(layer);
  });
  group.add(plan);

  // ---- Bölüm 4 · İLETİŞİM: uzak kent silueti ----
  const city = skyline(goldLine(0.3));
  city.position.set(0, 0, -225);
  group.add(city);

  // ---- Atmosfer: altın toz zerreleri ----
  const dust = goldParticles(900);
  group.add(dust);

  // ---- Animasyon durumu ----
  const hoverNow = [0, 0, 0];
  const baseGold = GOLD.clone();
  const brightGold = GOLD_BRIGHT.clone();

  return {
    group,
    pickables,
    hoverTarget,
    update(dt: number, t: number) {
      goldCore.uniforms.uTime.value = t;
      dome.rotation.y = t * 0.12;
      orb.rotation.y = -t * 0.2;
      dust.rotation.y = t * 0.008;
      heroGlow.intensity = 55 + Math.sin(t * 1.4) * 12;

      // Hover vurgusu: kenar çizgileri parlaklığa yumuşak geçiş yapar.
      for (let i = 0; i < projectEdgeMats.length; i++) {
        hoverNow[i] += (hoverTarget[i] - hoverNow[i]) * Math.min(1, dt * 8);
        const m = projectEdgeMats[i];
        m.opacity = 0.55 + hoverNow[i] * 0.45;
        m.color.copy(baseGold).lerp(brightGold, hoverNow[i]);
      }
    },
  };
}
