import { getStarWarsData } from "@/utils/starWarsData"
import SpeciesView from "@/views/SpeciesView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Specie | Darkside",
  description: "Database of Specie for the Darkside",
}

export default async function Page({ params }: { params: { number: string } }) {
  const data = await getStarWarsData(`species/?page=${params.number}`)

  return <SpeciesView data={data} />
}
