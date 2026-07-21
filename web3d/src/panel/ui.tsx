// Panel için ortak, küçük arayüz bileşenleri.
import type { ReactNode } from "react";

export function Kart({
  baslik,
  aksiyon,
  children,
  className = "",
}: {
  baslik?: ReactNode;
  aksiyon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow ring-1 ring-black/5 dark:bg-zinc-800/70 ${className}`}
    >
      {(baslik || aksiyon) && (
        <div className="mb-3 flex items-center justify-between gap-2">
          {baslik && (
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {baslik}
            </h3>
          )}
          {aksiyon}
        </div>
      )}
      {children}
    </div>
  );
}

const inputBase =
  "w-full rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-800 outline-none focus:border-[#294b5a] focus:ring-1 focus:ring-[#294b5a] dark:border-zinc-600 dark:bg-zinc-900 dark:text-slate-100";

export function Metin({
  value,
  onChange,
  placeholder,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputBase} ${className}`}
    />
  );
}

export function Sayi({
  value,
  onChange,
  step = "any",
  min,
  className = "",
}: {
  value: number;
  onChange: (v: number) => void;
  step?: string | number;
  min?: number;
  className?: string;
}) {
  return (
    <input
      type="number"
      value={Number.isFinite(value) ? value : 0}
      step={step}
      min={min}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      className={`${inputBase} text-right tabular-nums ${className}`}
    />
  );
}

export function Secim<T extends string>({
  value,
  onChange,
  secenekler,
  className = "",
}: {
  value: T;
  onChange: (v: T) => void;
  secenekler: readonly { value: T; label: string }[] | readonly T[];
  className?: string;
}) {
  const norm = secenekler.map((s) =>
    typeof s === "string" ? { value: s, label: s } : s,
  );
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className={`${inputBase} ${className}`}
    >
      {norm.map((s) => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
}

export function Alan({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Dugme({
  onClick,
  children,
  varyant = "birincil",
  className = "",
  title,
  disabled,
}: {
  onClick?: () => void;
  children: ReactNode;
  varyant?: "birincil" | "ikincil" | "tehlike" | "hayalet";
  className?: string;
  title?: string;
  disabled?: boolean;
}) {
  const stiller: Record<string, string> = {
    birincil: "bg-[#294b5a] text-white hover:bg-[#1f3946]",
    ikincil:
      "border border-[#294b5a] text-[#294b5a] hover:bg-slate-50 dark:text-cyan-200 dark:hover:bg-zinc-700/50",
    tehlike: "text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40",
    hayalet:
      "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-zinc-700/50",
  };
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition disabled:opacity-40 ${stiller[varyant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Rozet({
  children,
  renk = "slate",
}: {
  children: ReactNode;
  renk?: string;
}) {
  const renkler: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700 dark:bg-zinc-700 dark:text-slate-200",
    yesil: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
    sari: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    mavi: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
    mor: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-200",
  };
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium ${renkler[renk] || renkler.slate}`}
    >
      {children}
    </span>
  );
}
