import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter