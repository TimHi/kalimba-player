// sounds.ts
const sounds: Record<string, string> = {}

const modules = import.meta.glob('../assets/sounds/*.mp3')

Object.keys(modules).forEach((filePath, index) => {
  const soundName = `${index}`
  sounds[soundName] = filePath
})
console.log(sounds)
export default sounds
