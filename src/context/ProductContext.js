import {createContext,useEffect,useState} from 'react'


export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [productList,setProductList] = useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProductList(data)
        })
    },[]) 

    return(
        <ProductContext.Provider value={{productList}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
