"use client"
import Link from "next/link"
import { ThemeToggle } from "../ui/theme-changer"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Header = () => {
  const router = useRouter()
  return (
    <header className="flex bg-white  dark:bg-[#121212] w-full z-10 justify-between font-jedi items-center px-8 mb-4">
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              onClick={() => router.back()}
              width={40}
              height={40}
              alt="light"
              className="-rotate-90 cursor-pointer"
              src={"/back.png"}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Back</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={"/"}
              className="flex flex-col w-fit justify-around items-center text-4xl lg:text-6xl"
            >
              <span className="h-8 lg:h-14">STAR</span>
              <span className="">WARS</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <ThemeToggle />{" "}
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  )
}
export default Header
