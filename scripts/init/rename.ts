import type { PackageJson } from '../types.ts'
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import pkgJson from '../../package.json' with { type: 'json' }

type ReplaceableKey
  = | 'name'
    | 'description'
    | 'bugs.url'
    | 'repository.url'
    | 'homepage'

const TEMPLATE_NAME = 'npm-lib-template'

/**
 * 临时解决方案
 * @param ref
 * @param name
 */
function doReplace(pkg: PackageJson, ref: ReplaceableKey, name: string) {
  switch (ref) {
    case 'name':
    case 'description':
    case 'homepage': {
      const current = pkg[ref]
      if (typeof current === 'string') {
        pkg[ref] = current.replaceAll(TEMPLATE_NAME, name)
      }
      break
    }
    case 'bugs.url': {
      const current = pkg.bugs?.url
      if (typeof current === 'string') {
        pkg.bugs = { ...(pkg.bugs ?? {}), url: current.replaceAll(TEMPLATE_NAME, name) }
      }
      break
    }
    case 'repository.url': {
      const current = pkg.repository?.url
      if (typeof current === 'string') {
        pkg.repository = { ...(pkg.repository ?? {}), url: current.replaceAll(TEMPLATE_NAME, name) }
      }
      break
    }
  }
}

function replacePkg(name: string) {
  const pkg: PackageJson = { ...pkgJson }

  for (const ref of [
    'name',
    'description',
    'bugs.url',
    'repository.url',
    'homepage',
  ] satisfies ReplaceableKey[]) {
    doReplace(pkg, ref, name)
    console.log(`[${ref}] replace over`)
  }

  return pkg
}

;(async () => {
  const cwd = process.cwd()
  const dirname = path.basename(cwd)
  const pkg = replacePkg(dirname)
  await writeFile('./package.json', JSON.stringify(pkg, null, 2))
  console.log('rename successfully!')
})()
