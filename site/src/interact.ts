import * as THREE from "three";
import { PROJECTS } from "./data";
import type { World } from "./scene/world";

/**
 * Raycaster tabanlı etkileşim: maket üzerine gelince altın vurgu +
 * isim etiketi, tıklayınca proje detay paneli.
 */
export function wireInteractions(
  camera: THREE.PerspectiveCamera,
  world: World
): void {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const tooltip = document.getElementById("tooltip")!;
  const modal = document.getElementById("modal") as HTMLElement;
  const modalKicker = document.getElementById("modal-kicker")!;
  const modalTitle = document.getElementById("modal-title")!;
  const modalBody = document.getElementById("modal-body")!;
  const modalMeta = document.getElementById("modal-meta")!;
  const closeBtn = document.getElementById("modal-close")!;

  let hovered = -1;

  function pick(clientX: number, clientY: number): number {
    pointer.set(
      (clientX / innerWidth) * 2 - 1,
      -(clientY / innerHeight) * 2 + 1
    );
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(world.pickables, false)[0];
    return hit ? (hit.object.userData.projectIndex as number) : -1;
  }

  addEventListener("pointermove", (e) => {
    const idx = pick(e.clientX, e.clientY);
    if (idx !== hovered) {
      hovered = idx;
      world.hoverTarget.forEach((_, i) => (world.hoverTarget[i] = i === idx ? 1 : 0));
      document.body.style.cursor = idx >= 0 ? "pointer" : "";
      tooltip.classList.toggle("show", idx >= 0);
      tooltip.setAttribute("aria-hidden", String(idx < 0));
      if (idx >= 0) tooltip.textContent = PROJECTS[idx].name;
    }
    if (hovered >= 0) {
      tooltip.style.left = `${e.clientX}px`;
      tooltip.style.top = `${e.clientY}px`;
    }
  });

  function openModal(idx: number): void {
    const p = PROJECTS[idx];
    modalKicker.textContent = p.kicker;
    modalTitle.textContent = p.name;
    modalBody.textContent = p.body;
    modalMeta.innerHTML = "";
    for (const [dt, dd] of [
      ["Konum", p.location],
      ["Yıl", p.year],
      ["Alan", p.area],
    ]) {
      const wrap = document.createElement("div");
      const dtEl = document.createElement("dt");
      dtEl.textContent = dt;
      const ddEl = document.createElement("dd");
      ddEl.textContent = dd;
      wrap.append(dtEl, ddEl);
      modalMeta.append(wrap);
    }
    modal.hidden = false;
  }

  const closeModal = () => {
    modal.hidden = true;
  };

  addEventListener("click", (e) => {
    if (!modal.hidden) return;
    // UI öğesine yapılan tıklamalar sahneye düşmesin.
    if ((e.target as HTMLElement).closest("a, button")) return;
    const idx = pick(e.clientX, e.clientY);
    if (idx >= 0) openModal(idx);
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
