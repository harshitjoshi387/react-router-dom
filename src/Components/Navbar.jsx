import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-wide">
        MyApp
      </h1>

      {/* Links */}
      <div className="flex gap-10 text-xl">
        <Link to="/" className="hover:text-yellow-300 transition duration-300">
          Home
        </Link>

        <Link to="/about" className="hover:text-yellow-300 transition duration-300">
          About
        </Link>

        <Link to="/product" className="hover:text-yellow-300 transition duration-300">
          Product
        </Link>
      </div>

    </nav>
  )
}

export default Navbar