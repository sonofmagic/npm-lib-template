export interface PackageJson {
  name: string
  description?: string
  homepage?: string
  bugs?: {
    url?: string
    [key: string]: unknown
  }
  repository?: {
    url?: string
    type?: string
    [key: string]: unknown
  }
  bin?: Record<string, string>
  files?: string[]
  [key: string]: unknown
}
