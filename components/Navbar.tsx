
"use client"

import Theme from "./Theme";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  

export default function Navbar(){
    return (
        <header className="bg-white dark:bg-black sticky inset-0 z-50 w-full border-b-2 border-black dark:border-b dark:border-white">
            <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-white-600 dark:text-white-300" href="/">
                        
                        <span className="pt-2 text-xl font-bold flex">
                            Gen-I
                            <Image 
                            src="/favicon.png"
                            alt="logo"
                            width={50}
                            height={30} />
                        </span>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >
                                Image Generator
                            </a>
                            </li>

                            <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >
                                Blog
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <div className="flex items-center">
                            <div className="sm:flex sm:gap-4">
                                <div
                                className="rounded-md bg-white-600 px-5 py-2.5 text-sm font-medium text-white dark:hover:bg-white-500">
                                <Theme />
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <DropdownMenu>
                                <DropdownMenuTrigger 
                                className="rounded-md bg-white-600 p-2 text-black border transition hover:text-gray-600/75 dark:bg-black-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                            />
                                    </svg>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Image Generator</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Home</DropdownMenuItem>
                                    <DropdownMenuItem>Blog</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>

    );
}