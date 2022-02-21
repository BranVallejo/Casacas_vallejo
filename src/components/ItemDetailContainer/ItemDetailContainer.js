import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { traerProduct } from "../mock/products"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import {RiLoader4Line} from "react-icons/ri"
import "./ItemDetailContainer.css"



const ItemDetailContainer = (products) => {

    const [product, setProduct] = useState([])

    const {productId} = useParams()

    const [loading, setLoading] = useState(true)


    useEffect(()=>{
      traerProduct(productId).then(res=>{
        setProduct(res)
      })
      traerProduct().finally(()=>{
        setLoading(false)
      })
    })

    return(
      <>
        {loading ? (
          <RiLoader4Line className="carga" size={250}/>
        ) : (
            <>
              <div className="itemDetailContainer">
                <ItemDetail product={product} key={product.id}/>
              </div>
            </>
        )}
      </>

    )
}

export default ItemDetailContainer;