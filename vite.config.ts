import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/shared/styles', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/shared/assets', import.meta.url)),
    }
  },
  server: {
    host: true
  }
})
