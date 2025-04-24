import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // Vite plugin for Tailwind CSS integration
import { VitePWA } from "vite-plugin-pwa" // Vite plugin for Progressive Web App features

// Vite configuration: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Enables React support
    tailwindcss(), // Integrates Tailwind CSS
    VitePWA({
      // Configures the Progressive Web App settings
      registerType: "autoUpdate", // Strategy for service worker updates
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"], // Assets to be precached
      manifest: {
        // Web App Manifest configuration
        name: "LaTeX Equation Converter", // Full application name
        short_name: "LaTeXConv", // Short name for homescreen icons
        description: "Convert LaTeX code to rendered equations.", // App description
        theme_color: "#ffffff", // Theme color for the app UI
        icons: [
          // Icons for different resolutions and purposes
          {
            src: "logo.png", // Path to 192x192 icon
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo.png", // Path to 512x512 icon
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo.png", // Path for maskable icon (adapts to different icon shapes)
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
})
