import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Yahan import add karein

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Yahan plugin add karein
  ],
})