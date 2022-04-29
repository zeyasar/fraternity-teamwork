import React from 'react'
import {ProductContext} from '../context/ProductContext'
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const {productList,setDetails} = React.useContext(ProductContext)
  const navigate = useNavigate()
  console.log(productList)
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };
  const handleDetail = (products) => {
    console.log(products)
    setDetails(products)
    //tıklanan ürün bilgilerini contexte gönderdik
    navigate('/details/'+products.id)
    // router da path olarak belirttiğimiz path="details/:id" diye yazdığımız yer : nokta id kısmını ifade ettiği için id değerini alıyoruz navigate içine koyuyoruz
  }

  return (
    <div>
      <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
          sx={{backgroundColor:"darkslategray"}}
        >
      {productList?.map(product => (
        <Card key={product.id} sx={{ maxWidth: 345,minWidth:345,m:5,maxHeight:450,minHeight:450 }}>
         <CardActionArea onClick={()=>handleDetail({...product})}> 
         {/* gönderirken spread operator kullanarak obje olarak gönderdik(tıklanan ürünün tüm bilgilerini) karşılarken normal parametre olarak aldık */}
        <CardHeader
          sx={{height:90,fontSize:"15px",marginTop:"15px"}}
          title={truncateOverview(product.title, 55)}
          // truncateOverview fonksiyonu da belirttiğimiz yazıyı belirttiğimiz karkter sayısı kadar alıyor ve sonuna üç nokta ekliyor 
          subheader={product.category}
        />
        <CardMedia
          component="img"
          height="194px"
          image={product.image}
          alt="product"
        />
        <CardContent>
          <Typography variant="body2" sx={{fontFamily:"fantasy",fontSize:"1rem"}} component="p">
            {product.price}$
          </Typography>
          
        </CardContent>
        </CardActionArea> 
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
        
        </Card>
      ))}
      </Box>
    </div>
  )
}

export default Products