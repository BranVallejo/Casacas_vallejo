import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { traerProduct } from "../mock/products"
import "./ItemDetailContainer.css"


const ItemDetailContainer = (products) => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
      traerProduct.then((res)=>{
        setProduct(res)
      })
    })

    return(
        <div className="ItemDetailContainer">
            <ItemDetail product={product} key={product.id}/>
        </div>
    )
}

export default ItemDetailContainer;