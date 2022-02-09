import "./Navbar.css"
import Button from "../Button/Button";
import CardWidget from "../CardWidget/CardWidget";
import "../CardWidget/CardWidget.css"



const Navbar = () =>{
    return (
      <nav>
          <p className="titulo">CASACAS</p>
          <ul>
              <Button label="Inicio" backgroundColor="#282828" colorText="White"/>
              <Button label="Premier League" backgroundColor="#00ff85" colorText="#38003c"/>
              <Button label="LaLiga" backgroundColor="#ffe000" colorText="White"/>
              <Button label="Vintage" backgroundColor="#CC7952" colorText="#ESBD77"/>
              <CardWidget />
              


          </ul>
      </nav>
    )
  }

  export default Navbar;