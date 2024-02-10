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
const categories = [
  "people",
  "planets",
  "films",
  "species",
  "vehicles",
  "starships",
]

const TableHold = async ({ category }: { category: string }) => {
  const data = await getStarWarsData(category)
  console.log(data)
  return (
    <Table>
      <TableCaption>May the Force be withyou.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Categories</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((item, index) => (
          <TableRow key={index}>
            <Link href={item}>
              <TableCell className="font-medium">{item}</TableCell>
            </Link>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function Home() {
  return <TableHold category={"people"} />
}
