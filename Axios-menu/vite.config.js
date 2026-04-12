import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Axios-menü', 
  build: {
    rollupOptions: {
      input:{
        react: 'axios.html'
      }
    }
  }
})