import fsp from 'node:fs/promises'
import pkgJson from '../../package.json' with {type: 'json'}

const pkgName = pkgJson.name

function addBin(json, filename) {
  json.bin = {
    [pkgName]: filename,
  }
  if (Array.isArray(json.files)) {
    json.files.push('bin')
  }
  else {
    json.files = ['dist', 'bin']
  }
  return json
}

async function createBin(pkgName) {
  try {
    await fsp.access('bin')
  }
  catch {
    await fsp.mkdir('bin')
  }
  const filename = `bin/${pkgName}.js`
  await fsp.writeFile(
    filename,
    '#!/usr/bin/env node\nimport \'../dist/cli.js\'\n',
  )
  return filename
}

function createCli() {
  return fsp.writeFile('./src/cli.ts', '// get params from process.argv')
}

const filename = await createBin(pkgName)
await createCli()
const pkg = await addBin(pkgJson, filename)
await fsp.writeFile('./package.json', JSON.stringify(pkg, null, 2))
console.log('bin create successfully!')
