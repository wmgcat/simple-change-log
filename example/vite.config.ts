import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss({
			optimize: {
				minify: true
			}
		})
	],
	root: "./example",
	build: {
		outDir: "./build/"
	},
	server: {
		port: 8080,
		host: "0.0.0.0"
	}
});
