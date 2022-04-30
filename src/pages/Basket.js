/* import React from 'react'
import {useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";


const Basket = () => {
  const {basket} = useContext(ProductContext)
  return (
    <div>
      {basket?.map((item, index) => (
            <Card sx={{ maxWidth: 345,minWidth:345, m: 5, maxHeight: 500,minHeight:500,backgroundColor:"bisque" }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.image}
                alt="img"
              />
              <CardContent sx={{height:150}}>
                <Typography gutterBottom variant="h6" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{height:"55px",overflow: "hidden",whiteSpace: "pre",textOverflow: "ellipsis"}} component="div">
                  {item?.content ? item?.content : item?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to basket" onClick={() => {}}>
                  <AddIcon />
                </IconButton>
                <IconButton aria-label="remove from basket" onClick={() => {}}>
                  <RemoveIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
    </div>
  )
}

export default Basket */
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import { IconButton } from '@mui/material';


export default function Basket() {
  const {basket,setCount,count,myArray} = useContext(ProductContext)
  // const newBasket = basket.filter((item)=>item)
  const increaseButton = (item) => {
    for(let i=0;i<basket.length+1;i++){
      if(basket[i].id === item.id){
        basket[i].quantity += 1
        setCount(count+1)
      }
    }
  }
  const decreaseButton = (item) => {
    for(let i=0;i<basket.length+1;i++){
      if(basket[i].id === item.id){
        basket[i].quantity -= 1
        setCount(count-1)
        if(basket[i].quantity === 0){
            basket.splice(i,1)   
          for(let j =0;j<myArray.length;j++){
            if(myArray[j] === item.id){
              myArray.splice(j,1)
            }
          }
        }
      }
    }
  }
  console.log("basket",basket)

  return (
    <React.Fragment>
      <Table size="small" sx={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
        <TableHead>
          <TableRow  sx={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
            <TableCell >Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell  sx={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow key={row.id}  sx={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
              <TableCell><img src={row.image} alt="product" width="50px" height="50px" /></TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell  sx={{textAlign:"center",alignItems:"center",justifyContent:"center"}}><IconButton onClick={()=>decreaseButton({...row})}><RemoveIcon/></IconButton>{row.quantity}<IconButton onClick={()=>increaseButton({...row})}><AddIcon/></IconButton></TableCell>
              <TableCell align="right">{`$${row.price*row.quantity}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#"  sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
