import React from "react";
import Encabezado from "./Encabezado";

const MostrarEtapas = ({ etapas, handleDeleteEtapa }) => {
  return (
    <div>
      <Encabezado etapas={etapas} handleDeleteEtapa={handleDeleteEtapa} />
    </div>
  );
};

export default MostrarEtapas;
