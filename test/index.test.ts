import { foo } from '../src'

describe('[Default]', () => {
  test('foo should be bar', () => {
    expect(foo).toBe('bar')
  })
})
