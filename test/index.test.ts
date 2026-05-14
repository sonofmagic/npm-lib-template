import { name, wait } from '../src/index'

describe('[Default]', () => {
  it('exports the package name', () => {
    expect(name).toBe('npm-lib-template')
  })

  it('wait 100ms', async () => {
    const flag = await wait(100)
    expect(flag).toBe(true)
  })
})
