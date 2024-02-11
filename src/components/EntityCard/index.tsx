"use client"
import { cn } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card"
import { People, Planet, Film, Specie, Starship, Vehicle } from "@/types"
import Link from "next/link"

const EntityCard = async ({
  data,
}: {
  data: People | Film | Planet | Specie | Starship | Vehicle | any
}) => {
  return (
    <div className="star-wars w-full cursor-default flex justify-center relative text-5xl text-center">
      <Card
        className={cn(
          "w-full  relative origin-[50%_100%] border-0 dark:bg-[#121212] crawl"
        )}
      >
        <CardHeader className="space-y-10">
          <CardTitle className="text-center text-7xl">
            {"name" in data ? data.name : data.title}
          </CardTitle>
          <CardDescription className="text-center text-4xl">
            {"gender" in data ? data.gender : ""}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center  space-y-10">
          {Object?.keys(data)?.map((key, index) => {
            if (
              key === "url" ||
              key === "created" ||
              key === "edited" ||
              data[key] === null
            )
              return null
            if (typeof data[key] === "string" && data[key].startsWith("http")) {
              return (
                <Link
                  key={index}
                  className="p-4 px-8 mx-4"
                  href={`/${data[key].split("/")[4]}/${
                    data[key].split("/")[5]
                  }`}
                >
                  <p className="text-4xl font-bold leading-none capitalize">
                    {key.split("_").join(" ")}
                  </p>
                </Link>
              )
            }
            if (typeof data[key] === "object" && data[key].length > 0) {
              return (
                <div key={index}>
                  <Link
                    href={`/${data[key][0].split("/")[4]}`}
                    className="text-4xl font-bold leading-none"
                  >
                    <p className="text-4xl font-bold leading-none capitalize">
                      {key.split("_").join(" ")}
                    </p>
                  </Link>
                  <div className="flex items-center justify-center">
                    {data[key].map((item: string, index: number) => (
                      <Link
                        className="p-4 px-8 mx-4"
                        key={index}
                        href={`/${item.split("/")[4]}/${item.split("/")[5]}`}
                      >
                        <p className="text-4xl font-bold leading-none">
                          {index + 1}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <div className="space-y-4 ">
                <p className="text-4xl font-bold leading-none capitalize">
                  {key.split("_").join(" ")}
                </p>
                <p className="text-4xl text-muted-foreground">{data[key]}</p>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
export default EntityCard
