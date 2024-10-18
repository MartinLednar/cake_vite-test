import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
    plugins: [vue(), liveReload("../**/*.php")],
    build: {
        outDir: "../webroot/js/", // Output directory for built files
        rollupOptions: {
            input: "./index.html", // Specify the entry file for Vite
        },
    },
    root: "frontend", // Your frontend directory
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:8765", // Your CakePHP server
                changeOrigin: true, // Adjust if necessary
            },
        },
    },
});
