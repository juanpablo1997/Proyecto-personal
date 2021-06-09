// DEPENDENCIA:
import React from "react";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./Locacion.css";

const Locacion = ({ index_locacion }) => {
  const { name, type, dimension } = index_locacion;

  return (
    <div className="card-locacion">
      <div className="card-cuerpo-locacion">
        <h3 className="nombre-locacion">{name}</h3>
        <div className="card-texto-locacion">
          <label>Tipo de locacion:</label>
          <p className="data-locacion">{type}</p>
        </div>
        <div className="card-texto-locacion">
          <label>Dimensión:</label>
          <p className="data-locacion">{dimension}</p>
        </div>
      </div>
    </div>
  );
};

export default Locacion;
