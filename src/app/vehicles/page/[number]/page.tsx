import { getStarWarsData } from "@/utils/starWarsData"
import VehiclesView from "@/views/VehiclesView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Vehicles | Darkside",
  description: "Database of Vehicles for the Darkside",
}

export default async function Page({ params }: { params: { number: string } }) {
  const data = await getStarWarsData(`vehicles/?page=${params.number}`)

  return <VehiclesView data={data} />
}
