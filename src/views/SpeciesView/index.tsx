import GetPagination from "@/components/GetPageNumbers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Specie } from "@/types"
import Link from "next/link"

const SpeciesView = ({
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
            <TableHead className="text-center py-4">Classification</TableHead>
            <TableHead className="text-center">Designation</TableHead>
            <TableHead className="text-center">Average Height</TableHead>
            <TableHead className="text-center">Average Lifespan</TableHead>
            <TableHead className="text-center">Eye Colors</TableHead>
            <TableHead className="text-center">Hair Colors</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-xs lg:text-base tracking-widest">
          {data.results.map((item: Specie) => (
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
                {item.classification}
              </TableCell>
              <TableCell className=" text-center">{item.designation}</TableCell>
              <TableCell className=" text-center">
                {item.average_height}
              </TableCell>
              <TableCell className=" text-center">
                {item.average_lifespan}
              </TableCell>
              <TableCell className=" text-center">{item.eye_colors}</TableCell>
              <TableCell className=" text-center">{item.hair_colors}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        <GetPagination
          to="/species/page/"
          total={data.count}
          previous={data.previous}
          next={data.next}
        />
      }
    </div>
  )
}
export default SpeciesView
