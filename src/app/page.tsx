import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
const categories = [
  "people",
  "planets",
  "films",
  "species",
  "vehicles",
  "starships",
]

const TableHold = async () => {
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
            <TableCell className="font-medium">
              <Link href={item}>{item}</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function Home() {
  return (
    <div>
      <TableHold />
    </div>
  )
}
