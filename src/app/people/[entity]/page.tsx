import EntityCard from "@/components/EntityCard"
import { getStarWarsData } from "@/utils/starWarsData"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "People | Darkside",
  description: "People Record for the Darkside",
}

export default async function Page({ params }: { params: { entity: string } }) {
  const data = await getStarWarsData(`people/${params.entity}`)

  return <EntityCard data={data} />
}
