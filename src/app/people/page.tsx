import { getStarWarsData } from "@/utils/starWarsData"
import PeopleView from "@/views/PeopleView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "People | Darkside",
  description: "Database of People for the Darkside",
}
export default async function Page() {
  const data = await getStarWarsData("people")

  return <PeopleView data={data} />
}
