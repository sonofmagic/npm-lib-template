import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ],
    globals: true,
    coverage: {
      enabled: true,
      reportsDirectory: 'coverage/vitest'
    },
    testTimeout: 60_000
  },
})