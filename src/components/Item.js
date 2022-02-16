import "./Item.css"


const Item = ({product}) =>{
    return(
        <div className="Card">
            <img className="fotoProducto" src={product.img}/>
            
            <div className="descripcionProducto">
                <p className="nombreCamiseta">{product.name}</p>
                <p>{product.price}</p>
                <p>Stock disponible:{product.stock}</p>
                <p>{product.description}</p>
            </div>
            
        </div>
        
    )

}

export default Item;