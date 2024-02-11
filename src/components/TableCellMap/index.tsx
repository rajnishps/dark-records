import Link from "next/link"

const TableCellMap = ({
  items,
  linkPrefix,
}: {
  items: string[]
  linkPrefix: string
}) => {
  if (!items[0]) {
    return <span>-</span>
  }
  return (
    <div className="flex justify-center">
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            className="px-2 mx-2"
            href={`/${linkPrefix?.split("/")[4]}/${item?.split("/")[5]}`}
          >
            {index + 1}
          </Link>
        )
      })}
    </div>
  )
}
export default TableCellMap
