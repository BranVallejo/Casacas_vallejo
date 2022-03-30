import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({product}) =>{
    return(
        <div className="card">
            <div className="descripcionProducto">
                <p className="nombreCamiseta">{product.name}</p>
                <img className="fotoProducto" src={product.img}/>
                <p className="product-price">${product.price} USD</p>
                <p><Link to={`/detail/${product.id}`} className="detalle">Ver detalle</Link></p>
            </div>
            
        </div>
        
    )

}

export default Item;