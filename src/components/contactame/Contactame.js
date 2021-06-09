// DEPENDENCIAS:
import React from "react";

// COMPONENTES:
import FormularioContacto from "../formulario-contacto/FormularioContacto";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./Contactame.css";

const Contactame = () => {
  return (
    <div className="pagina-contactame">
      <div className="row p">
        <div className="col parte-contacto">
            <h2>Contáctame</h2>
            <h6>Déjame tus datos</h6>
            <div className="datos-contacto">
                <p>Cll 48E # 99A - 29</p>
                <p><span>Teléfono:</span> (+57) 583 83 89</p>
                <p><span>Celular:</span> 300 636 39 46</p>
                <p>juanpabloorozco15@gmail.com</p>
            </div>
        </div>

        <div className="col parte-formulario">
            <FormularioContacto />
        </div>

      </div>
    </div>
  );
};

export default Contactame;
