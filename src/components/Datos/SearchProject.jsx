import React from "react";

const SearchProject = () => {
  return (
    <div className="searchProject-container">
      <section className="project-searchSection">
        <div>ID Proyecto</div>
        <div className="proyecto-buscar">
          <input
            placeholder="Escribe el número de ID Proyectos Sipres"
            style={{ paddingLeft: "5px" }}
          />
          <div>Buscar Proyecto</div>
        </div>
      </section>
      <section className="project-searchSection">
        <div>Nombre del proyecto</div>
        <input />
      </section>
      <section className="project-searchSection">
        <div>Descripción del proyecto</div>
        <input />
      </section>
      <section className="project-creation">
        <div className="no-capex-opex">
          <div>Fecha de creación</div>
          <input type="text" id="dateInput" placeholder="dd-mm-aaaa" />
        </div>
        <div className="capex-opex">
          <div>
            <div>Capex</div>
            <input />
          </div>
          <div>
            <div>Opex</div>
            <input />
          </div>
        </div>
      </section>
      <section className="proyecto-signature">
        <div>
          <div>Pilar del proyecto</div>
          <input type="text" id="textInput" />
        </div>
        <div>
          <div>Clasificación Comité de Inversión</div>
          <input type="text" id="textInput" />
        </div>
      </section>
    </div>
  );
};

export default SearchProject;
