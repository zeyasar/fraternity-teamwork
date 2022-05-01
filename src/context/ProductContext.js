import {createContext,useEffect,useState} from 'react'
import {useFetch} from '../helpers/databaseFunc'


export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [userBasket,setUserBasket] = useState([])
    const [productList,setProductList] = useState([])
    const [details,setDetails] = useState({})
    const [basket,setBasket] = useState([])
    const [count,setCount] = useState(0)
    const [myArray,setMyArray] = useState([])
    const {basketList}= useFetch()
    
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProductList(data)
        })
        // setUserBasket(basketList)
    },[]) 

    return(
        <ProductContext.Provider value={{productList,setDetails,details,basket,setBasket,count,setCount,myArray,setMyArray,userBasket,basketList}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
