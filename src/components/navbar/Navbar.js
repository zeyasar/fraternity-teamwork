import * as React from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from "react-router-dom";
import {logOut} from "../../helpers/firebase";
import {AddInfo} from "../../helpers/databaseFunc";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const pages = [ 'About', 'Contact', 'Products'];
const settings = ["Register","Login"];
const settings2 = ["Profile","Logout"];



const ResponsiveAppBar = () => {
  const {basket,count,myArray,setBasket,setMyArray,setCount} = useContext(ProductContext)
  const {currentUser} = useContext(AuthContext)

  const email="email"
  const baskets="baskets"
  const myArrays="myArrays"
  const counts="counts"
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    if(e.target.innerText === "Logout"){
      logOut()
      
      if(basket.length > 0){
        AddInfo({[email]:currentUser.email,[baskets]:{...basket},[myArrays]:[...myArray],[counts]:count})
      }
      setBasket([])
      setMyArray([])
      setCount(0)
      navigate("/")
    } else if(e.target.innerText === "Profile"){
      navigate("/profile")
    } else if(e.target.innerText === "Login"){
      navigate("/login")
    }else if(e.target.innerText === "Register"){
      navigate("/register")
    }

    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#222831"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink to="/">Fraternity</NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink to={"/"+page.toLocaleLowerCase()} key={page} onClick={handleCloseNavMenu} sx={{textDecarotion:"none",color:"white"}}>
                  <Typography textAlign="center" sx={{color:"black"}}>{page}</Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <NavLink to={"/"+page.toLocaleLowerCase()} sx={{textDecarotion:"none",color:"Black"}} >{page}</NavLink>
              </Button>
            ))}
          </Box>
         <IconButton aria-label="cart" sx={{marginRight:"10px"}} onClick={()=>navigate("/basket")}>
        <StyledBadge badgeContent={count} sx={{color:"white"}}>
          <ShoppingCartIcon  />
        </StyledBadge>
      </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,color:"white" }}>
                {currentUser ? (currentUser.email[0].toUpperCase()):(<AccountCircleIcon />)}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (settings2.map((setting) => (
                <MenuItem  key={setting} onClick={(e)=>handleCloseUserMenu(e)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))) :(settings.map((setting) => (
                <MenuItem  key={setting} onClick={(e)=>handleCloseUserMenu(e)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              )))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default ResponsiveAppBar;



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//         <NavLink to="/">Fraternity</NavLink>
//         {/* <NavLink to="/">Home</NavLink> */}
//         {/* <NavLink to="/register">Register</NavLink> */}
//         <NavLink to="/login">Login</NavLink>
//         <NavLink to="/about">About Us</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/product">Products</NavLink>
//         <NavLink to="/basket">Basket</NavLink>
//     </div>
//   )
// }
// export default Navbar
