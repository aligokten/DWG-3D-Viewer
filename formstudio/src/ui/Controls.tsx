import type { ReactNode } from "react";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  hint?: string;
  onChange: (v: number) => void;
}

export function Slider({ label, value, min, max, step = 1, unit, hint, onChange }: SliderProps) {
  return (
    <label className="block py-2">
      <span className="flex items-baseline justify-between text-[13px]">
        <span className="text-neutral-300">{label}</span>
        <span className="font-mono text-orange-400">
          {Number.isInteger(step) ? value.toFixed(0) : value.toFixed(2)}
          {unit ? ` ${unit}` : ""}
        </span>
      </span>
      <input
        type="range"
        className="mt-1.5 w-full accent-orange-500"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      {hint ? <span className="mt-0.5 block text-[11px] text-neutral-500">{hint}</span> : null}
    </label>
  );
}

export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-2 text-[13px] text-neutral-300">
      <span>{label}</span>
      <input
        type="checkbox"
        className="h-4 w-4 accent-orange-500"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-neutral-800 py-2 first:border-t-0">
      <h3 className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Button({
  children,
  onClick,
  variant = "ghost",
  title,
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: "ghost" | "primary";
  title?: string;
}) {
  const base =
    "rounded-lg px-3 py-2 text-[13px] font-medium transition-colors disabled:opacity-40";
  const styles =
    variant === "primary"
      ? "bg-orange-600 text-white hover:bg-orange-500"
      : "border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white";
  return (
    <button type="button" title={title} className={`${base} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}
