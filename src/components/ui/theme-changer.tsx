"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="scale-90 lg:scale-100 focus-visible:ring-0"
          size="icon"
        >
          <Image
            width={60}
            height={60}
            alt="light"
            className="rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0"
            src={"/light.png"}
          />
          <Image
            width={60}
            height={60}
            alt="dark"
            className="absolute  dark:invert scale-0 transition-all  dark:scale-100"
            src={"/dark.png"}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Lightside
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Darkside
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Council
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
