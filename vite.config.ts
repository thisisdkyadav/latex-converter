import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // Import the plugin
import { VitePWA } from 'vite-plugin-pwa' // Import the PWA plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add the plugin
    VitePWA({ // Add the PWA plugin configuration
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'], // Add your assets here
      manifest: {
        name: 'My Awesome App', // Replace with your app name
        short_name: 'MyApp', // Replace with your short app name
        description: 'My Awesome App description', // Replace with your app description
        theme_color: '#ffffff', // Replace with your theme color
        icons: [
          {
            src: 'pwa-192x192.png', // Path to your 192x192 icon
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Path to your 512x512 icon
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Path for maskable icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})
