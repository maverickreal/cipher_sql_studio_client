import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const PORT = parseInt(env.PORT || env.CLIENT_PORT || "3000", 10);
  const API_TARGET =
    env.VITE_API_BASE_URL || env.API_GATEWAY_URL || "http://localhost:8000";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: PORT,
      proxy: {
        "/api": {
          target: API_TARGET,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
