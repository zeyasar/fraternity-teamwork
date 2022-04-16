import React from 'react'

const Navbar = () => {
  return (
    <div>
        <NavLink to ="/">Fraternetiy</NavLink>
        {/* <NavLink to ="/register">Register</NavLink> */}
        <NavLink to ="/login">Login</NavLink>
        <NavLink to ="/about">About Us</NavLink>
        <NavLink to ="/contact">Contact</NavLink>
        <NavLink to ="/product">Products</NavLink>
        <NavLink to ="/basket">Basket</NavLink>
    </div>
  )
}

export default Navbar