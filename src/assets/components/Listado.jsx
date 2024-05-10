import Table from "react-bootstrap/Table";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";

const colaboradores = (lista) => {
  //   const [data, setListaData] = useState(BaseColaboradores);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {lista.lista.listaData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.edad}</td>
              <td>{item.cargo}</td>
              <td>{item.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default colaboradores;
