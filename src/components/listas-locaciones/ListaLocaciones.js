// DEPENDENCIAS:
import React from "react";

// COMPONENTE:
import Locacion from "../../components/locacion/Locacion";

// HOJA DE ESTILOS CSS - IMAGENES:
import "./ListaLocaciones.css";

const ListaLocaciones = ({ conjuntoLocaciones }) => {
    return (
        <div className="lista">
            {conjuntoLocaciones.map((index_locacion) => (
                <Locacion 
                    key={index_locacion.id}
                    index_locacion={index_locacion}
                />
            ))}
        </div>
    )
}

export default ListaLocaciones;
