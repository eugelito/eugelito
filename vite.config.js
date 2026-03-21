import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  /** Custom domain (eugelito.com). For GitHub Pages project URL only, use base: "/eugelito/". */
  base: "/",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
