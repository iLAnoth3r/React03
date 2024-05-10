import { useState } from "react";
import Tabla from "./assets/components/Listado";
import "./App.css";
import Formulario from "./assets/components/Formulario";
import { BaseColaboradores } from "./assets/components/BaseColaboradores";
// import colaboradores from "./assets/components/Listado";

function App() {
  const [listaData, setListaData] = useState(BaseColaboradores);

  return (
    <>
      <Formulario lista={{ listaData, setListaData }} />
      <Tabla lista={{ listaData, setListaData }} />
    </>
  );
}

export default App;
