import GetPagination from "@/components/GetPageNumbers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Vehicle } from "@/types"
import Link from "next/link"

const VehiclesView = ({
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
            <TableHead className="text-center py-4">Model</TableHead>
            <TableHead className="text-center">Cost</TableHead>
            <TableHead className="text-center">Length</TableHead>
            <TableHead className="text-center">Max Speed</TableHead>
            <TableHead className="text-center">Crew</TableHead>
            <TableHead className="text-center">Passengers</TableHead>
            <TableHead className="text-center">Cargo Capacity</TableHead>
            <TableHead className="text-center">Vehicle Class</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-sm lg:text-base tracking-widest">
          {data.results.map((item: Vehicle) => (
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
              <TableCell className=" text-center">{item.model}</TableCell>

              <TableCell className=" text-center">
                {item.cost_in_credits}
              </TableCell>
              <TableCell className=" text-center">{item.length}</TableCell>
              <TableCell className=" text-center">
                {item.max_atmosphering_speed}
              </TableCell>
              <TableCell className=" text-center">{item.crew}</TableCell>
              <TableCell className=" text-center">{item.passengers}</TableCell>
              <TableCell className=" text-center">
                {item.cargo_capacity}
              </TableCell>
              <TableCell className=" text-center">
                {item.vehicle_class}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        <GetPagination
          to="/vehicles/page/"
          total={data.count}
          previous={data.previous}
          next={data.next}
        />
      }
    </div>
  )
}
export default VehiclesView
