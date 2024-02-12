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
import { People } from "@/types"
import Link from "next/link"
import Search from "./components/Search"

const PeopleView = ({
  data,
  hidePagination,
}: {
  data: { results: []; count: number; previous: string; next: string }
  hidePagination?: boolean
}) => {
  return (
    <div className="w-5/6 rounded-lg border font-battle ">
      <Search />
      <Table>
        <TableHeader>
          <TableRow className="text-lg lg:text-xl ">
            <TableHead className="pl-8">Name</TableHead>
            <TableHead className="text-center py-4">Specie</TableHead>
            <TableHead className="text-center py-4">Birth Year</TableHead>
            <TableHead className="text-center py-4">Gender</TableHead>
            <TableHead className="text-center py-4">Starships</TableHead>
            <TableHead className="text-center py-4">Films</TableHead>
            <TableHead className="text-center py-4">Vehicles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-xs lg:text-base tracking-widest">
          {data.results.map((item: People) => (
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
                <TableCellMap
                  items={item.species}
                  linkPrefix={item.species[0]}
                />
              </TableCell>
              <TableCell className=" text-center">{item.birth_year}</TableCell>
              <TableCell className=" text-center">{item.gender}</TableCell>
              <TableCell className=" text-center">
                <TableCellMap
                  items={item.starships}
                  linkPrefix={item.starships[0]}
                />
              </TableCell>
              <TableCell className=" text-center">
                <TableCellMap items={item.films} linkPrefix={item.films[0]} />
              </TableCell>
              <TableCell className=" text-center">
                <TableCellMap
                  items={item.vehicles}
                  linkPrefix={item.vehicles[0]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {hidePagination ? (
        <div className="h-4" />
      ) : (
        <GetPagination
          to={"/people/page/"}
          total={data.count}
          previous={data.previous}
          next={data.next}
        />
      )}
    </div>
  )
}
export default PeopleView
