import {useState} from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial, handleClick}) =>{

    const [count, setCount] = useState(0);

    const Decrement = () => {
        count > 0 ? setCount(count - 1) : alert("No puedes tener productos negativos")
    }

    const Increment = () => {
        count < stock ? setCount(count + 1) : alert("Alcanzaste el stock máximo");
    }

    // const Aniadir = () => {
    //     count >= initial ? console.log(`Agregaste ${count} productos al carrito`) : alert("No puedes agregar 0 productos al carrito")
        
    // }

    return(
        <>
            <div className="counterBox">
                <h3>{count}</h3>
                <div className="Botonera">
                    <button className="Decrement" onClick={Decrement}>-</button>
                    <button className="Increment" onClick={Increment}>+</button>
                </div>
                <button onClick={handleClick}>Añadir al carrito</button>
            </div>

        </>
    )

}

export default ItemCount;
