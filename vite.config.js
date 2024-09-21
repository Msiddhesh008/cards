import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000, // You can use any port
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
  "theme_color": "#000000",
  "background_color": "#7c0000",
  "orientation": "portrait",
  "display": "standalone",
  "dir": "auto",
  "lang": "en-US",
  "name": "Erocard",
  "short_name": "EC",
  "start_url": "https://msiddhesh008.github.io/cards/",
  "scope": "https://msiddhesh008.github.io/cards/"
}
,
    }),
  ],
  base: "/cards/",
})
