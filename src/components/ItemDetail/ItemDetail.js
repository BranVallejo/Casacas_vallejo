import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({product}) => {
    const[quantity, setQuantity] = useState(0)
    const[compraFinalizada, setCompraFinalizada] =useState(false)
    const {addToCart} = useContext(CartContext)  

    const handleCheckout = (quantity) => {
        setCompraFinalizada(true);
        setQuantity(quantity);
        addToCart(product, quantity)
    }


    return(
        <div className="card">
        <div className="descripcionProducto">
            <p className="nombreCamiseta">{product.name}</p>
            <img className="fotoProducto" src={product.img}/>
            <p className="product-price">${product.price} USD</p>
            <p className="comprar">Agregar al carrito</p>
            <p>{product.description}</p> 
            {
                (compraFinalizada == false) ? (<ItemCount stock={product.stock} initial={1} onAdd={handleCheckout}/>
                ) : (
                    <>
                        <Link to={`/cart`}><button>Ir al carrito</button></Link>
                    </>
                )
            }
        </div>
        
    </div>
    

    )
}

export default ItemDetail
