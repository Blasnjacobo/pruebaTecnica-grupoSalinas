import React from "react";

const EtapasTabla = ({ etapas, onEdit, handleDeleteEtapa }) => {
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
            <div onClick={() => onEdit(index)} className="etapa-editar">
              Editar
            </div>
          </section>
          <section>
            <div
              onClick={() => handleDeleteEtapa(index)}
              className="etapa-eliminar"
            >
              Eliminar
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default EtapasTabla;
