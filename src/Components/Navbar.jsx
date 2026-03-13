import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center gap-10 px-10 h-16">
      
      <NavLink 
        to="/" 
        className="hover:border-b-2 hover:border-white pb-1"
      >
        Home
      </NavLink>

      <NavLink 
        to="/About" 
        className="hover:border-b-2 hover:border-white pb-1"
      >
        About
      </NavLink>

      <NavLink 
        to="/Product" 
        className="hover:border-b-2 hover:border-white pb-1"
      >
        Product
      </NavLink>

    </nav>
  )
}

export default Navbar