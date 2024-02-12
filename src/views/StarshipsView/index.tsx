import GetPagination from "@/components/GetPageNumbers"
import TableCellMap from "@/components/TableCellMap"
import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Starship } from "@/types"
import Link from "next/link"

const StarshipsView = ({
  data,
}: {
  data: { results: []; count: number; previous: string; next: string }
}) => {
  return (
    <div className="w-5/6 rounded-lg border font-battle ">
      <Table>
        <TableHeader>
          <TableRow className="text-lg lg:text-xl ">
            <TableHead className="pl-8">Name</TableHead>
            <TableHead className="text-center py-4">
              Hyperdrive Rating
            </TableHead>
            <TableHead className="text-center">Crew</TableHead>
            <TableHead className="text-center">Passengers</TableHead>
            <TableHead className="text-center">Class</TableHead>
            <TableHead className="text-center">Cost</TableHead>
            <TableHead className="text-center">Pilots</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-xs lg:text-base tracking-widest">
          {data.results.map((item: Starship) => (
            <TableRow key={item.name}>
              <TableCell className="">
                <Link
                  className="px-2 mx-2"
                  key={item.url}
                  href={`/${item.url.split("/")[4]}/${item.url.split("/")[5]}`}
                >
                  {item.name}
                </Link>
              </TableCell>
              <TableCell className=" text-center">
                {item.hyperdrive_rating}
              </TableCell>
              <TableCell className=" text-center">{item.crew}</TableCell>
              <TableCell className=" text-center">{item.passengers}</TableCell>
              <TableCell className=" text-center">
                {item.starship_class}
              </TableCell>
              <TableCell className=" text-center">
                {item.cost_in_credits}
              </TableCell>
              <TableCell className=" text-center">
                <TableCellMap items={item.pilots} linkPrefix={item.pilots[0]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        <GetPagination
          to="/starships/page/"
          total={data.count}
          previous={data.previous}
          next={data.next}
        />
      }
    </div>
  )
}
export default StarshipsView
