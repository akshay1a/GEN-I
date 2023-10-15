"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Theme() {
  const { theme, setTheme } = useTheme()

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg" onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
          <SunIcon className="absolute h-11 w-11 md:h-8 md:w-8 text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-11 w-11 md:h-8 md:w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* <span className="sr-only">Toggle theme</span> */}
        </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
