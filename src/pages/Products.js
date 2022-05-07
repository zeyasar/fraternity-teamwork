/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
// import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/toastNotify";


const Products = () => {
  const {productList,setDetails,setBasket,basket,count,setCount,myArray,setMyArray} = React.useContext(ProductContext)
  const {currentUser} = useContext(AuthContext)
  console.log(basket)
  const navigate = useNavigate()
  console.log(productList)
  const [value, setValue] = React.useState(2);
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };
  const handleDetail = (products) => {
    console.log(products);
    setDetails(products);
    //tıklanan ürün bilgilerini contexte gönderdik
    navigate("/details/" + products.id);
    // router da path olarak belirttiğimiz path="details/:id" diye yazdığımız yer : nokta id kısmını ifade ettiği için id değerini alıyoruz navigate içine koyuyoruz
  };
  const handleAddToBasket = (item) => {
    if(currentUser){
      setCount(count+1)
      toastWarnNotify("Added to Basket")
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
      
      navigate("/login")
    }
    
    console.log(basket)
  }
  console.log("myarray",myArray)

  return (
    <div>
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{ backgroundColor: "darkslategray" }}
      >
        {productList?.map((product) => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 345,
              minWidth: 345,
              m: 5,
              maxHeight: 500,
              minHeight: 450,
            }}
          >
            <CardActionArea onClick={() => handleDetail({ ...product })}>
              {/* gönderirken spread operator kullanarak obje olarak gönderdik(tıklanan ürünün tüm bilgilerini) karşılarken normal parametre olarak aldık */}
              <CardHeader
                sx={{ height: 90, fontSize: "15px", marginTop: "15px" }}
                title={truncateOverview(product.title, 55)}
                // truncateOverview fonksiyonu da belirttiğimiz yazıyı belirttiğimiz karkter sayısı kadar alıyor ve sonuna üç nokta ekliyor
                subheader={product.category}
              />
              <CardMedia
                component="img"
                height="194px"
                image={product.image}
                alt="product"
                sx={{ width: "50%", maxHeight: "50%", margin: "auto", objectFit: "fill"}}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "fantasy", fontSize: "1rem" }}
                  component="p"
                >
                  {product.price}$
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* STARS COMPONENT */}
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography component="legend">Değerlendirme</Typography>
              {/* <Typography component="legend">Range</Typography>
              <Rating name="read-only" value={value} readOnly /> */}
            </Box>
            {/* STARS COMPONENT FİNİSH */}
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-label="share"
                sx={{ marginLeft: "60%" }}
                onClick={() => handleAddToBasket({ ...product, quantity: 1 })}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Products;

