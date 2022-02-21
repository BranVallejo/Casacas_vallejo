import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { traerProduct } from "../mock/products"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = (products) => {

    const [product, setProduct] = useState([])

    const {productId} = useParams()

    useEffect(()=>{
      traerProduct(productId).then(res=>{
        setProduct(res)
      })
    })

    return(
        <div className="itemDetailContainer">
            <ItemDetail product={product} key={product.id}/>
        </div>
    )
}

export default ItemDetailContainer;