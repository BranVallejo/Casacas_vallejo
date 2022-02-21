import "./CardWidget.css"
import {GrCart} from "react-icons/gr"

const CardWidget = () => {
    return (
        <>
            <GrCart className="carrito" size={35}/>
            <h4 className="productos">0</h4>
        </>
        
    )   
}

export default CardWidget;


