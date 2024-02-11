import { getStarWarsData } from "@/utils/starWarsData"
import PeopleView from "@/views/PeopleView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "People | Darkside",
  description: "Database of People for the Darkside",
}

export default async function Page({ params }: { params: { number: string } }) {
  const data = await getStarWarsData(`people/?page=${params.number}`)

  return <PeopleView data={data} />
}
