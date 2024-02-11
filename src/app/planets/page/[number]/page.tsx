import { getStarWarsData } from "@/utils/starWarsData"
import PlanetsView from "@/views/PlanetsView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Planets | Darkside",
  description: "Database of Planets for the Darkside",
}

export default async function Page({ params }: { params: { number: string } }) {
  const data = await getStarWarsData(`planets/?page=${params.number}`)

  return <PlanetsView data={data} />
}
