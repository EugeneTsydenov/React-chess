import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

declare module 'vite' {
  interface UserConfigExport {
    port?: 52;
  }
}