import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend-product-3.onrender.com", // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  }
}) 