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

const ProfileCard = async ({
  data,
}: {
  data: People | Film | Planet | Specie | Starship | Vehicle | any
}) => {
  console.log(data)
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>{"name" in data ? data.name : data.title}</CardTitle>
        <CardDescription>{"gender" in data ? data.gender : ""}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap gap-4">
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
                  className="p-4"
                  href={`/${data[key].split("/")[4]}/${
                    data[key].split("/")[5]
                  }`}
                >
                  <p className="text-sm font-medium leading-none">{key}</p>
                </Link>
              )
            }
            if (typeof data[key] === "object" && data[key].length > 0) {
              return (
                <div key={index}>
                  <Link
                    href={`/${data[key][0].split("/")[4]}`}
                    className="text-sm font-medium leading-none"
                  >
                    {key}
                  </Link>
                  <div className="">
                    {data[key].map((item: string, index: number) => (
                      <Link
                        className="p-4"
                        key={index}
                        href={`/${item.split("/")[4]}/${item.split("/")[5]}`}
                      >
                        <p className="text-sm font-medium leading-none">
                          {index + 1}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <div
                key={index}
                className=" grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{key}</p>
                  <p className="text-sm text-muted-foreground">{data[key]}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
export default ProfileCard
