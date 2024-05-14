import { foo, wait } from '@/index'

describe('[Default]', () => {
  it('foo should be bar', () => {
    expect(foo).toBe('bar')
  })

  it('wait 100ms', async () => {
    const flag = await wait(100)
    expect(flag).toBe(true)
  })
})
