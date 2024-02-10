export async function getStarWarsData(category: string) {
  const res = await fetch(`https://swapi.dev/api/${category}`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
