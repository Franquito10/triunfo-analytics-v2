import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Importamos los plugins de PostCSS directamente
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
});