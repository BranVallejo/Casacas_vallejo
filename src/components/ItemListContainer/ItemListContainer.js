import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { traerProductos } from "../mock/products";
import ItemList from "../ItemList";

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        traerProductos.then((res)=>{
            setProducts(res)
        });
        traerProductos.catch((error)=>{
            console.log(error);
        })
        traerProductos.finally(()=>{
            // Se ejecuta al final, siempre.
        })
    }, []);
    

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
            
            {/* <ItemCount stock={5} initial={1}/> */}

        </>
    )
}

export default ItemListContainer;