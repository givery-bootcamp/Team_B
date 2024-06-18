import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	server: {
		host: true,
		port: 3000,
	},
	resolve: {
		// ↓ 追記
		alias: {
			"~/": `${__dirname}/src/`,
		},
	},
});
