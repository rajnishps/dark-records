import { getStarWarsData } from "@/utils/starWarsData"
import FilmsView from "@/views/FilmsView"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Films | Darkside",
  description: "Database of Films for the Darkside",
}
export default async function Page() {
  const data = await getStarWarsData("films")

  return <FilmsView data={data} />
}
