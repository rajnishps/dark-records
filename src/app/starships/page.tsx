import { getStarWarsData } from "@/utils/starWarsData"
import StarshipsView from "@/views/StarshipsView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Starships | Darkside",
  description: "Database of Starships for the Darkside",
}

export default async function Page() {
  const data = await getStarWarsData(`starships`)

  return <StarshipsView data={data} />
}
