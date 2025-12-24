import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['vite.svg'],
      manifest: {
        short_name: "Brainvita",
        name: "Brainvita Master 3D",
        description: "A classic single-player board game involving movement of marbles. Jump marbles to remove them and try to leave just one!",
        icons: [
          {
            src: "/vite.svg",
            type: "image/svg+xml",
            sizes: "512x512",
            purpose: "any maskable"
          },
          {
            src: "/vite.svg",
            type: "image/svg+xml",
            sizes: "192x192",
            purpose: "any maskable"
          }
        ],
        theme_color: "#020617",
        background_color: "#020617",
        display: "standalone",
        orientation: "portrait"
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.tailwindcss\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'tailwind-cdn',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets'
            }
          }
        ]
      }
    })
  ]
});