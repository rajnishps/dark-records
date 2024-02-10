import { Table } from "lucide-react"
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table"

const DataTable = ({ data, heading }: { data: []; heading: [] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {heading.map((item) => (
            <TableHead>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="font-medium">{item.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default DataTable
