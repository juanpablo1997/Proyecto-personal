// DEPENDENCIAS:
import React from "react";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./Footer.css";
import Logo_gris from "../../images/Logo_gris.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo_gris} alt="Logo" />
      <div className="informacion">
        <p className="enlace">Para ver la serie te dejo el enlace:</p>
        <a
          href="https://www.netflix.com/search?q=rick&jbv=80014749"
          target="_blank"
          rel="noreferrer"
        >
          <p className="enlace-netflix">
            https://www.netflix.com/search?q=rick&jbv=80014749
          </p>
        </a>
        <p className="by">
          Código por <span>Juan Pablo</span> 2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
