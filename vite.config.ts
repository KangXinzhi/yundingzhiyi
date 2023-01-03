import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import linaria from '@linaria/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria(),  
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    }
  },
})
