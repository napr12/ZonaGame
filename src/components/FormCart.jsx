import { useContext } from "react";
import CartContext from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
const FormCart = ({ clearCart, createOrder }) => {
    const {cart} = useContext(CartContext);
    const handlerSubmit = (e) => {
        e.preventDefault();
        const formData = e.target
        const order = {
            buyer: {
                name: formData.name.value,
                email: formData.email.value,
                phone: formData.phone.value,
                address: formData.address.value,
            },
            total: cart.reduce((total, item) => total + item.quantity * item.price, 0),
        }
        
        order.items = cart.map(({id, title, price, quantity})=> ({id, title, price, quantity}));
        createOrder(order).then((nroOrder) => {
            toast.success(`Orden creada con exito! Nro: ${nroOrder}`);
            clearCart();
        });
        
    }
    return (
        <form onSubmit={handlerSubmit}> 
            <h2>Complete sus datos</h2>
            <div className="field">
                <label className="label">Nombre:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Nombre completo" id="name" required />
                </div>
            </div>
          <div className="field">
                <label className="label">Email:</label>
                <div className="control">
                    <input className="input" type="email" placeholder="Email" id="email" required />
                </div>
            </div>
            <div className="field">
                <label className="label">Teléfono:</label>
                <div className="control">
                    <input className="input" type="tel" placeholder="Número de teléfono" id="phone" required />
                </div>
            </div>
            <div className="field">
                <label className="label">Dirección:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Dirección completa" id="address" required />
                </div>
            </div>
            <button className="button is-link" type="submit">Enviar</button>    
            <button className="button is-light" onClick={clearCart}>Limpiar</button>
            <ToastContainer />
        </form>
    );
}
export default FormCart;