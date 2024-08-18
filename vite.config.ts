import eslint from "vite-plugin-eslint";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    define: {
      "process.env": JSON.stringify(env),
    },
    plugins: [react(), eslint()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
        "@public": fileURLToPath(new URL("./public", import.meta.url)),
      },
    },
  };
});
