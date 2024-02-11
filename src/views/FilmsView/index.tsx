import GetPagination from "@/components/GetPageNumbers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Film } from "@/types"
import Link from "next/link"

const FilmsView = ({
  data,
}: {
  data: { results: []; count: number; previous: string; next: string }
}) => {
  return (
    <div className="w-5/6 rounded-xl border font-battle ">
      <Table>
        <TableHeader>
          <TableRow className="text-xl lg:text-2xl ">
            <TableHead className="pl-8">Title</TableHead>
            <TableHead className="text-center py-4">Director</TableHead>
            <TableHead className="text-center">Producer</TableHead>
            <TableHead className="text-center">Release Date</TableHead>
            <TableHead className="text-center">Episode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-jedi text-sm lg:text-base tracking-widest">
          {data.results.map((item: Film) => (
            <TableRow key={item.title}>
              <TableCell className="">
                <Link
                  className="px-2 mx-2"
                  key={item.url}
                  href={`/${item.url.split("/")[4]}/${item.url.split("/")[5]}`}
                >
                  {item.title}
                </Link>
              </TableCell>
              <TableCell className=" text-center">{item.director}</TableCell>
              <TableCell className=" text-center">{item.producer}</TableCell>
              <TableCell className=" text-center">
                {item.release_date.toString()}
              </TableCell>
              <TableCell className=" text-center">{item.episode_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        <GetPagination
          to="/films/page/"
          total={data.count}
          previous={data.previous}
          next={data.next}
        />
      }
    </div>
  )
}
export default FilmsView
