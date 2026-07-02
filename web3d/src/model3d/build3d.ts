// 2B plandan 3B model üretimi ve görselleştirme (three.js).
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { DrawingData, Seg } from "./dxf";

export interface ModelOptions {
  wallHeight: number;
  wallThickness: number;
  windowSill?: number;
  windowHeight?: number;
}

const COLORS: Record<string, number> = {
  wall: 0xc9b79c,
  column: 0x9aa0a6,
  window: 0x8fd0e8,
  floor: 0xe8e2d6,
};

function segBox(seg: Seg, thickness: number, height: number, z0: number): THREE.Mesh | null {
  const dx = seg.x1 - seg.x0;
  const dy = seg.y1 - seg.y0;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return null;
  const geo = new THREE.BoxGeometry(len, thickness, height);
  const mat = new THREE.MeshStandardMaterial({ color: COLORS.wall, roughness: 0.85 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((seg.x0 + seg.x1) / 2, (seg.y0 + seg.y1) / 2, z0 + height / 2);
  mesh.rotation.z = Math.atan2(dy, dx);
  return mesh;
}

export interface BuiltModel {
  group: THREE.Group;
  center: THREE.Vector3;
  radius: number;
}

export function buildModel(data: DrawingData, opts: ModelOptions): BuiltModel {
  const group = new THREE.Group();
  const H = opts.wallHeight;
  const T = opts.wallThickness;
  const sill = opts.windowSill ?? 0.9;
  const winH = opts.windowHeight ?? 1.4;

  const add = (seg: Seg, thick: number, height: number, z0: number, color: number) => {
    const m = segBox(seg, thick, height, z0);
    if (m) {
      (m.material as THREE.MeshStandardMaterial).color.setHex(color);
      group.add(m);
    }
  };

  for (const s of data.wall) add(s, T, H, 0, COLORS.wall);
  for (const s of data.column) add(s, T * 2, H, 0, COLORS.column);
  for (const s of data.window) add(s, T, winH, sill, COLORS.window);

  // Model sınırları (plan dışı metinlerden etkilenmesin diye kutulardan hesapla)
  const box = new THREE.Box3();
  if (group.children.length > 0) {
    box.setFromObject(group);
  } else {
    box.set(
      new THREE.Vector3(data.bbox[0], data.bbox[1], 0),
      new THREE.Vector3(data.bbox[2], data.bbox[3], H),
    );
  }
  const min = box.min, max = box.max;

  // Zemin döşemesi
  const fw = Math.max(max.x - min.x, 0.1);
  const fd = Math.max(max.y - min.y, 0.1);
  const floorGeo = new THREE.BoxGeometry(fw, fd, 0.15);
  const floorMat = new THREE.MeshStandardMaterial({ color: COLORS.floor, roughness: 0.9 });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.position.set((min.x + max.x) / 2, (min.y + max.y) / 2, -0.075);
  group.add(floor);

  const center = new THREE.Vector3((min.x + max.x) / 2, (min.y + max.y) / 2, H / 2);
  const radius = Math.max(fw, fd, H) * 0.75 + 1;
  return { group, center, radius };
}

function makeScene(model: BuiltModel): THREE.Scene {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  scene.add(model.group);
  const amb = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(amb);
  const dir = new THREE.DirectionalLight(0xffffff, 0.9);
  dir.position.set(model.center.x + model.radius, model.center.y - model.radius, model.radius * 2);
  scene.add(dir);
  const dir2 = new THREE.DirectionalLight(0xffffff, 0.4);
  dir2.position.set(model.center.x - model.radius, model.center.y + model.radius, model.radius);
  scene.add(dir2);
  return scene;
}

// Z-yukarı bir mimari model için kamerayı ayarla
const VIEWS: { name: string; dir: [number, number, number] }[] = [
  { name: "İzometrik", dir: [1, -1, 0.8] },
  { name: "Kuş Bakışı", dir: [0.001, -0.2, 1] },
  { name: "Ön Cephe", dir: [0, -1, 0.05] },
  { name: "Yan Cephe", dir: [1, 0, 0.05] },
];

function placeCamera(cam: THREE.OrthographicCamera, model: BuiltModel, dir: [number, number, number]) {
  const d = new THREE.Vector3(...dir).normalize();
  const dist = model.radius * 3;
  cam.position.copy(model.center).addScaledVector(d, dist);
  cam.up.set(0, 0, 1);
  cam.lookAt(model.center);
  const r = model.radius * 1.15;
  cam.left = -r;
  cam.right = r;
  cam.top = r;
  cam.bottom = -r;
  cam.near = 0.01;
  cam.far = dist * 4;
  cam.updateProjectionMatrix();
}

// Farklı açılardan PNG dataURL'ler üretir (PDF için).
export function captureViews(
  data: DrawingData,
  opts: ModelOptions,
  size = 900,
): { name: string; dataUrl: string }[] {
  const model = buildModel(data, opts);
  const scene = makeScene(model);
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(size, Math.round(size * 0.72), false);
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
  const aspect = size / Math.round(size * 0.72);

  const out: { name: string; dataUrl: string }[] = [];
  for (const v of VIEWS) {
    placeCamera(cam, model, v.dir);
    // en-boy oranını uygula
    const r = model.radius * 1.15;
    cam.left = -r * aspect;
    cam.right = r * aspect;
    cam.top = r;
    cam.bottom = -r;
    cam.updateProjectionMatrix();
    renderer.render(scene, cam);
    out.push({ name: v.name, dataUrl: renderer.domElement.toDataURL("image/png") });
  }
  renderer.dispose();
  return out;
}

// Canlı, döndürülebilir önizleme. Temizleme fonksiyonu döndürür.
export function attachPreview(
  container: HTMLElement,
  data: DrawingData,
  opts: ModelOptions,
): () => void {
  const model = buildModel(data, opts);
  const scene = makeScene(model);
  const width = container.clientWidth || 640;
  const height = container.clientHeight || 420;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  container.appendChild(renderer.domElement);

  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 10000);
  cam.up.set(0, 0, 1);
  placeCamera(cam, model, [1, -1, 0.8]);
  const aspect = width / height;
  const r = model.radius * 1.15;
  cam.left = -r * aspect;
  cam.right = r * aspect;
  cam.top = r;
  cam.bottom = -r;
  cam.updateProjectionMatrix();

  const controls = new OrbitControls(cam, renderer.domElement);
  controls.target.copy(model.center);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.2;
  controls.update();

  let raf = 0;
  let disposed = false;
  const loop = () => {
    if (disposed) return;
    controls.update();
    renderer.render(scene, cam);
    raf = requestAnimationFrame(loop);
  };
  loop();

  const onResize = () => {
    const w = container.clientWidth || width;
    const h = container.clientHeight || height;
    renderer.setSize(w, h);
    const a = w / h;
    cam.left = -r * a;
    cam.right = r * a;
    cam.updateProjectionMatrix();
  };
  window.addEventListener("resize", onResize);

  return () => {
    disposed = true;
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    controls.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
  };
}

// Wavefront OBJ dışa aktarımı
export function exportObj(data: DrawingData, opts: ModelOptions): string {
  const model = buildModel(data, opts);
  const lines: string[] = ["# Mimari3D (web) tarafindan uretildi"];
  let vbase = 0;
  const tmp = new THREE.Vector3();
  model.group.updateMatrixWorld(true);
  model.group.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!(mesh.isMesh && mesh.geometry)) return;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const posAttr = geo.getAttribute("position");
    const idx = geo.getIndex();
    if (!posAttr) return;
    for (let i = 0; i < posAttr.count; i++) {
      tmp.fromBufferAttribute(posAttr, i).applyMatrix4(mesh.matrixWorld);
      lines.push(`v ${tmp.x.toFixed(4)} ${tmp.y.toFixed(4)} ${tmp.z.toFixed(4)}`);
    }
    if (idx) {
      for (let i = 0; i < idx.count; i += 3) {
        const a = idx.getX(i) + 1 + vbase;
        const b = idx.getX(i + 1) + 1 + vbase;
        const c = idx.getX(i + 2) + 1 + vbase;
        lines.push(`f ${a} ${b} ${c}`);
      }
    }
    vbase += posAttr.count;
  });
  return lines.join("\n");
}
