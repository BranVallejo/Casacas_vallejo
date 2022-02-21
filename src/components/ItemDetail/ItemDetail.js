

const ItemDetail = ({product}) => {
    return(
        <div className="card">
        <div className="descripcionProducto">
            <p className="nombreCamiseta">{product.name}</p>
            <img className="fotoProducto" src={product.img}/>
            <p className="product-price">${product.price} USD</p>
            <p className="comprar">Agregar al carrito</p>
            <p>{product.description}</p> 
        </div>
        
    </div>
    

    )
}

export default ItemDetail