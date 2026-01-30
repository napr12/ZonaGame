import CartContext from "./CartContext";
import { useState } from "react";
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = findItemInCart(item.id);
        if (existingItem) {
            setCart(cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: item.quantity }]);
        }
    };
    const findItemInCart = (id) => {
        return cart.find((item) => item.id === id);
    }
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    const clearCart = () => {
        setCart([]);
    };
    const itemsQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, findItemInCart, removeFromCart, clearCart,  itemsQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;