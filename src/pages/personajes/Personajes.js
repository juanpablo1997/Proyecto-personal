// DEPENDENCIAS:
import React, { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTES:
import ListaPersonajes from "../../components/listas-personajes/ListaPersonajes";
import MasInformacion from "../../components/mas-informacion/MasInformacion";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./Personajes.css";
import Personajes_2 from "../../images/Personajes.svg";

const Personajes = () => {
  // Declaro useState:
  const [conjuntoPersonajes, guardarPersonajes] = useState([]);
  const [masinformacion, guardarMasinformacion] = useState(false);
  const [obtnerID, guardarObtenerID] = useState(0);

  /* Páginador */
  const [paginaactual, guardarPaginaactual] = useState(1);

  useEffect(() => {
    // Función que consume la API:
    const obtenerPersonajes = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${paginaactual}`)
        .then((reponse) => {
          guardarPersonajes(reponse.data.results);

          /* Calcular el total de páginas */
          /* const calcularTotalPaginas = Math.ceil(reponse.totalHits / 30);
          guardarTotalpaginas(calcularTotalPaginas); */

          const jumbotron = document.querySelector(".jumbotron");
          jumbotron.scrollIntoView({ behavior: "smooth" });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    obtenerPersonajes();
  }, [guardarPersonajes, paginaactual]);

  /* Define la página anterior */
  const paginaAnterior = () => {
    const nuevaPgActual = paginaactual - 1;

    /* Si llegas al numero cero para */
    if (nuevaPgActual === 0) {
      return;
    }

    guardarPaginaactual(nuevaPgActual);
  };

  /* Define la página siguiente */
  const paginaSiguiente = () => {
    const nuevaPgActual = paginaactual + 1;

    /* Si llegas hacer mayor que el total de páginas
    entonces para */
    if (nuevaPgActual > 671) {
      return;
    }

    guardarPaginaactual(nuevaPgActual);
  };

  // Componente condicional:
  const componente = masinformacion ? (
    <MasInformacion
      className="mas-info"
      guardarMasinformacion={guardarMasinformacion}
      obtnerID={obtnerID}
    />
  ) : null;

  return (
    <div className="pagina-perdonaje jumbotron">
      <section className="seccion-banner">
        <div className="contenedor-img-h2">
          <img src={Personajes_2} alt="Imagen" />
          <div>
            <p>PERSONAJES DE LA SERIE</p>
            <h2>RICK AND MORTHY</h2>
          </div>
        </div>
      </section>

      <section className="mas-informacion">{componente}</section>

      <section className="contenido">
        <ListaPersonajes
          conjuntoPersonajes={conjuntoPersonajes}
          guardarMasinformacion={guardarMasinformacion}
          guardarObtenerID={guardarObtenerID}
        />
      </section>

      {/* Botines de paginación */}
      <div className="paginador">
        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="botones-pag"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}

        {paginaactual === 671 ? null : (
          <button
            type="button"
            className="botones-pag"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
};

export default Personajes;
