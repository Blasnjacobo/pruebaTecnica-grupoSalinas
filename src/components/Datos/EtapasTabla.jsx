import React from "react";

const EtapasTabla = ({ etapas, onEdit, onDelete }) => {
  return (
    <div>
      {etapas.map((etapa, index) => (
        <div key={index} className="mostrar-etapas-values">
          <section>
            <div>{etapa.initiativeTitle}</div>
          </section>
          <section>
            <div>{etapa.stageDescription}</div>
          </section>
          <section>
            <div>{etapa.stageDeliverable}</div>
          </section>
          <section>
            <div>{etapa.startDate}</div>
          </section>
          <section>
            <div>{etapa.endDate}</div>
          </section>
          <section>
            <div onClick={() => onEdit(index)}>Editar</div>
          </section>
          <section>
            <div onClick={() => onDelete(index)}>Eliminar</div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default EtapasTabla;
