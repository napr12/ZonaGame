
import ItemCount from "./ItemCount"
const ItemDetail = ({ product }) => {
    return (
        <>
            <div className="content">

                <h1 className="has-text-centered">{product?.title.toUpperCase()}</h1>
                <div className="fixed-grid has-2-cols ml-5">
                    <div className="grid">

                        <p className="cell has-text-centered mt-5 is-size-5">{product?.description}</p>
                        <img className="cell is-row-span-3 " src={product?.thumbnail} />
                        <p className="cell has-text-centered is-size-4">Stock {product?.stock} </p>
                        <p className="cell has-text-centered has-text-weight-bold is-size-4">${product?.price}</p>

                    </div>
                    <ItemCount product={product} />
                </div>
            </div>
        </>
    )
}
export default ItemDetail