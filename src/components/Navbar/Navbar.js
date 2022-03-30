import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import "./Navbar.css"
import Button from "../Button/Button";
import CardWidget from "../CardWidget/CardWidget";
import "../CardWidget/CardWidget.css"
import { NavLink } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

const Navbar = () => {
  
  const {cart } = useContext(CartContext);

  return (
    <nav>
      <div className="botonera">
        <NavLink to={`/`} className="logo">CASACAS</NavLink>
        <NavLink to={`/`} className="boton" className={({ isActive }) => isActive ? `categoriaActiva` : "categorias"}>Inicio</NavLink>
        <NavLink to={`category/premierleague`} className="boton" className={({ isActive }) => isActive ? `categoriaActiva` : "categorias"}>Premier League</NavLink>
        <NavLink to={`category/laliga`} className="boton" className={({ isActive }) => isActive ? `categoriaActiva` : "categorias"}>LaLiga</NavLink>
        <NavLink to={`category/vintage`} className="boton" className={({ isActive }) => isActive ? `categoriaActiva` : "categorias"}>Vintage</NavLink>

        {
          !(cart.length === 0) ? (
            <>
              <NavLink to={`cart`} className="boton"><CardWidget /></NavLink>
            </>
          ) : (
            <>
              <div className="boton"><CardWidget /></div>
            </>
          )
        }






      </div>
    </nav>
  )
}

export default Navbar;