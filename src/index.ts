export const name = 'npm-lib-template'

export function wait(timeout?: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}
