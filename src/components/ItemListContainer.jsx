import { useEffect, useState } from "react";
import Card from "./Card";

function ItemListContainer() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div className="grid is-col-min-16">
            {products.map((product) => <Card key={product.id} title={product.title} description={product.description} price={product.price} img={product.thumbnail} />)}
        </div>
    )
}
export default ItemListContainer;