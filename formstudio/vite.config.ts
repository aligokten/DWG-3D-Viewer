import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Bağımsız, tek başına dağıtılabilen statik sayfa.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
