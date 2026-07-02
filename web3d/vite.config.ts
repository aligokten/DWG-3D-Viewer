import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Bağımsız, tek başına dağıtılabilen statik sayfa.
// base "./" -> herhangi bir klasör/alt yol altında (veya doğrudan sunularak) çalışır.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
