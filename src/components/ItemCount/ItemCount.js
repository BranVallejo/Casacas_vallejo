import {useState} from "react"
import "./ItemCount.css"
import { useNotificationServices } from "../../services/notification/NotificationServices";

const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial);
    const setNotification = useNotificationServices()


    const Decrement = () => {
        count > 0 ? setCount(count - 1) : setNotification('error', `No puedes tener productos negativos`);
    }

    const Increment = () => {
        count < stock ? setCount(count + 1) : setNotification('error', `Alcanzaste el Stock máximo`);
    }


    return(
        <>
            <div className="counterBox">
                <h3>{count}</h3>
                <div className="Botonera">
                    <button className="Decrement" onClick={Decrement}>-</button>
                    <button className="Increment" onClick={Increment}>+</button>
                </div>
                <button className="aniadir" onClick={() => onAdd(count)}
                >AÑADIR AL CARRITO</button>
            </div>

        </>
    )

}

export default ItemCount;
