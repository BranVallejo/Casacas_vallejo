import React, { useContext, useState, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { writeBatch, getDoc, doc, addDoc, collection, Timestamp } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase"
import { useNotificationServices } from "../../services/notification/NotificationServices"
import ContactForm from '../ContactForm/ContactForm';
import Togglable from '../Togglable/Togglable';

const Cart = () => {
    const { cart, removeItem, clearItems, getTotal } = useContext(CartContext);
    const contactFormRef = useRef()
    const [processingOrder, setProcessingOrder] = useState(false)
    const setNotification = useNotificationServices()

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        address: "",
        comment: "",
    });


    if (cart.length === 0) {
        return (
            <div className="carritoVacio">
                <div className="sinProductos">Tu carrito está vacío 😞</div>
                <Link to="/"><button className="volverInicio">VOLVER A HOME</button></Link>
            </div>)
    }



    const confirmOrder = () => {
        if (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)



            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(firestoreDb);
            const outOfStock = [];

            const executeOrder = () => {
                if (outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, "orders"), objOrder).then(({ id }) => {
                        batch.commit().then(() => {
                            setNotification("success", `La orden se generó exitosamente, su número de orden es: ${id}`)
                            clearItems()
                        })
                    }).catch(error => {
                        setNotification('error', error)
                    }).finally(() => {
                        setProcessingOrder(false)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                        removeItem(prod.id)
                    })
                }
            }

            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                    if (response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoreDb, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data() })
                    }
                }).catch((error) => {
                    setNotification('error', error)
                }).then(() => {
                    executeOrder()
                }).finally(() => {
                    setProcessingOrder(false)
                })
            })

        } else {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }




    if (processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }

    return (
        <div>
            <div className="cart">Carrito</div>
            <div className="carritoLista">
                <div className="carritoItem">
                    {cart.map((prod) => (
                        <>
                            <li className="itemInfo" key={prod.id}> Llevas {prod.cantidad} "{prod.name}" ${prod.price}     <img className="img" src={prod.img} />
                                <button className="eliminarProducto" onClick={() => removeItem(prod.id)}>
                                    X
                                </button>
                            </li>
                        </>
                    ))}
                    <div className="total">TOTAL: ${getTotal()}</div>
                    <button className="vaciarCarrito" onClick={() => clearItems()}>VACIAR CARRITO</button>
                    <button className="finalizarCompra " onClick={() => confirmOrder()}>CONFIRMAR COMPRA</button>
                    {(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&

                        <div>
                            <h4>Nombre: {contact.name}</h4>
                            <h4>Telefono: {contact.phone}</h4>
                            <h4>Direccion: {contact.address}</h4>
                            <h4>Comentario: {contact.comment}</h4>
                            <button onClick={() => setContact({ phone: '', address: '', comment: '' })} className='botonContacto'>
                                ELIMINAR DATOS DE CONTACTO
                            </button>
                        </div>}
                </div>
            </div>

            <Togglable buttonLabelShow={
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '')
                    ? 'EDITAR CONTACTO'
                    : 'AGREGAR CONTACTO'
            }
                ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>
        </div>
    )
}
export default Cart

