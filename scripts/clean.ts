import process from 'node:process'
import { deleteAsync } from 'del'

// 同时兼容 `pnpm clean` and `pnpm clean xxx yyy zzz`
const dirs = process.argv.slice(2)
if (dirs.length === 0) {
  dirs.push('dist')
}
const deletedDirectoryPaths = await deleteAsync(dirs)
console.log('Deleted directories:')
console.log(deletedDirectoryPaths.join('\n'))
