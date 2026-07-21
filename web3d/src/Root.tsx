// Üst kabuk: DXF 3B görüntüleyici ile Çelik İmalat Paneli arasında geçiş.
import { useEffect, useState } from "react";
import App from "./App";
import Panel from "./panel/Panel";

type Uygulama = "viewer" | "panel";
const ANAHTAR = "mimari3d/aktif-uygulama";

export default function Root() {
  const [uygulama, setUygulama] = useState<Uygulama>(() => {
    return (localStorage.getItem(ANAHTAR) as Uygulama) || "viewer";
  });

  useEffect(() => {
    localStorage.setItem(ANAHTAR, uygulama);
  }, [uygulama]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-900 dark:to-zinc-950">
      {/* Üst navigasyon */}
      <nav className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur dark:border-white/5 dark:bg-zinc-900/90">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5">
          <span className="mr-2 font-extrabold tracking-tight text-[#294b5a] dark:text-cyan-300">
            Mimari3D
          </span>
          <NavDugme
            aktif={uygulama === "viewer"}
            onClick={() => setUygulama("viewer")}
          >
            🧊 3B Görüntüleyici
          </NavDugme>
          <NavDugme
            aktif={uygulama === "panel"}
            onClick={() => setUygulama("panel")}
          >
            🏗️ Çelik İmalat Paneli
          </NavDugme>
        </div>
      </nav>

      {uygulama === "viewer" ? (
        <App />
      ) : (
        <div className="px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <header className="mb-6 rounded-2xl bg-[#294b5a] px-6 py-5 text-white shadow-lg">
              <h1 className="text-2xl font-extrabold tracking-tight">
                Çelik Yapı İmalat Yönetim Paneli
              </h1>
              <p className="mt-1 text-sm text-cyan-100">
                Malzeme listesi (TSE standartları), fire ve maliyet hesabı,
                işçilik & üretim takibi, sipariş/satın alma ve şantiye
                dökümanları — tek panelde.
              </p>
            </header>
            <Panel />
            <footer className="mt-8 text-center text-xs text-slate-400">
              Tüm veriler yalnızca tarayıcınızda (localStorage) saklanır; sunucuya
              gönderilmez. Düzenli olarak "Yedekle" ile dışa aktarın.
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

function NavDugme({
  aktif,
  onClick,
  children,
}: {
  aktif: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
        aktif
          ? "bg-[#294b5a] text-white shadow"
          : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800"
      }`}
    >
      {children}
    </button>
  );
}
