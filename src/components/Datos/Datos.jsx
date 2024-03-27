import React from "react";
import ProjectDescription from "./ProjectDescription";
import SearchProject from "./SearchProject";
import Asignaciones from "./Asignaciones";

const Datos = () => {
  return (
    <div className="datos-container">
      <div className="datos-proyectos">
        <ProjectDescription />
        <SearchProject />
      </div>
      <Asignaciones />
    </div>
  );
};

export default Datos;
