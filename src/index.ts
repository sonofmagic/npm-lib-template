export const foo = 'bar'

export function wait(timeout?: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}

export const dirname = __dirname

export * from '@/util'
