import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    host: true, // This tells Vite to listen on all available network interfaces (0.0.0.0)
    strictPort: true, // Vite will exit if the port is already in use
  }
})