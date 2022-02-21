import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({product}) =>{
    return(
        <div className="card">
            <div className="descripcionProducto">
                <p className="nombreCamiseta">{product.name}</p>
                <img className="fotoProducto" src={product.img}/>
                <p className="product-price">${product.price} USD</p>
                <p className="comprar">Agregar al carrito</p>
                <Link to={`/detail/${product.id}`} >Ver detalle</Link>
                {/* <p>Stock disponible:{product.stock}</p>
                <p>{product.description}</p> */}
            </div>
            
        </div>
        
    )

}

export default Item;