import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from `../../context/CartContext`

const ItemDetail = ({product}) => {
    const[quantity, setQuantity] = useState(0)
    const[compraFinalizada, setCompraFinalizada] = useState(false)

    const {setCart} = useContext(CartContext)

    return(
        <div className="card">
        <div className="descripcionProducto">
            <p className="nombreCamiseta">{product.name}</p>
            <img className="fotoProducto" src={product.img}/>
            <p className="product-price">${product.price} USD</p>
            <p className="comprar">Agregar al carrito</p>
            <p>{product.description}</p> 
            {
                !compraFinalizada ? (<ItemCount stock={product.stock} initial={1} handleClick={() => setCompraFinalizada(true)}/>
                    ) : (
                        <>
                            <Link to={`/cart`}>
                                <button>Ir al carrito</button>
                            </Link>
                        </>
                    )
            }
        </div>
        
    </div>
    

    )
}

export default ItemDetail