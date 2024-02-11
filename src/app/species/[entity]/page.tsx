import EntityCard from "@/components/EntityCard"
import { getStarWarsData } from "@/utils/starWarsData"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Specie | Darkside",
  description: "Specie Record for the Darkside",
}

export default async function Page({ params }: { params: { entity: string } }) {
  const data = await getStarWarsData(`species/${params.entity}`)

  return <EntityCard data={data} />
}
