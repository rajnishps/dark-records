import EntityCard from "@/components/EntityCard"
import { getStarWarsData } from "@/utils/starWarsData"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Vehicle | Darkside",
  description: "Vehicle Record for the Darkside",
}

export default async function Page({ params }: { params: { entity: string } }) {
  const data = await getStarWarsData(`vehicles/${params.entity}`)

  return <EntityCard data={data} />
}
