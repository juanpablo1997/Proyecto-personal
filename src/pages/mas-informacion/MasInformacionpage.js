// DEPENDENCIAS:
import React from "react";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./MasInformacion.css";
import justin from "../../images/Justin.jpg";
import Dan from "../../images/Dan.jpg";

const MasInformacion = () => {
  return (
    <div className="contenedor-mas-informacion jumbotronmas">
      <div className="contenedor-mas-informacion-info">
        <div className="titulo-mas-informcion">
          <p className="pre-titulo">Más información sobre</p>
          <h2>Rick and Morty</h2>
        </div>

        {/* Sección datos generales */}
        <section className="seccion-datos-generales">
          {/* Titulo de la seccion datos generales */}
          <h3 className="sub-titulo-datos-generales">Datos generales</h3>

          {/* Cuerpo */}
          <div className="contenedor-cuerpo">
            {/* Primera parte - informacion*/}
            <div className="datos">
              <div className="general i">
                <h4>Información</h4>
                <label>Título de la serie</label>
                <p>Rick and Morty</p>
                <label>Creado por</label>
                <p>Justin Roiland y Dan Harmon</p>
                <label>Números de temporadas</label>
                <p>5 temporadas</p>
                <label>Número de episodios</label>
                <p> 41 episodios</p>
              </div>

              {/* Producción */}
              <div className="produccion i">
                <h4>Producción</h4>
                <label>Productores</label>
                <p>Dan Harmon</p>
                <p>Justin Roiland</p>
                <p>James A. Fino</p>
                <p>Joe Russo II</p>
                <label>Empresa productora</label>
                <p>Justin Roiland's Solo Vanity</p>
                <p>Harmonious Claptrap</p>
              </div>

              {/* Lanzamiento */}
              <div className="produccion i">
                <h4>Lanzamiento</h4>
                <label>Medio de difusión</label>
                <p>Adult Swim</p>
                <label>Cakificación edades</label>
                <p>TV 14 DLSV</p>
                <label>Formato de imagen</label>
                <p>16:9 HDTV</p>
                <label>Fecha de lanzamiento</label>
                <p>2 de septiembre de 2013</p>
              </div>
            </div>

            {/* Segunda parte - creadores */}
            <div className="creadores">
              {/* Título de creadores */}
              <h4>Creadores de la serie</h4>

              {/* Cuerpo creadores */}
              <div className="contenedor-creadores">

                <div className="contenedor-creador">
                  <img
                    className="creadores-img"
                    src={justin}
                    alt="Justin Roiland"
                  />
                  <p>Justin Roiland</p>
                </div>

                <div className="contenedor-creador">
                  <img 
                    className="creadores-img" 
                    src={Dan} 
                    alt="Dan Harmon" 
                    />
                    <p>Dan Harmon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="titulo-mas-informcion">
          <p className="pre-titulo">Algunos datos sobre</p>
          <h2>Escritura y temas de la serie</h2>
        </div>

        {/* Sección de escritura de la serie */}
        <section className="seccion-escritura">
          <h3 className="sub-titulo-escritura">Escritura</h3>
          <p className="parrafo-escritura">
            La fórmula general en Rick y Morty consiste en la yuxtaposición de
            dos escenarios que confluyen. Por un lado se muestran las aventuras
            que vive un abuelo extremadamente egoísta y alcohólico por lo vasto
            y desconocido del espacio intergaláctico o interdimensional, el cual
            arrastra a su nieto para que viaje con él. Estas aventuras se
            intercalan en cada episodio con dramas domésticos familiares más
            propios del género sitcom.4​5​ Dan Harmon describe esta fusión de
            ciencia ficción y ambiente familiar como una mezcla de influencias
            entre las dos obras de Matt Groening: Los Simpson y Futurama.6​ Por
            otro lugar, el coautor Justin Roiland comunicó la intención de los
            creadores de que la serie sobrepasara la continuidad tradicional en
            la televisión, optando así por storylines discontinuas, «no fijadas
            por reglas». Roiland describe cada episodio como «su propio punto
            de vista».
          </p>
        </section>

        {/* Sección de temas */}
        <section className="seccion-temas">
        <h3 className="sub-titulo-temas">Temas</h3>
          <p className="parrafo1-temas">
          Existe una discusión concerniente a los espectadores acerca de la filosofía en Rick y Morty. La mayoría de veces la serie adopta una perspectiva existencialista, mientras Harmon describe a Rick como un anarquista que no acepta que le digan lo que debe hacer25​. Otras filosofías se materializan a través de diferentes personajes. A través de Jerry se muestra la pasividad trágica de un ser humano patético pero cómico. Morty y Summer acaban aceptando la futilidad de su propia existencia tras el capítulo Televisión interdimensional (en inglés, Rixty Minutes).
          </p>
          <p className="parrafo2-temas">
          Los principales temas tratados son el nihilismo de Nietzsche, el existencialismo de Sartre o el terror cósmico de H. P. Lovecraft; todos ellos desde el punto de vista disidente y científico de Rick. No obstante, el resto de los personajes se encargan de adaptar estas teorías filosóficas a la vida cotidiana: la familia y su importancia, la amistad, el bien y el mal o el amor, todo ello en el plano más banal, y reciben la crítica existencialista más dura propia de la serie.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MasInformacion;
