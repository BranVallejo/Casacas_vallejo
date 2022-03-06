import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Cart = () => {
    
    const {cart} = useContext(CartContext)
    
    return(
        <>
            {cart.map((prod)=>(
                <>
                    <li key={prod.id}>
                        Producto: {prod.name}, Cantidad: {prod.cantidad}
                    </li>
                </>
            ))}
        </>
        
    )
}

export default Cart;