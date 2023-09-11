import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { createRequire } from "node:module";

// https://vitejs.dev/config/
// createRequire(import.meta.url);

export default defineConfig({
  plugins: [vue()],
  define: {
    global: {},
  },
  resolve: {
    extensions: [".js", ".ts", ".vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      types: fileURLToPath(new URL("./types", import.meta.url)),
    },
  },
});
