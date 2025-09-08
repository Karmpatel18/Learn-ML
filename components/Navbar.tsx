'use client'

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import Link from 'next/link';
import {
  UserButton,
} from '@clerk/nextjs'

function Navbar() {
  return (
    <nav className="flex w-full max-w-full justify-between items-center sm:px-4 md:px-6 lg:px-6 px-2 py-3.5 border-b-[1px] dark:border-b-neutral-800 border-b-neutral-200">
        <h1 className="text-2xl font-semibold tracking-tight dark:text-neutral-50 text-neutral-900">LearnML</h1>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Karmpatel18/Learn-ML" target="_blank">
            <button className="flex cursor-pointer text-sm gap-2 items-center bg-neutral-50 dark:bg-neutral-950 dark:text-white border-[1px] border-neutral-200 text-neutral-900 dark:border-neutral-800 px-4 py-2 rounded-lg tracking-tighter"><FaGithub size={18} /> Star Project</button>
          </Link>
          <AnimatedThemeToggler className="scale-90 dark:text-neutral-50 text-neutral-900" />
          <header className="flex justify-end items-center  gap-4 h-16">
              <UserButton />
          </header>
        </div>
      </nav>
  )
}

export default Navbar
