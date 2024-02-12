import { getStarWarsData } from "@/utils/starWarsData"
import PeopleView from "@/views/PeopleView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "People | Darkside",
  description: "Database of People for the Darkside",
}

export default async function Page({ params }: { params: { text: string } }) {
  const data = await getStarWarsData(`people/?search=${params.text}`)

  return <PeopleView data={data} hidePagination={true} />
}
