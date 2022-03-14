import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";



const Cart = () => {

    const { cart, clearItems, removeItem, addToCart, isInCart, sumanCantidad, getTotal } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="carritoVacio">
                <div className="sinProductos">No agregaste nada 😞
                    <Link to="/"><button className="volverInicio">VOLVER A HOME</button></Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="cart">Carrito</div>
            <div className="carritoLista">
                <div className="carritoItem">
                    {cart.map((prod) => (
                        <>
                            <li className="itemInfo" key={prod.id}> Llevas {prod.cantidad} "{prod.name}" ${prod.price}     <img className="img" src={prod.img} />
                                <button className="eliminarProducto" onClick={() => removeItem(prod.id)}>
                                    X
                                </button>
                            </li>
                        </>
                    ))}
                    <div className="total">Total: ${getTotal()}</div>
                    <button className="vaciarCarrito" onClick={() => clearItems()}>VACIAR CARRITO</button>
                    <button className="finalizarCompra" onClick={() => console.log("Muchas gracias")}>FINALIZAR COMPRA</button>
                </div>
            </div>
        </>

    )
}

export default Cart;