import { useEffect, useState, useContext } from "react"
import CartContext from "../context/CartContext"
import { ToastContainer, toast } from 'react-toastify';

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(1)
    const { addToCart } = useContext(CartContext);
    useEffect(() => { }, [count])
    const handleAdd = () => {
        addToCart({ ...product, quantity: count });
        toast.success('Se agrego producto al carrito');
    }

    return (
        <>
            <div className="field has-text-centered">
                <label className="label">Cantidad {count}</label>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <p className="control">
                    <button className="button is-light" onClick={() => setCount(count - 1)} disabled={count < 2}>
                        Restar
                    </button>
                </p>
                <p className="control">
                    <button className="button is-primary" onClick={() => setCount(count + 1)} disabled={count >= product?.stock}>
                        Sumar
                    </button>
                </p>
                <p className="control">
                    <button className="button is-primary" onClick={handleAdd}>
                        Agregar al carrito
                    </button>
                </p>
                <ToastContainer />
            </div>
        </>
    )

}

export default ItemCount