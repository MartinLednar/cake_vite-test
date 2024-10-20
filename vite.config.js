/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
    plugins: [vue(), liveReload("./**/*.php")],
    root: "./",
    appType: "mpa",
    build: {
        // cssCodeSplit: false, MAKES BUNDLED CSS AS SINGLE FILE
        manifest: true,
        outDir: "webroot", // Output directory for built files
        emptyOutDir: false,
        rollupOptions: {
            input: {
                globalCss: "resources/css/global.scss",
                customButton: "resources/js/button.js",
                customLink: "resources/js/link.js",
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                importers: [
                    // ...
                ],
            },
        },
    },

    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:8765", // Your CakePHP server
                changeOrigin: true, // Adjust if necessary
            },
        },
    },

    resolve: {
        alias: {
            "@styles": "./resources/css/",
        },
    },
});
