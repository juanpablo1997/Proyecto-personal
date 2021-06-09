// DEPENDENCIAS:
import React, { useState } from "react";

// ESTILOS CSS - IMAGENES:
import "./FormularioContacto.css";

const FormularioContacto = () => {
  const [datos, guardarDatos] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [error, guardarError] = useState(false);

  const [correoenviado, guardarCorreoenviado] = useState(false);

  const { nombre, correo, mensaje } = datos;

  const comprobarCambios = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarEmailPrueba = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
      guardarError(true);
      return;
    } else {
      guardarCorreoenviado(true);
      setTimeout(function () {
        guardarCorreoenviado(false);
      }, 2000);
      setTimeout(function () {
        guardarDatos({
          nombre: "",
          correo: "",
          mensaje: "",
        });
      }, 2000);
    }

    guardarError(false);
  };

  return (
    <div className="componente-formulario">
      <form className="formulario" onSubmit={enviarEmailPrueba}>
        <input
          type="text"
          name="nombre"
          value={nombre}
          className="input-formulario"
          placeholder="Nombre completo"
          onChange={comprobarCambios}
        />

        <input
          type="email"
          name="correo"
          value={correo}
          className="input-formulario"
          placeholder="Correo electrónico"
          onChange={comprobarCambios}
        />

        <textarea
          className="text-area"
          name="mensaje"
          value={mensaje}
          placeholder="Mensaje"
          onChange={comprobarCambios}
        ></textarea>

        <button type="submit" className="boton-formulario">
          Enviar mensaje
        </button>
        {error ? (
          <p className="error">Hubo un error. Los campos son obligatorios</p>
        ) : null}
        {correoenviado ? (
          <p className="exito">El mensajé se envió con éxito</p>
        ) : null}
      </form>
    </div>
  );
};

export default FormularioContacto;
