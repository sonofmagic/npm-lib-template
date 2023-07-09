import path from 'node:path'
import { defineConfig } from 'vitest/config'

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
    testTimeout: 60_000,
    setupFiles: ['./vitest.setup.ts']
  }
})
