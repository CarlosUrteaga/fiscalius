import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fiscalius/', // Esto debe coincidir EXACTAMENTE con el nombre del repo en GitHub
})
