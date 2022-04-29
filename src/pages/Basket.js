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

import {useContext} from 'react'
import {ProductContext} from '../context/ProductContext'

// Generate Order Data
/* function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
} */

export default function Basket() {
  const {basket} = useContext(ProductContext)
  const newProducts = []

  for(let i=0;i<basket.length;i++){
    newProducts = basket.filter(item => item.id !== basket[i].id)
  }
  console.log(newProducts)

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow key={row.id}>
              <TableCell><img src={row.image} alt="product" width="50px" height="50px" /></TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.quantity}</TableCell>
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