import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createRequire} from "node:module";

// https://vitejs.dev/config/
// createRequire(import.meta.url);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".ts", ".vue"]
  }
})
