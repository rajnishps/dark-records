import EntityCard from "@/components/EntityCard"
import { getStarWarsData } from "@/utils/starWarsData"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Film | Darkside",
  description: "Film Record for the Darkside",
}

export default async function Page({ params }: { params: { entity: string } }) {
  const data = await getStarWarsData(`films/${params.entity}`)

  return <EntityCard data={data} />
}
