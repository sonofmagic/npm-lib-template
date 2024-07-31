import fs from 'fs'
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    commonjs({
      transformMixedEsModules: true
    }),
    {
      name: 'x',
      load: {
        handler(id) {
          if (id.endsWith('.wxss')) {
            return {
              code: `export default ${JSON.stringify(fs.readFileSync(id, 'utf8'))}`
            }
          }
        }
      }
    }
  ]
};