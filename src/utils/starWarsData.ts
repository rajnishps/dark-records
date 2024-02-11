export async function getStarWarsData(category: string) {
  const res = await fetch(`https://swapi.dev/api/${category}`)
  if (!res.ok) {
    return {}
  }
  return res.json()
}
