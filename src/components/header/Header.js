// DEPENDENCIAS:
import React from "react";
import { Link } from "react-router-dom";

// HOJA DE ESTILOS CSS:
import "./Header.css";
import Logo_gris from "../../images/Logo_gris.svg";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/"><img src={Logo_gris} alt="Logo" /></Link>
      <div className="nav-contenido">

        {/* Contiene el menú */}
        <div className="nav-menu">
          {/* Contiene la lista del menú */}
          <ul className="nav-menu-ul">
            <li>
              <Link to="/" className="inicio">
                Inicio
              </Link>
            </li>

            {/* Desplegable */}
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle consultar" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Consultar
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="/Personajes" className="dropdown-item">Personajes</Link></li>
                    <li><Link to="/Locaciones" className="dropdown-item">Locaciones</Link></li>
                    <li><Link to="/Episodios" className="dropdown-item">Episodios</Link></li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
