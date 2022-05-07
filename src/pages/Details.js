import React,{useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { toastWarnNotify } from '../helpers/toastNotify';
import { AuthContext } from '../context/AuthContext';

const Details = () => {
  const {details,basket,setBasket,myArray,setMyArray,count,setCount} = useContext(ProductContext)
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  

  const handleAddToBasket = (item) => {
    
    if(currentUser){
      setCount(count+1)
    if(!myArray.includes(item.id)){
      const newBasket = [...basket,item]
      setBasket(newBasket)
      setMyArray([...myArray,item.id])
      
    }else{
      for(let i=0;i<basket.length+1;i++){
        if(basket[i].id === item.id){
          basket[i].quantity += 1
        }
      }
    }
    }else{
      toastWarnNotify("Please Login First")
    }
  }

  return (
    <div>
      <Box
      sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
      }}
    >
    
    <Card sx={{ display: 'flex'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <IconButton sx={{ display: 'flex', flexDirection: 'column'}} onClick={()=>navigate(-1)}>
      <ArrowBackIcon  sx={{fontSize:45,color:"black"}}/>
      </IconButton>
          <Typography component='div' variant='h5' sx={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
            {details.title}
          </Typography>
          <Typography component='div' variant='span'>
            {details.category}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div' sx={{marginTop:20,justifyContent:"center"}}>
            {details?.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" sx={{fontFamily:"fantasy",fontSize:"1rem"}} component="p">
            {details.price}$
          </Typography>
          
        </CardContent>
        
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share" sx={{marginLeft:"90%"}} onClick={()=>handleAddToBasket({...details})}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Box>
      <CardMedia
        component='img'
        sx={{ width: 421, height: 421 }}
        image={details?.image}
        alt='Live from space album cover'
      />
    </Card>
    </Box>
    </div>
  )
}

export default Details