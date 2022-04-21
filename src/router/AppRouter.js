import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ResponsiveAppbar from '../components/navbar/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Basket from '../pages/Basket'
import Register from '../pages/Register'
import Details from '../pages/Details'

const AppRouter = () => {
  return (
    <Router>
        <ResponsiveAppbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/details" element={<Details/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter;


