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
    {
      name: 'x',
      load: {
        handler(id) {
          if (id.endsWith('.wxss')) {
            return {
              code: 'export default \'x\''
            }
          }
        }
      }
    }
  ]
};