import React from "react";
import information from "../../img/informacion.svg";

const ProjectDescription = () => {
  return (
    <div className="projectDescription-container">
      <section className="project-formulario">
        <div>ID Sistema ORC's</div>
        <input
          className="project-IDORC"
          defaultValue="0"
          style={{ paddingLeft: "5px" }}
        />
      </section>
      <section className="project-formulario">
        <div>Nombre del proyecto</div>
        <input />
      </section>
      <section className="project-formulario">
        <div>Descripción del proyecto</div>
        <input />
      </section>
      <section className="project-formulario">
        <div>Objectivos a los que contribuye el proyecto</div>
        <select defaultValue="objetivo">
          <option value="objetivo" disabled hidden>
            Selecciona un objetivo...
          </option>
          <option value="1">
            2021 CHGS Garantizar que los datos y estadistica relacionada con
            gente estén actualizados, sistematizados y sean útiles para la toma
            de decisiones.
          </option>
          <option value="2">
            2021 CHGS Asegurar que los Directivos de unidades (negocios y
            despachos) gestionen con base en el modelo de alto desempeño para el
            logro eficiente...
          </option>
          <option value="3">
            2021 CH AyC. Gestionar a los equipos Directivos bajo el Modelo de
            Alto Desempeño cuidando la implemetacion de los 6 pasos
          </option>
          <option value="4">
            2021 CH BOFF Fortalecer una cultura de alto desempeño impulsando la
            adopción del modelo de los 6 pasos.
          </option>
          <option value="5">
            2021 Totalplay Paso 6: Fomentar y consolidar el proceso de
            evaluación de desempeño en Grupo Totalplay alineado al Modelo de 6
            pasos
          </option>
          <option value="6">
            2021 CH EKT. Implementar e impulsar la adopción del modelo de los 6
            pasos como componente clave de la cultura de Elektra Marca,
            conectividad, ...
          </option>
        </select>
      </section>
      <section className="project-calendario">
        <div className="project-fecha">
          <div className="project-fechaIcon">
            <div>Fecha de Inicio</div>
            <img src={information} alt="information icon" />
          </div>
          <input type="date" />
        </div>
        <div className="project-fecha">
          <div className="project-fechaIcon">
            <div>Fecha Fin</div>
            <img src={information} alt="information icon" />
          </div>
          <input type="date" />
        </div>
      </section>
      <section className="project-formulario">
        <div className="proyecto-prioridad">Prioridad del proyecto</div>
      </section>
    </div>
  );
};

export default ProjectDescription;
