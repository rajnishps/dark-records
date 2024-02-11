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
import { Planet } from "@/types"
import Link from "next/link"

const PlanetsView = ({
  data,
}: {
  data: { results: []; count: number; previous: string; next: string }
}) => {
  return (
    <div className="w-5/6 rounded-xl border font-battle ">
      <Table>
        <TableHeader>
          <TableRow className="text-xl lg:text-2xl ">
            <TableHead className="pl-8">Name</TableHead>
            <TableHead className="text-center py-4">Population</TableHead>
            <TableHead className="text-center">Climate</TableHead>
            <TableHead className="text-center">Terrain</TableHead>
            <TableHead className="text-center">Diameter</TableHead>
            <TableHead className="text-center">Orbital Period</TableHead>
            <TableHead className="text-center">Rotation Period</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-sm lg:text-base tracking-widest">
          {data.results.map((item: Planet) => (
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
                {parseInt(item.population) >= 0
                  ? parseInt(item.population).toLocaleString()
                  : item.population || "unknown"}
              </TableCell>
              <TableCell className=" text-center">{item.climate}</TableCell>
              <TableCell className=" text-center">{item.terrain}</TableCell>
              <TableCell className=" text-center">{item.diameter}</TableCell>
              <TableCell className=" text-center">
                {item.orbital_period}
              </TableCell>
              <TableCell className=" text-center">
                {item.rotation_period}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        <GetPagination
          to="/planets/page/"
          total={data.count}
          previous={data.previous}
          next={data.next}
        />
      }
    </div>
  )
}
export default PlanetsView
