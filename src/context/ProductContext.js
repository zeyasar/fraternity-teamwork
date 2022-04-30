import {createContext,useEffect,useState} from 'react'


export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [productList,setProductList] = useState([])
    const [details,setDetails] = useState({})
    const [basket,setBasket] = useState([])
    const [count,setCount] = useState(0)
    const [myArray,setMyArray] = useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProductList(data)
        })
    },[]) 

    return(
        <ProductContext.Provider value={{productList,setDetails,details,basket,setBasket,count,setCount,myArray,setMyArray}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
