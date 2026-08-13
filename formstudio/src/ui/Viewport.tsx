import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { MeshData } from "../core/types";

export interface ViewOptions {
  colorA: string;
  colorB: string;
  layerHeight: number;
  showLayers: boolean;
  wireframe: boolean;
  autoRotate: boolean;
  showGrid: boolean;
}

interface Props {
  mesh: MeshData;
  view: ViewOptions;
  /** Değeri değiştiğinde kamera modele göre yeniden konumlanır. */
  fitToken: number;
  /** PNG anlık görüntüsü almak için doldurulan referans. */
  snapshotRef?: React.MutableRefObject<(() => void) | null>;
}

export function Viewport({ mesh, view, fitToken, snapshotRef }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    mesh: THREE.Mesh;
    material: THREE.MeshStandardMaterial;
    grid: THREE.GridHelper;
    uniforms: { uColorA: { value: THREE.Color }; uColorB: { value: THREE.Color }; uBand: { value: number }; uHeight: { value: number }; uLayers: { value: number } };
  } | null>(null);

  // --- Sahneyi bir kez kur ---
  useEffect(() => {
    const host = hostRef.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x0a0a0a, 1);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 600, 1800);

    const camera = new THREE.PerspectiveCamera(38, host.clientWidth / host.clientHeight, 1, 5000);
    camera.up.set(0, 0, 1);
    camera.position.set(320, -320, 220);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    scene.add(new THREE.HemisphereLight(0xffffff, 0x1b1b1b, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(300, -240, 420);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffa060, 1.1);
    rim.position.set(-320, 260, 120);
    scene.add(rim);

    const grid = new THREE.GridHelper(600, 30, 0x3a3a3a, 0x1f1f1f);
    grid.rotation.x = Math.PI / 2;
    scene.add(grid);

    const uniforms = {
      uColorA: { value: new THREE.Color("#f97316") },
      uColorB: { value: new THREE.Color("#3b82f6") },
      uBand: { value: 0.28 },
      uHeight: { value: 100 },
      uLayers: { value: 1 },
    };

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.55,
      metalness: 0.05,
      side: THREE.DoubleSide,
      flatShading: false,
    });
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uColorA = uniforms.uColorA;
      shader.uniforms.uColorB = uniforms.uColorB;
      shader.uniforms.uBand = uniforms.uBand;
      shader.uniforms.uHeight = uniforms.uHeight;
      shader.uniforms.uLayers = uniforms.uLayers;
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vWorld;")
        .replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\nvWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;"
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vWorld;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uBand;
uniform float uHeight;
uniform float uLayers;`
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
{
  float t = clamp(vWorld.z / max(uHeight, 0.001), 0.0, 1.0);
  vec3 grad = mix(uColorA, uColorB, t);
  float band = 1.0;
  if (uLayers > 0.5) {
    float f = fract(vWorld.z / max(uBand, 0.01));
    band = 0.80 + 0.20 * smoothstep(0.0, 0.55, abs(f - 0.5) * 2.0);
  }
  diffuseColor.rgb *= grad * band;
}`
        );
    };

    const meshObj = new THREE.Mesh(new THREE.BufferGeometry(), material);
    scene.add(meshObj);

    stateRef.current = { renderer, scene, camera, controls, mesh: meshObj, material, grid, uniforms };

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      controls.update();
      renderer.render(scene, camera);
    };
    loop();

    const ro = new ResizeObserver(() => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      meshObj.geometry.dispose();
      material.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
      stateRef.current = null;
    };
  }, []);

  // --- Geometriyi güncelle ---
  useEffect(() => {
    const st = stateRef.current;
    if (!st) return;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(mesh.positions.slice(), 3));
    geo.setIndex(new THREE.BufferAttribute(mesh.indices.slice(), 1));
    geo.computeVertexNormals();
    st.mesh.geometry.dispose();
    st.mesh.geometry = geo;
    st.uniforms.uHeight.value = Math.max(1, mesh.size[2]);
  }, [mesh]);

  // --- Görünüm ayarları ---
  useEffect(() => {
    const st = stateRef.current;
    if (!st) return;
    st.uniforms.uColorA.value.set(view.colorA);
    st.uniforms.uColorB.value.set(view.colorB);
    st.uniforms.uBand.value = Math.max(0.05, view.layerHeight);
    st.uniforms.uLayers.value = view.showLayers ? 1 : 0;
    st.material.wireframe = view.wireframe;
    st.controls.autoRotate = view.autoRotate;
    st.controls.autoRotateSpeed = 1.6;
    st.grid.visible = view.showGrid;
  }, [view]);

  // --- Kamerayı modele sığdır ---
  useEffect(() => {
    const st = stateRef.current;
    if (!st) return;
    const [w, , h] = mesh.size;
    const radius = Math.max(w, h) * 0.75 + 30;
    const dist = radius / Math.tan((st.camera.fov * Math.PI) / 360) + radius * 0.4;
    st.controls.target.set(0, 0, h / 2);
    st.camera.position.set(dist * 0.72, -dist * 0.72, h * 0.75 + dist * 0.28);
    st.camera.updateProjectionMatrix();
    st.controls.update();
  }, [fitToken]);

  // --- PNG anlık görüntü ---
  useEffect(() => {
    if (!snapshotRef) return;
    snapshotRef.current = () => {
      const st = stateRef.current;
      if (!st) return;
      st.renderer.render(st.scene, st.camera);
      const url = st.renderer.domElement.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "formstudio.png";
      a.click();
    };
    return () => {
      snapshotRef.current = null;
    };
  }, [snapshotRef]);

  return <div ref={hostRef} className="h-full w-full" />;
}
