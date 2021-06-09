// DEPENDENCIAS:
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MasInformacion.css";

const MasInformacion = ({ guardarMasinformacion, obtnerID }) => {
  const [personajeID, guardarPersonaje] = useState({});

  useEffect(() => {
    obtenerPersonaje();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obtnerID]);

  
  // Función que consume la API:
  const obtenerPersonaje = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${obtnerID}`)
      .then((reponse) => {
        guardarPersonaje(reponse.data);
        const jumbotron2 = document.querySelector(".jumbotron2");
        jumbotron2.scrollIntoView({behavior: "smooth"});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { image, name, type, created, episode, origin } = personajeID;

  // Para saber si un objeto contiene inforacion dentro.
  // si está vacío.
  if (Object.keys(personajeID).length === 0) {
    return null;
  }

  const obtenerMasInformacion = () => {
    guardarMasinformacion(false);
  };

  return (
    <div className="contenedor-masinformacion jumbotron2">
      <h2 className="titulo-seccion-info">Información adicional</h2>
      <div className="masinformacion">
        <div className="imagen-masinformacion">
          <img className="img-info" src={image} alt="Imagen"/>
        </div>
        <div className="cuerpo-masinformacion">
          <h2 className="nombre-masinformacion">{name}</h2>
          <div className="informacion-adicional">
            <p className="data-info">{type}</p>
            <label>Personaje creado:</label>
            <p className="data-info">{created}</p>
            <label>Epísodios en los que aparece:</label>
            <p className="data-info">{episode.length} episodios</p>
            <label>Origen del personaje:</label>
            <p className="data-info">{origin.name}</p>
          </div>
          <button
            className="boton-masinformacion"
            onClick={obtenerMasInformacion}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MasInformacion;
