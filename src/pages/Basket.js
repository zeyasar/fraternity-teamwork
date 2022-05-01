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
import {AuthContext} from '../context/AuthContext'
import { IconButton } from '@mui/material';
import {DeleteInfo} from "../helpers/databaseFunc"

export default function Basket() {
  const {basket,setBasket,setMyArray,setCount,count,myArray,basketList} = useContext(ProductContext)
  const {currentUser} = useContext(AuthContext)


    let myBasket = basketList?.filter((item) => item.email === currentUser?.email)

  const myFunc = async () => {
    if(myBasket?.length > 0){
      console.log(myBasket)
      console.log(myBasket.id)
      let myUserProducts= await [...myBasket]
      const myBasketList =await [ ...myUserProducts[0].baskets]
      await  setCount(myUserProducts[0].counts)
      await setMyArray(myUserProducts[0].myArrays)
      await setBasket(myBasketList)
      await DeleteInfo(myBasket[0].id)
      myBasket = []
    }
  }
  React.useEffect(() => {
    myFunc()
  },[]) 
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
          {basket.length>0 && basket.map((row) => (
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
