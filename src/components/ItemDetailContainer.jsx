import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { data, useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({ id:0,title:"", description:"", stock:0, thumbnail:"", reviews:[], price:0 })
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])
    return (
        product.id?
        <div className="content">
            
            <ItemDetail title={product.title} description={product.description} stock={product.stock} thumbnail={product.thumbnail} reviews={product.reviews} price={product.price}/> 
            <ItemCount stock={product.stock}/>
        </div>: <Loader/>
    )
}
export default ItemDetailContainer