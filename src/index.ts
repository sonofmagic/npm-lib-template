import { fileURLToPath } from 'node:url'
import { watch } from 'rollup'
import path from 'pathe'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const watcher = watch({

  // context: path.resolve(__dirname, '../demo'),
  input: {
    index: path.resolve(__dirname, '../demo/index.js'),
  },
  output: {
    dir: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    {
      name: 'xxx',
      generateBundle() {
        console.log(this.getWatchFiles())
      },
    },
  ],
  watch: {
    include: ['./demo/**/*.json'],
  },
})

watcher.on('event', (e) => {
  if (e.code === 'START') {
    console.log(e)
  }
  else if (e.code === 'BUNDLE_START') {
    console.log(e)
  }
  else if (e.code === 'BUNDLE_END') {
    console.log(e)
  }
  else if (e.code === 'END') {
    console.log(e)
  }
  else if (e.code === 'ERROR') {
    console.log(e)
  }
})

watcher.on('change', (id, _change) => {
  console.log(id)
})
