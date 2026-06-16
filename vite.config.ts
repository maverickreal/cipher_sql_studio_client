import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react(), tailwindcss()],
		server: {
			port: parseInt(env.PORT, 10) || 3000,
			proxy: {
				"/api": {
					target: env.VITE_API_BASE_URL,
					changeOrigin: true,
					secure: mode !== "development",
				},
			},
		},
		build: {
			outDir: "dist",
			sourcemap: true,
		},
	};
});
