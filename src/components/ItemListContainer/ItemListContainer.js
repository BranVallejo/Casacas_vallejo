import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { traerProductos } from "../mock/products";
import ItemList from "../ItemList";
import { getCategory } from "../mock/products";
import { useParams } from "react-router-dom";
import {RiLoader4Line} from "react-icons/ri"
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategory(categoryId).then((products) =>{
            setProducts(products)
        })
    },[categoryId, products])


    useEffect(()=>{
        traerProductos.then((res)=>{
            setProducts(res)
        });
        traerProductos.catch((error)=>{
            console.log(error);
        })
        traerProductos.finally(()=>{
            // Se ejecuta al final, siempre.
            setLoading(false)
        })
    }, []);
    

    return (
        <>
            {loading ? (
                <RiLoader4Line className="carga" size={250}/>
            ) : (
                <>
                    <h1>{greeting}</h1>
                    <ItemList products={products}/>            
                </>
            )}
        </>
    )
}

export default ItemListContainer;