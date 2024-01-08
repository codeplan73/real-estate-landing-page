import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 bg-blue-100 drop-shadow-lg shadow-xl">
      <Link href="/">
        <img src="/img/logo-1.png" className="h-16" alt="logo" />
      </Link>

      <ul className="flex items-center space-x-8 text-blue-950 text-md font-light">
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
    </nav>
  )
}

export default Navbar
