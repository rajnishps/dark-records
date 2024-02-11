import { getStarWarsData } from "@/utils/starWarsData"
import StarshipsView from "@/views/StarshipsView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Starships | Darkside",
  description: "Database of Starships for the Darkside",
}

export default async function Page({ params }: { params: { number: string } }) {
  const data = await getStarWarsData(`starships/?page=${params.number}`)

  return <StarshipsView data={data} />
}
