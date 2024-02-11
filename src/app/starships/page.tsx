import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { People } from "@/types"
import { getStarWarsData } from "@/utils/starWarsData"
import Link from "next/link"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Starships | Darkside",
  description: "Database of Starships for the Darkside",
}
export default async function Page() {
  const data = await getStarWarsData("people")

  return (
    <div className="w-5/6 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Specie</TableHead>
            <TableHead className="text-center">Birth Year</TableHead>
            <TableHead className="text-center">Gender</TableHead>
            <TableHead className="text-center">Starships</TableHead>
            <TableHead className="text-center">Films</TableHead>
            <TableHead className="text-center">Vehicles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.results.map((item: People) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">
                <Link
                  className="px-2 mx-2"
                  key={item.url}
                  href={`${item.url.split("/")[4]}/${item.url.split("/")[5]}`}
                >
                  {item.name}
                </Link>
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.species[0] ? (
                  <Link
                    className="px-2 mx-2"
                    key={item?.species[0]}
                    href={`${item?.species[0]?.split("/")[4]}/${
                      item.species[0]?.split("/")[5]
                    }`}
                  >
                    Specie
                  </Link>
                ) : (
                  "-"
                )}
              </TableCell>

              <TableCell className="font-medium text-center">
                {item.birth_year}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.gender}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.starships[0] ? (
                  <>
                    <div className="flex justify-center">
                      {item.starships.map((starship, index: number) => (
                        <Link
                          className="px-2 mx-2"
                          key={starship}
                          href={`${starship.split("/")[4]}/${
                            starship.split("/")[5]
                          }`}
                        >
                          {index + 1}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  "-"
                )}
              </TableCell>

              <TableCell className="font-medium text-center">
                {item.films[0] ? (
                  <>
                    <div className="flex justify-center">
                      {item.films.map((film, index: number) => (
                        <Link
                          className="px-2 mx-2"
                          key={film}
                          href={`${film.split("/")[4]}/${film.split("/")[5]}`}
                        >
                          {index + 1}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell className="font-medium text-center">
                {item.vehicles[0] ? (
                  <>
                    <div className="flex justify-center">
                      {item.vehicles.map((vehicle, index: number) => (
                        <Link
                          className="px-2 mx-2"
                          key={vehicle}
                          href={`${vehicle.split("/")[4]}/${
                            vehicle.split("/")[5]
                          }`}
                        >
                          {index + 1}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
