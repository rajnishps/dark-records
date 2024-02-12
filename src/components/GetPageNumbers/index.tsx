import { RowsPerPage } from "@/config/rowsPerPage"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

const GetPagination = ({
  total,
  previous,
  next,
  to,
}: {
  total: number
  previous: string
  next: string
  to: string
}) => {
  let activeNow = 1
  if (previous) {
    activeNow = parseInt(previous.split("=")[1]) + 1
  }
  const pageNumbers = Math.ceil(total / RowsPerPage)
  const pages = []
  for (let i = 1; i <= pageNumbers; i++) {
    pages.push(
      <PaginationItem key={i} className="hidden lg:flex">
        <PaginationLink isActive={i == activeNow} href={to + i}>
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  }
  return (
    <Pagination className="p-4 flex justify-end overflow-hidden">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`text-sm lg:text-xl ${
              !previous && "cursor-not-allowed hover:bg-none"
            }`}
            href={previous ? to + previous?.split("=")[1] : ""}
          />
        </PaginationItem>

        {pages}

        <PaginationItem>
          <PaginationNext
            className={`text-sm lg:text-xl ${
              !next && "cursor-not-allowed hover:bg-none"
            }`}
            href={next ? to + next?.split("=")[1] : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default GetPagination
