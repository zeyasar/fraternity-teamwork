
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Basket from '../pages/Basket';
import Navbar from '../components/navbar/Navbar';



const AppRouter = () => {

    return ( 
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/basket' element={<Basket/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter;


