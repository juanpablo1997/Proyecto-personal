// DEPENDENCIAS:
import React, { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTES:
import ListaLocaciones from "../../components/listas-locaciones/ListaLocaciones";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./Locaciones.css";
import Locaciones_2 from "../../images/Locaciones.svg";

const Locaciones = () => {
  // Declaro useState:
  const [conjuntoLocaciones, guardarLocaciones] = useState([]);

  useEffect(() => {
    obtenerLocaciones();
  }, [guardarLocaciones]);

  // Función que consume la API:
  const obtenerLocaciones = () => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((reponse) => {
        guardarLocaciones(reponse.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="seccion-banner">
        <div className="contenedor-img-h2">
          <img src={Locaciones_2} alt="Imagen" />
          <div>
            <p>LOCACIONES DE LA SERIE</p>
            <h2>RICK AND MORTHY</h2>
          </div>
        </div>
      </section>

      <section className="contenido">
        <ListaLocaciones conjuntoLocaciones={conjuntoLocaciones}/>
      </section>
    </div>
  );
};

export default Locaciones;
