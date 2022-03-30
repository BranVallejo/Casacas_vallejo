import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { traerProductos } from "../mock/products";
import ItemList from "../ItemList";
import { getCategory } from "../mock/products";
import { useParams } from "react-router-dom";
import { RiLoader4Line } from "react-icons/ri"
import "./ItemListContainer.css"
import { useNotificationServices } from "../../services/notification/NotificationServices";
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)

    const setNotification = useNotificationServices()

    useEffect(() => {
        setNotification(`success`, `Bienvenido`)


    },[])



    useEffect(() => {

        const collectionRef = categoryId ?
            query(collection(firestoreDb, "products"), where("category", "==", categoryId)) :
            collection(firestoreDb, "products")

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).finally(() => {
            setLoading(false)

        })

    }, [categoryId]);


    return (
        <>
            {loading ? (
                <RiLoader4Line className="carga" size={250} />
            ) : (
                <>
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                </>
            )}
        </>
    )
}

export default ItemListContainer;