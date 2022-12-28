export const env = (key: string) => {
  if (import.meta.env[key] === undefined)
    console.error(`*** ${key} IS UNDEFINED. ***`)
  return `${import.meta.env[key] ?? ''}`
}
