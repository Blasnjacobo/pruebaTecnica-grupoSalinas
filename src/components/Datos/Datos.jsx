import React from "react";
import ProjectDescription from "./ProjectDescription";
import SearchProject from "./SearchProject";
import Asignaciones from "./Asignaciones";
import Etapa from "./Etapa";

const Datos = () => {
  return (
    <div className="datos-container">
      <div className="datos-proyectos">
        <ProjectDescription />
        <SearchProject />
      </div>
      <Asignaciones />
      <Etapa />
    </div>
  );
};

export default Datos;
