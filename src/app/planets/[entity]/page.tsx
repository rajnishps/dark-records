import EntityCard from "@/components/EntityCard"
import { getStarWarsData } from "@/utils/starWarsData"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Entity | Darkside",
  description: "Entity Record for the Darkside",
}

export default async function Page({ params }: { params: { entity: string } }) {
  const data = await getStarWarsData(`planets/${params.entity}`)

  return <EntityCard data={data} />
}
