import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";

import FormCart from "./FormCart";
import CartItem from "./CartItem";
import { createOrder } from "../firebase/db";
const CartContainer = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    return (
        <div>
            <div className="table-container">
                <table className="table is-striped">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (<CartItem key={item.id} item={item} removeFromCart={removeFromCart} />))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>${cart.reduce((total, item) => total + item.quantity * item.price, 0)}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <FormCart clearCart={clearCart} createOrder={createOrder} />
        </div>

    )
}
export default CartContainer