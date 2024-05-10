import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import "./Formulario.css";

const Formulario = (lista) => {
  console.log(lista.lista.listaData);
  //   const [listaData, setListaData] = useState(BaseColaboradores);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [mail, setMail] = useState();
  const [age, setAge] = useState();
  const [rol, setRol] = useState();
  const [fono, setFono] = useState();

  const enviarFormulario = (e) => {
    e.preventDefault();
    lista.lista.setListaData([
      ...lista.lista.listaData,
      {
        id: id,
        nombre: name,
        correo: mail,
        edad: age,
        cargo: rol,
        telefono: fono,
      },
    ]);
  };

  const capturaId = (e) => {
    setId(e.target.value);
  };

  const capturaName = (e) => {
    setName(e.target.value);
  };

  const capturaMail = (e) => {
    setMail(e.target.value);
  };

  const capturaAge = (e) => {
    setAge(e.target.value);
  };

  const capturaRol = (e) => {
    setRol(e.target.value);
  };

  const capturaFono = (e) => {
    setFono(e.target.value);
  };

  return (
    <>
      <form className="caja" onSubmit={enviarFormulario}>
        <input name="idBase" onChange={capturaId} placeholder="Agregar ID" />
        <input
          name="nombreBase"
          onChange={capturaName}
          placeholder="Agregar Nombre"
        />
        <input
          name="mailBase"
          onChange={capturaMail}
          placeholder="Agregar Correo"
          type="email"
        />
        <input
          name="ageBase"
          onChange={capturaAge}
          placeholder="Agregar Edad"
        />
        <input
          name="rolBase"
          onChange={capturaRol}
          placeholder="Agregar Cargo"
        />
        <input
          name="fonoBase"
          onChange={capturaFono}
          placeholder="Agregar Teléfono"
        />
        <button> Agregar Colaborador </button>
      </form>
    </>
  );
};

export default Formulario;
