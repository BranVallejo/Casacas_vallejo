import "./Navbar.css"
import Button from "../Button/Button";
import CardWidget from "../CardWidget/CardWidget";
import "../CardWidget/CardWidget.css"



const Navbar = () =>{
    return (
      <nav>
          <div className="Botonera">
              <p className="titulo" className="boton">CASACAS</p>
              <Button className="boton" label="Inicio" />
              <Button className="boton" label="Premier League" />
              <Button className="boton" label="LaLiga" />
              <Button className="boton" label="Vintage" />
              <div className="boton"><CardWidget /></div>
              


          </div>
      </nav>
    )
  }

  export default Navbar;