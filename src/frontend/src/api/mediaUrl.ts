export const mediaUrl = (path: string) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  // Remove leading/trailing slashes from origin/path if it exists
  const sanitizedOrigin = origin.replace(/\/$/, '')
  const sanitizedPath = path.replace(/^\//, '')

  return `${sanitizedOrigin}/media/${sanitizedPath}`
}
