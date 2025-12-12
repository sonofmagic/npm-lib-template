import type { PackageJson } from '../types.ts'
import { access, mkdir, writeFile } from 'node:fs/promises'
import pkgJson from '../../package.json' with { type: 'json' }

const pkgName = pkgJson.name

function addBin(json: PackageJson, filename: string): PackageJson {
  const next: PackageJson = {
    ...json,
    bin: {
      ...(json.bin ?? {}),
      [pkgName]: filename,
    },
  }
  next.files = Array.isArray(json.files) ? [...json.files, 'bin'] : ['dist', 'bin']
  return next
}

async function ensureBinDirectory() {
  try {
    await access('bin')
  }
  catch {
    await mkdir('bin')
  }
}

async function createBin(name: string) {
  await ensureBinDirectory()
  const filename = `bin/${name}.js`
  await writeFile(
    filename,
    '#!/usr/bin/env node\nimport \'../dist/cli.js\'\n',
  )
  return filename
}

function createCli() {
  return writeFile('./src/cli.ts', '// get params from process.argv')
}

const filename = await createBin(pkgName)
await createCli()
const pkg = addBin({ ...pkgJson } as PackageJson, filename)
await writeFile('./package.json', JSON.stringify(pkg, null, 2))
console.log('bin create successfully!')
