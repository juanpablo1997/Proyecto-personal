// DEPENDENCIAS:
import React from "react";
import { Link } from "react-router-dom";

// COMPONENTES:
import Contactame from "../../components/contactame/Contactame";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./Inicio.css";
import Imagen from "../../images/Imagen.svg";
import Personajes from "../../images/Personajes.svg";
import Locaciones from "../../images/Locaciones.svg";
import Episodios from "../../images/Episodios.svg";
import Familia from "../../images/Familia Smith Sanchez.svg";

const Inicio = () => {

  const irArriba = () => {
    const jumbotronmas = document.querySelector(".jumbotronmas");
    jumbotronmas.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="cuerpo-inicio">

      {/* Seccion información principal */}
      <section className="seccion-informacion">
        
        {/* Parte información */}
        <div className="contenedor-informacion-general">
          
          {/* Imagen */}
          <div className="contenedor-imagen">
            <img className="imagen" src={Imagen} alt="imagen" />
          </div>
          
          {/* Informacion general sobre la serie */}
          <div className="contenedor-informacion">
            <h1 className="titulo-principal">RICK AND MORTY</h1>
            <p className="parrafo">
              Esta serie cuenta las aventuras de Rick, un científico loco,
              egoísta y alcohólico que, junto a su nieto Morthy, viven momentos
              que mezclan problemas familiares junto a viajes en el tiempo,
              intergalácticos o, incluso, a través del tiempo. Todo esto se vive
              a través de una base de humor negro y sátira profunda a la
              sociedad.
            </p>
          </div>
        </div>

        {/* Parte de enlaces */}
        <div className="enlaces-informacion">
          <a href="#contactme"><button className="enlaces-info-boton contactame">Contáctame</button></a>
          <Link to="/Mas-información"><button className="enlaces-info-boton mas" onClick={irArriba}>Más información</button>
          </Link>
        </div>
      </section>

      {/* Sección proposito del sitio */}
      <section className="seccion-proposito">
        <h2 className="titulo-proposito">Propósito del sitio</h2>
        <p className="proposito">
          "El proposito por el cual se creó este sitio fue poner en práctica
          algunos conocimientos básicos sobre el consumo de APIS, el manejo de
          Hooks y otros conceptos. También poder desarrollar creativamente un
          ambiente agradable para el usuario mediante ilustraciones hechas en
          Illustrator además dejar ver el manejo de la herramienta y el lenguaje para
          los estilos CSS y el framework Bootstrap 4".
        </p>
      </section>

      {/* Sección sobre el argumento la serie */}
      <section className="seccion-informacion-dos">
        <div className="seccion-informacion-dos-info">
          <div className="contenedor-info-argumento">
            <h3 className="tituloa-argumento">Argumento de la serie</h3>
              <p className="parrafo-argumento">Rick Sánchez es un ejemplo del típico "científico loco". Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo y con poca cordura. Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese momento se encuentra con su nieto Morty; un chico de 14 años de edad, tímido y no muy listo...</p>
              <Link to="/Mas-información" className="enlace-mas-sobre-mi">Más sobre la serie</Link>
          </div>
        </div>
        
        <div className="seccion-informacion-dos-imagen">
          <img  className="imagen-familia" src={Familia} alt="Familia Smith Sanchez"/>
        </div>
      </section>
      
      {/* Sección tipos de consultas */}
      <h2 className="titulo-consultas">Tipos de consultas</h2>
      <div className="container consultas">
        <section className="row">
          <div className="col tipo">
            <div className="col-informacion">
              <img className="iconos" src={Personajes} alt="Personajes" />
              <h3>Personajes</h3>
            </div>
            <Link to="/Personajes" className="ver-mas">
              Ver más
            </Link>
          </div>
          <div className="col tipo">
            <div className="col-informacion">
              <img className="iconos" src={Locaciones} alt="Personajes" />
              <h3>Locaciones</h3>
            </div>
            <Link to="/Locaciones" className="ver-mas">
              Ver más
            </Link>
          </div>
          <div className="col tipo">
            <div className="col-informacion">
              <img className="iconos" src={Episodios} alt="Personajes" />
              <h3>Episodios</h3>
            </div>
            <Link to="/Episodios" className="ver-mas">
              Ver más
            </Link>
          </div>
        </section>
      </div>

      {/* Sección de video trailer serie */}
      <section className="seccion-video-informacion">
          <h2 className="titulo-trailer">Trailer de Rick and Morthy temporada 1</h2>
          <iframe className="video" width="570" height="325" src="https://www.youtube.com/embed/E8cXKMR9a1Q" title="YouTube video player"></iframe>
      </section>

      <section 
        id="contactme"
        className="contactame-i"
      >
        <Contactame />
      </section>
     
      {/* Seccion de contacto */}
      <h2 className="titulo-contacto">Contacto personal</h2>
        <section className="seccion-contacto">
          <div className="informacion-contacto">
            <div className="contacto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <p>+57 300 636 39 46</p>
            </div>
            <div className="contacto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
              <p>juanpabloorozco15@gmail.com</p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Inicio;
