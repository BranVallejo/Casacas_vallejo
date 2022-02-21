import {useState} from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial}) =>{

    const [count, setCount] = useState(0);

    const Decrement = () => {
        count > 0 ? setCount(count - 1) : alert("No puedes tener productos negativos")
    }

    const Increment = () => {
        count < stock ? setCount(count + 1) : alert("Alcanzaste el stock máximo");
    }

    const Aniadir = () => {
        count >= initial ? alert(`Agregaste ${count} productos al carrito`) : alert("No puedes agregar 0 productos al carrito")
        
    }

    return(
        <>
            <div className="counterBox">
                <h2 className="NombreProducto">Camiseta Barcelona Local</h2>
                <h3>{count}</h3>
                <div className="Botonera">
                    <button className="Decrement" onClick={Decrement}>-</button>
                    <button className="Increment" onClick={Increment}>+</button>
                </div>
                <button onClick={Aniadir}>Añadir al carrito</button>
            </div>

        </>
    )

}

export default ItemCount;

// Operadores ternarios expresados en if's:

    // const increment = () => {
    //     if (count < stock) {
    //         setCount(count + 1);
    //     }
    // }

        // const decrement = () => {
    //     if (count > 0){
    //         setCount(count - 1);
    //     } else {
    //         alert("No puedes tener productos negativos");
    //     }
    // }