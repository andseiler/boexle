import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), VueI18nPlugin({
    // only include your actual locales / SFCs that contain <i18n> blocks:
    include: path.resolve(__dirname, './src/translations/**'),
    // compile to functions at build time, so no parser runs in the browser
    runtimeOnly: true
  })],
  base: ""
})
