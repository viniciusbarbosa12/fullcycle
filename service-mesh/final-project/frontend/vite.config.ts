import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5101",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/mesh-lab/payments": {
        target: "http://localhost:5102",
        rewrite: () => "/",
      },
    },
  },
});
