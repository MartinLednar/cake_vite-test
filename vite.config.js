import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
    plugins: [vue(), liveReload("./**/*.php")],
    root: "./", // Your frontend directory
    appType: "mpa",
    build: {
        outDir: "webroot/", // Output directory for built files
        rollupOptions: {
            input: {
                customButton: "./frontend/components/button.vue",
                customLink: "./frontend/components/link.vue",
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "/resources/css/global.scss";`,
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
});
