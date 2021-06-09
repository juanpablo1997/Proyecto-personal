// Dependencias:
import React from "react";

// COMPONENTE:
import Personaje from "../personaje/Personaje";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./ListaPersonajes.css";

const ListaPersonajes = ({ conjuntoPersonajes, guardarMasinformacion, guardarObtenerID, guardarIrmasinfo }) => {
  return (
    <div className="lista">
       {conjuntoPersonajes.map((index) => (
           <Personaje 
                key={index.id}
                index={index}
                guardarMasinformacion={guardarMasinformacion}
                guardarObtenerID={guardarObtenerID}
                guardarIrmasinfo={guardarIrmasinfo}
           />
       ))}
    </div>
  );
};

export default ListaPersonajes;
