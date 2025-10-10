import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/portfolio-website/' : '/'
  
  return {
    plugins: [react()],
    base: base,
  }
})