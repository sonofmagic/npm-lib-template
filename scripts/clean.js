const del = require('del')

// 同时兼容 `yarn clean` and `yarn clean xxx yyy zzz`
;(async () => {
  const dirs = process.argv.slice(2)
  if (dirs.length === 0) {
    dirs.push('dist')
  }
  const deletedDirectoryPaths = await del(dirs)
  console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'))
})()
