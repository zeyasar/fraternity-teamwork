import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to="/">Fraternity</NavLink>
        {/* <NavLink to="/">Home</NavLink> */}
        {/* <NavLink to="/register">Register</NavLink> */}
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/product">Products</NavLink>
    </div>
  )
}

export default Navbar