import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlFilter = `https://dummyjson.com/products/category/${id}`
        fetch(id ? urlFilter : url)
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, [id])

    return (
        products.length === 0 ? <Loader /> :
            <div className="grid is-col-min-16 ml-5 mb-2 mt-2">
                {products.map((product) => <ItemList key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} img={product.thumbnail} />)}
            </div>
    )
}
export default ItemListContainer;