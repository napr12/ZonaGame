const CartItem = ({item, removeFromCart}) => {
    return (
        <tr key={item.id}> 
            <td>{item.title.toUpperCase()}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td> 
            <td><button className="button is-danger is-small" onClick={() => removeFromCart(item.id)}>Quitar</button></td>
        </tr>
    )
}
export default CartItem;