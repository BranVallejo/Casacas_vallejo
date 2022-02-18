import "./Item.css"


const Item = ({product}) =>{
    return(
        <div className="Card">
            <div className="descripcionProducto">
                <p className="nombreCamiseta">{product.name}</p>
                <img className="fotoProducto" src={product.img}/>
                <p className="product-price">${product.price} USD</p>
                <p className="comprar">Agregar al carrito</p>
                {/* <p>Stock disponible:{product.stock}</p>
                <p>{product.description}</p> */}
            </div>
            
        </div>
        
    )

}

export default Item;