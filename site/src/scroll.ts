import * as THREE from "three";

/** Bölüm başına bir kamera karesi: konum + bakış hedefi. */
interface CamKey {
  pos: THREE.Vector3;
  look: THREE.Vector3;
}

const KEYS: CamKey[] = [
  // 0 · Giriş — kuleye alttan bakış
  { pos: new THREE.Vector3(0, 7, 30), look: new THREE.Vector3(0, 10, 0) },
  // 1 · Projeler — maket sırasının önü
  { pos: new THREE.Vector3(0, 13, -10), look: new THREE.Vector3(0, 4, -48) },
  // 2 · Stüdyo — pavyona yandan yaklaşma
  { pos: new THREE.Vector3(34, 8, -71), look: new THREE.Vector3(58, 6, -95) },
  // 3 · Hizmetler — plana kuşbakışına iniş
  { pos: new THREE.Vector3(-12, 30, -110), look: new THREE.Vector3(-30, 0, -132) },
  // 4 · İletişim — ufuktaki siluete süzülüş
  { pos: new THREE.Vector3(0, 16, -158), look: new THREE.Vector3(0, 8, -220) },
];

export const SECTION_COUNT = KEYS.length;

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

/**
 * Kaydırma ilerlemesini kamera karelerine bağlar; fare paralaksı ve
 * kare-hızından bağımsız sönümleme (damping) ile yumuşatır.
 */
export class ScrollRig {
  private targetPos = KEYS[0].pos.clone();
  private targetLook = KEYS[0].look.clone();
  private currentLook = KEYS[0].look.clone();
  private mouse = new THREE.Vector2();
  private reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  activeSection = 0;

  constructor(private camera: THREE.PerspectiveCamera) {
    camera.position.copy(KEYS[0].pos);
    camera.lookAt(this.currentLook);
    addEventListener("pointermove", (e) => {
      this.mouse.set(
        (e.clientX / innerWidth) * 2 - 1,
        (e.clientY / innerHeight) * 2 - 1
      );
    });
  }

  /** [0..1] kaydırma ilerlemesi. */
  private progress(): number {
    const max = document.documentElement.scrollHeight - innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
  }

  update(dt: number) {
    const p = this.progress() * (KEYS.length - 1);
    const i = Math.min(KEYS.length - 2, Math.floor(p));
    const t = easeInOutCubic(p - i);
    this.activeSection = Math.round(p);

    this.targetPos.lerpVectors(KEYS[i].pos, KEYS[i + 1].pos, t);
    this.targetLook.lerpVectors(KEYS[i].look, KEYS[i + 1].look, t);

    // Fare paralaksı: küçük, sahneyi bozmayan bir kayma.
    if (!this.reduced) {
      this.targetPos.x += this.mouse.x * 0.9;
      this.targetPos.y += -this.mouse.y * 0.6;
    }

    // Üstel sönümleme — kare hızından bağımsız, "dropped frame" toleranslı.
    const k = this.reduced ? 1 : 1 - Math.exp(-4.2 * dt);
    this.camera.position.lerp(this.targetPos, k);
    this.currentLook.lerp(this.targetLook, k);
    this.camera.lookAt(this.currentLook);
  }
}

/** Nokta navigasyonu + bölüm görünürlük animasyonlarını bağlar. */
export function wireSections(rig: ScrollRig): void {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>(".panel")
  );
  const dots = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".dots button")
  );

  document.querySelectorAll<HTMLElement>("[data-goto]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const idx = Number(el.dataset.goto);
      const target = sections[idx];
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }
    },
    { threshold: 0.35 }
  );
  sections.forEach((s) => io.observe(s));

  // Aktif noktayı kaydırmayla senkron tut.
  let last = -1;
  const tick = () => {
    if (rig.activeSection !== last) {
      last = rig.activeSection;
      dots.forEach((d, i) => d.classList.toggle("active", i === last));
    }
    requestAnimationFrame(tick);
  };
  tick();
}
