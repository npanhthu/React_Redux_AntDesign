import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
const port : any = process.env.PORT || 3000
export default defineConfig({
  plugins: [reactRefresh()],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },

  server: {
    port: port,
    proxy: {
      '/api/passport': {
        target: `http://0.0.0.0:${port}`,
        changeOrigin: true,
      },
    }
  },

  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 2800,
  },
})
