import { useRef, useState } from "react";
import type { Lattice } from "../core/types";

interface Props {
  lattice: Lattice;
  onChange: (l: Lattice) => void;
}

function cellColor(v: number): string {
  if (v === 0) return "rgba(255,255,255,0.05)";
  const a = Math.min(1, Math.abs(v)) * 0.85;
  return v > 0 ? `rgba(249,115,22,${a})` : `rgba(59,130,246,${a})`;
}

/**
 * Kafes (lattice) editörü: satırlar yükseklik dilimleri, sütunlar çevresel açı.
 * Hücreye boyanan değer, o bölgede yüzeyi dışarı (+) ya da içeri (-) iter.
 */
export function LatticeEditor({ lattice, onChange }: Props) {
  const [brush, setBrush] = useState(0.6);
  const painting = useRef(false);

  const setValue = (row: number, col: number, v: number) => {
    const values = [...lattice.values];
    values[row * lattice.cols + col] = Math.max(-1, Math.min(1, v));
    onChange({ ...lattice, values });
  };

  const resize = (rows: number, cols: number) => {
    const values = new Array(rows * cols).fill(0);
    for (let r = 0; r < Math.min(rows, lattice.rows); r++) {
      for (let c = 0; c < Math.min(cols, lattice.cols); c++) {
        values[r * cols + c] = lattice.values[r * lattice.cols + c] ?? 0;
      }
    }
    onChange({ ...lattice, rows, cols, values });
  };

  const fill = (fn: (row: number, col: number) => number) => {
    const values = new Array(lattice.rows * lattice.cols);
    for (let r = 0; r < lattice.rows; r++) {
      for (let c = 0; c < lattice.cols; c++) values[r * lattice.cols + c] = fn(r, c);
    }
    onChange({ ...lattice, values });
  };

  // Görselde en üst satır objenin ağzı olacak şekilde ters sırada gösterilir.
  const rowsDesc = Array.from({ length: lattice.rows }, (_, i) => lattice.rows - 1 - i);

  return (
    <div
      onPointerUp={() => (painting.current = false)}
      onPointerLeave={() => (painting.current = false)}
    >
      <div
        className="grid gap-[3px] rounded-lg border border-neutral-800 bg-neutral-950 p-2"
        style={{ gridTemplateColumns: `repeat(${lattice.cols}, minmax(0,1fr))` }}
      >
        {rowsDesc.map((row) =>
          Array.from({ length: lattice.cols }, (_, col) => {
            const v = lattice.values[row * lattice.cols + col] ?? 0;
            return (
              <button
                key={`${row}-${col}`}
                type="button"
                title={`satır ${row + 1}, sütun ${col + 1}: ${v.toFixed(2)}`}
                className="aspect-square rounded-[3px] border border-white/5 transition-colors"
                style={{ background: cellColor(v) }}
                onPointerDown={(e) => {
                  painting.current = true;
                  setValue(row, col, e.altKey || e.button === 2 ? 0 : brush);
                }}
                onPointerEnter={() => painting.current && setValue(row, col, brush)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setValue(row, col, 0);
                }}
              />
            );
          })
        )}
      </div>

      <label className="mt-3 block text-[13px]">
        <span className="flex justify-between text-neutral-300">
          <span>Fırça değeri</span>
          <span className="font-mono text-orange-400">{brush.toFixed(2)}</span>
        </span>
        <input
          type="range"
          min={-1}
          max={1}
          step={0.05}
          value={brush}
          className="mt-1 w-full accent-orange-500"
          onChange={(e) => setBrush(parseFloat(e.target.value))}
        />
      </label>

      <div className="mt-2 grid grid-cols-2 gap-2 text-[12px]">
        <button
          type="button"
          className="rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500"
          onClick={() => fill(() => 0)}
        >
          Sıfırla
        </button>
        <button
          type="button"
          className="rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500"
          onClick={() => fill(() => Math.random() * 2 - 1)}
        >
          Rastgele
        </button>
        <button
          type="button"
          className="rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500"
          onClick={() =>
            fill((r, c) => Math.sin((c / lattice.cols) * Math.PI * 2) * Math.cos((r / lattice.rows) * Math.PI * 2))
          }
        >
          Dalga
        </button>
        <button
          type="button"
          className="rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500"
          onClick={() => fill((r, c) => ((r + c) % 2 === 0 ? 0.8 : -0.8))}
        >
          Dama
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-[12px] text-neutral-400">
        <label>
          Satır (yükseklik)
          <input
            type="number"
            min={2}
            max={16}
            value={lattice.rows}
            onChange={(e) => resize(Math.max(2, Math.min(16, +e.target.value || 2)), lattice.cols)}
            className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-neutral-200"
          />
        </label>
        <label>
          Sütun (açı)
          <input
            type="number"
            min={3}
            max={24}
            value={lattice.cols}
            onChange={(e) => resize(lattice.rows, Math.max(3, Math.min(24, +e.target.value || 3)))}
            className="mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-neutral-200"
          />
        </label>
      </div>
    </div>
  );
}
