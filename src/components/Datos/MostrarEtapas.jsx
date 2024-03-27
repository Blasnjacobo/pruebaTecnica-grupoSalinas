import React from "react";
import editar from "../../img/editar.svg";
import eliminar from "../../img/delete.svg";

const MostrarEtapas = ({ etapas }) => {
  console.log(etapas);
  return (
    <div className="mostrar-etapas-container">
      <div className="mostrar-etapas-titulo">Etapas</div>
      <div className="mostrar-etapas">
        <section>
          <div>Titulo</div>
        </section>
        <section>
          <div>descripción</div>
        </section>
        <section>
          <div>Entregable</div>
        </section>
        <section>
          <div>Fecha Inicio</div>
        </section>
        <section>
          <div>Fecha Fin</div>
        </section>
        <section>
          <img src={editar} alt="editar logo" className="etapa-icono-display" />
        </section>
        <section>
          <img
            src={eliminar}
            alt="eliminar logo"
            className="etapa-icono-display"
          />
        </section>
      </div>
    </div>
  );
};

export default MostrarEtapas;
