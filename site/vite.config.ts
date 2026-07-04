import { defineConfig } from "vite";

// Bağımsız statik sayfa; base "./" -> herhangi bir alt yol altında çalışır
// (GitHub Pages proje sitesi dahil).
export default defineConfig({
  base: "./",
});
