import 'dotenv/config';
import { defineConfig } from "vite";
import { getMaps, getMapsScripts, LogLevel } from "wa-map-optimizer-vite";

const maps = getMaps();

const isLocal = process.env.NODE_ENV !== "production";

export default defineConfig({
    base: "./",
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                index: "./index.html",
                ...getMapsScripts(maps),
            },
        },
    },
    plugins: [],
    server: {
        host: "localhost",
        ...(isLocal ? {
            https: {
                key: "./localhost-key.pem",
                cert: "./localhost.pem",
            }
        } : {}),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        open: "/",
    },
});