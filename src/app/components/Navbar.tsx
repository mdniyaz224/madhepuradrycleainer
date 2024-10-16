"use client"

import { useState } from "react"
import { Waves, Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <Link href="/" className="flex items-center flex-shrink-0 text-blue-600 mr-6">
        <Waves className="w-8 h-8 mr-2" />
        <span className="font-semibold text-xl tracking-tight">Londery</span>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
        >
          {isOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "" : "hidden"}`}>
        <div className="text-sm lg:flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-blue-800 mr-4"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="/contact"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-600 border-blue-600 hover:border-transparent hover:text-white hover:bg-blue-600 mt-4 lg:mt-0"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}