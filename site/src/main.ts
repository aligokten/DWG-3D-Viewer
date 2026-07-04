import * as THREE from "three";
import "./style.css";
import { buildWorld } from "./scene/world";
import { ScrollRig, wireSections } from "./scroll";
import { wireInteractions } from "./interact";
import { VOID_COLOR } from "./scene/materials";

const canvas = document.getElementById("scene") as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: "high-performance",
});
// DPR sınırı: retina ekranlarda 4K+ tampon boyutunu ve GPU doku
// belleğini şişirmemek için 2 ile kırpılır.
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(VOID_COLOR, 1);

const scene = new THREE.Scene();
// Üstel sis: geometri karanlık boşluğun içinde erir; uzak nesneler
// kendiliğinden LOD gibi kaybolur.
scene.fog = new THREE.FogExp2(VOID_COLOR.getHex(), 0.011);

const camera = new THREE.PerspectiveCamera(
  55,
  innerWidth / innerHeight,
  0.1,
  420
);

const world = buildWorld(scene);
const rig = new ScrollRig(camera);
wireSections(rig);
wireInteractions(camera, world);

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
});

const clock = new THREE.Clock();

function frame(): void {
  // Sekme arka plana alınıp dönünce dev bir dt gelmesin.
  const dt = Math.min(clock.getDelta(), 0.1);
  const t = clock.elapsedTime;
  rig.update(dt);
  world.update(dt, t);
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(frame);

// Sekme görünmezken render döngüsünü tamamen durdur: GPU ve pil dostu.
document.addEventListener("visibilitychange", () => {
  renderer.setAnimationLoop(document.hidden ? null : frame);
});
