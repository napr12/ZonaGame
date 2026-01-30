import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"
import { getProductById } from "../firebase/db"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({ id:0,title:"", description:"", stock:0, thumbnail:"", reviews:[], price:0 })
    const { id } = useParams()
    useEffect(() => {
        getProductById(id).then(prod => setProduct(prod))
    }
    
    , [id])
    return (
        product.id?
            <ItemDetail product={product}/> 
            
      : <Loader/>
    )   
}
export default ItemDetailContainer