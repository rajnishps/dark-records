import {
  Table,
  TableBody,
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
    <div className="rounded-xl border capitalize ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-96 font-battle cursor-default text-xl lg:text-3xl py-4">
              Categories
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-xl lg:text-2xl transition-all">
          {categories.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center scale-90 hover:scale-100 hover:bg-black/10">
                <Link href={item}>{item}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <TableHold />
    </div>
  )
}
