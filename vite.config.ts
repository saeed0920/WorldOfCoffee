import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
