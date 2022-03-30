import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext"
import "./CardWidget.css"
import {GrCart} from "react-icons/gr"


const CardWidget = () => {

    const {getQuantity} = useContext(CartContext);

    return (
        <>
            <GrCart className="carrito" size={35}/>
            <h4 className="productos">{getQuantity()}</h4>
        </>
        
    )   
}

export default CardWidget;


