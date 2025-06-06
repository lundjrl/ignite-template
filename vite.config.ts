import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'composables': path.resolve(__dirname, './src/composables'),
      'design': path.resolve(__dirname, './src/design'),
      'helpers': path.resolve(__dirname, './src/helpers'),
      'pages': path.resolve(__dirname, './src/pages'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'routing': path.resolve(__dirname, './src/routing'),
      'services': path.resolve(__dirname, './src/services'),
      'stores': path.resolve(__dirname, './src/stores'),
      'utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 8081,
  },
  plugins: [vue(), tailwindcss()],
})
