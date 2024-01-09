'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12  bg-[#39c0fa] relative">
        <Link href="/">
          <img src="/img/logo-1.png" className="h-16" alt="logo" />
        </Link>

        <ul className="hidden md:flex items-center space-x-4 text-blue-950 text-md font-light">
          <Link
            href="/"
            className="hover:font-semibold hover:border-b-2 px-2 hover:py-4 border-blue-950"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:font-semibold hover:border-b-2 px-2 hover:py-4 border-blue-950"
          >
            Featured
          </Link>
          <Link
            href="/"
            className="hover:font-semibold hover:border-b-2 px-2 hover:py-4 border-blue-950"
          >
            Agents
          </Link>
          <Link
            href="/"
            className="hover:font-semibold hover:border-b-2 px-2 hover:py-4 border-blue-950"
          >
            News
          </Link>
          <Link href="/" className="bg-blue-900 text-white px-4 py-2">
            Login
          </Link>
        </ul>

        {open ? (
          <AiOutlineClose
            onClick={() => setOpen(!open)}
            className="md:hidden text-4xl font-bold text-blue-900"
          />
        ) : (
          <IoMenuSharp
            onClick={() => setOpen(!open)}
            className="md:hidden text-4xl font-bold text-blue-900"
          />
        )}
      </nav>

      {open && (
        <nav className="w-[70%] h-full flex flex-col px-10 py-2 space-y-4 absolute bg-[#39c0fa] z-10">
          <Link onClick={() => setOpen(!open)} href="/" className="">
            Home
          </Link>
          <Link onClick={() => setOpen(!open)} href="/featured" className="">
            Featured
          </Link>
          <Link onClick={() => setOpen(!open)} href="/agents" className="">
            Agents
          </Link>
          <Link onClick={() => setOpen(!open)} href="/news" className="">
            News
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            href="/login"
            className="bg-blue-900 text-white px-4 py-2"
          >
            Login
          </Link>
        </nav>
      )}
    </>
  )
}

export default Navbar
