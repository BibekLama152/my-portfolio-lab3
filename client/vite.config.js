// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    // if you need SPA-fallback on dev
    historyApiFallback: true,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },

  build: {
    rollupOptions: {
      // don’t attempt to bundle/resolve this platform-specific module
      external: ['@rollup/rollup-linux-x64-gnu'],
    },
  },
})
