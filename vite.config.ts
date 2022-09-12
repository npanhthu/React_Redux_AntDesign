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
    port: 80,
    proxy: {
      '/api/passport': {
        target: 'http://0.0.0.0:80',
        changeOrigin: true,
      },
    }
  },

  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 2800,
  },
})
