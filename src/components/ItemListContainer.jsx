import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../firebase/db"

function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    useEffect(() => {
        id? getProductsByCategory(id).then(product => setProducts(product)) :
        getProducts().then(product => setProducts(product))
    }, [id])

    return (
        products.length === 0 ? <Loader /> :<ItemList products={products} />
    )
}
export default ItemListContainer;