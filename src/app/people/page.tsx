import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getStarWarsData } from "@/utils/starWarsData"
import Link from "next/link"

export default async function Page() {
  const data = await getStarWarsData("people")
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>name</TableHead>
          <TableHead>height</TableHead>
          <TableHead>mass</TableHead>
          <TableHead>hair_color</TableHead>
          <TableHead>Skin Color</TableHead>
          <TableHead>Eye Color</TableHead>
          <TableHead>Birth Year</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Starship</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.results.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell className="font-medium">{item.height}</TableCell>
            <TableCell className="font-medium">{item.mass}</TableCell>
            <TableCell className="font-medium">{item.hair_color}</TableCell>
            <TableCell className="font-medium">{item.skin_color}</TableCell>
            <TableCell className="font-medium">{item.eye_color}</TableCell>
            <TableCell className="font-medium">{item.birth_year}</TableCell>
            <TableCell className="font-medium">{item.gender}</TableCell>
            <TableCell className="font-medium">
              Starships:
              <div className="flex">
                {item.starships.map((starship: string, index: number) => (
                  <Link
                    className="p-4"
                    href={`${starship.split("/")[4]}/${starship.split("/")[5]}`}
                    key={starship}
                  >
                    {index}
                  </Link>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
