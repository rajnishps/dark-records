"use client"
import Link from "next/link"
import { ThemeToggle } from "../ui/theme-changer"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex bg-white  dark:bg-[#121212] w-full z-10 justify-between font-jedi items-center px-8 mb-4">
      <Image
        onClick={() => router.back()}
        width={40}
        height={40}
        alt="light"
        className="-rotate-90 cursor-pointer"
        src={"/back.png"}
      />
      <Link
        href={"/"}
        className="flex flex-col w-fit justify-around items-center text-4xl lg:text-6xl"
      >
        <span className="h-8 lg:h-14">STAR</span>
        <span className="">WARS</span>
      </Link>
      <ThemeToggle />
    </header>
  )
}
export default Header
