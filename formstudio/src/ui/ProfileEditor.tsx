import { useCallback, useEffect, useRef } from "react";
import { sampleProfile } from "../core/profile";
import type { ProfilePoint } from "../core/types";

interface Props {
  points: ProfilePoint[];
  onChange: (pts: ProfilePoint[]) => void;
  height?: number;
}

const PAD = 26;
// Dokunmatik parmak ucu fare imlecinden kalın olduğu için isabet yarıçapı geniş tutulur.
const HIT = 22;

/** Dönel (revolve) profil eğrisi editörü: sol kenar dönme ekseni, yukarı = obje yüksekliği. */
export function ProfileEditor({ points, onChange, height = 320 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dragRef = useRef<number | null>(null);
  const pointsRef = useRef(points);
  pointsRef.current = points;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const toX = (r: number) => PAD + r * (w - PAD * 2);
    const toY = (z: number) => h - PAD - z * (h - PAD * 2);

    // ızgara
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const x = toX(i / 10);
      const y = toY(i / 10);
      ctx.beginPath(); ctx.moveTo(x, PAD); ctx.lineTo(x, h - PAD); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(PAD, y); ctx.lineTo(w - PAD, y); ctx.stroke();
    }

    // eksen
    ctx.strokeStyle = "rgba(249,115,22,0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(PAD, PAD); ctx.lineTo(PAD, h - PAD); ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = "10px ui-monospace, monospace";
    ctx.fillText("EKSEN", 4, h / 2);
    ctx.fillText("Z = MAX", w - 60, PAD - 8);
    ctx.fillText("Z = 0", w - 46, h - PAD + 14);

    // eğri
    const curve = sampleProfile(pointsRef.current, 300);
    ctx.strokeStyle = "#f97316";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i < curve.z.length; i++) {
      const x = toX(curve.r[i]);
      const y = toY(curve.z[i]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // dolgu (gövde kesiti izlenimi)
    ctx.lineTo(toX(0), toY(curve.z[curve.z.length - 1]));
    ctx.lineTo(toX(0), toY(curve.z[0]));
    ctx.closePath();
    ctx.fillStyle = "rgba(249,115,22,0.10)";
    ctx.fill();

    // kontrol noktaları
    for (const p of pointsRef.current) {
      const x = toX(p.r);
      const y = toY(p.z);
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#fb923c";
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }, []);

  useEffect(() => {
    draw();
    const ro = new ResizeObserver(draw);
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [draw, points]);

  const localPos = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const r = (ev.clientX - rect.left - PAD) / (w - PAD * 2);
    const z = (h - PAD - (ev.clientY - rect.top)) / (h - PAD * 2);
    return {
      r: Math.min(1, Math.max(0, r)),
      z: Math.min(1, Math.max(0, z)),
      px: ev.clientX - rect.left,
      py: ev.clientY - rect.top,
      w,
      h,
    };
  };

  const hitIndex = (px: number, py: number, w: number, h: number) => {
    const toX = (r: number) => PAD + r * (w - PAD * 2);
    const toY = (z: number) => h - PAD - z * (h - PAD * 2);
    let best = -1;
    let bestD = HIT;
    pointsRef.current.forEach((p, i) => {
      const d = Math.hypot(toX(p.r) - px, toY(p.z) - py);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  };

  const onPointerDown = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const { r, z, px, py, w, h } = localPos(ev);
    const idx = hitIndex(px, py, w, h);

    if (ev.button === 2 || ev.altKey) {
      if (idx >= 0 && pointsRef.current.length > 2) {
        onChange(pointsRef.current.filter((_, i) => i !== idx));
      }
      return;
    }

    ev.currentTarget.setPointerCapture(ev.pointerId);
    if (idx >= 0) {
      dragRef.current = idx;
      return;
    }
    const next = [...pointsRef.current, { r, z }].sort((a, b) => a.z - b.z);
    dragRef.current = next.findIndex((p) => p.r === r && p.z === z);
    onChange(next);
  };

  const onPointerMove = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const idx = dragRef.current;
    if (idx === null) return;
    const { r, z } = localPos(ev);
    const next = pointsRef.current.map((p, i) => (i === idx ? { r: Math.max(0.02, r), z } : p));
    onChange(next);
  };

  const onPointerUp = () => {
    const idx = dragRef.current;
    dragRef.current = null;
    if (idx === null) return;
    // Sürükleme bitince z sırasını normalleştir.
    onChange([...pointsRef.current].sort((a, b) => a.z - b.z));
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ height }}
        className="w-full cursor-crosshair touch-none rounded-lg border border-neutral-800 bg-neutral-950"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onContextMenu={(e) => e.preventDefault()}
      />
      <p className="mt-1.5 text-[11px] text-neutral-500">
        Nokta eklemek için boşluğa tıkla · taşımak için sürükle · silmek için Alt+tık (veya sağ tık)
      </p>
    </div>
  );
}
