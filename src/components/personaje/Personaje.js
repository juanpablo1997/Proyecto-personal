// DEPENDENCIAS:
import React from "react";

// IMPORTACIÓN DE ESTILOS CSS:
import "./Personaje.css";

const Personaje = ({ index, guardarMasinformacion, guardarObtenerID }) => {
  const { id, image, name, gender, species, status } = index;
 
  let estado;
  if (status === "Alive") {
      estado = "simbolo-status";
  } else if (status === "Dead") {
      estado = "simbolo-status-dead";
  } else {
      estado = "simbolo-status-unk";
  }

  const obtenerMasInformacion = () => {
    guardarMasinformacion(true);
    guardarObtenerID(id);
  }

  return (
    <div 
      className="card-perdonaje"
      onClick={obtenerMasInformacion}
    >
      <div className="div-img hidden">
        <img src={image} alt="Personaje" className="card-img" />
      </div>
      <div className="card-cuerpo">
        <div className="card-texto">
          <h3 className="nombre-personaje">{name}</h3>
        </div>
        <div className="card-status">
          <div className={estado}></div>
          <p className="data-species">{status}</p>
        </div>
        <div className="card-texto">
          <label>Genero del personaje:</label>
          <p className="data">{gender}</p>
        </div>
        <div className="card-texto">
          <label>Especie de {name}:</label>
          <p className="data">{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
