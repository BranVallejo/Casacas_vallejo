import {useState} from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial);

    const Decrement = () => {
        count > 0 
        ? setCount(count - 1)
        : alert("No puedes tener productos negativos")
    }

    const Increment = () => {
        count < stock ? setCount(count + 1) : alert("Alcanzaste el stock máximo");
    }


    return(
        <>
            <div className="counterBox">
                <h3>{count}</h3>
                <div className="Botonera">
                    <button className="Decrement" onClick={Decrement}>
                        -
                    </button>
                    <button className="Increment" onClick={Increment}>
                        +
                    </button>
                </div>
                <button onClick={() => onAdd(count)}>Añadir al carrito</button>
            </div>

        </>
    )

}

export default ItemCount;
