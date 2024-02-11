import { getStarWarsData } from "@/utils/starWarsData"
import SpeciesView from "@/views/SpeciesView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Species | Darkside",
  description: "Database of Species for the Darkside",
}
export default async function Page() {
  const data = await getStarWarsData("species")

  return <SpeciesView data={data} />
}
