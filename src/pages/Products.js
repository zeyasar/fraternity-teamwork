import React from 'react'
import {ProductContext} from '../context/ProductContext'

const Products = () => {
  const {productList} = React.useContext(ProductContext)
  console.log(productList)
  return (
    <div>Products</div>
  )
}

export default Products