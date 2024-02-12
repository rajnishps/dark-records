"use client"
import { Input } from "@/components/ui/input"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDebounceValue } from "usehooks-ts"

const Search = () => {
  const [debouncedValue, setValue] = useDebounceValue("", 700)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/people/search/${debouncedValue}`)
    }
  }, [debouncedValue])

  return (
    <div className="m-2 rounded-lg flex justify-end">
      <Input
        defaultValue={pathname?.split("/search/")[1]?.replace("%20", " ") || ""}
        className="w-full lg:max-w-xs h-14"
        onChange={(e) => {
          if (e.target.value === "") {
            setValue("")
            router.push("/people/")
          }
          setValue(e.target.value)
        }}
        type="search"
        placeholder="Search"
      />
    </div>
  )
}
export default Search
