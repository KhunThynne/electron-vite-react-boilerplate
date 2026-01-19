import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@components': resolve('src/renderer/src/shared/components')
      }
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true
      }),
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']]
        }
      }),
      tailwindcss()
    ]
  }
})
