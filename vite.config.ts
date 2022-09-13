import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },

  server: {
    port: 3000,
    proxy: {
      '/api/passport': {
        target: 'http://0.0.0.0:3000',
        changeOrigin: true,
      },
    }
  },

  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 2800,
  },
})
