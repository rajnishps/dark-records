import ProfileCard from "@/components/ProfileCard"
import { getStarWarsData } from "@/utils/starWarsData"

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getStarWarsData(`people/${params.slug}`)

  return <ProfileCard data={data} />
}