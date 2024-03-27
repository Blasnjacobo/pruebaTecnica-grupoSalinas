import React, { useState } from "react";
import editar from "../../img/editar.svg";
import eliminar from "../../img/delete.svg";
import EditarEtapa from "./EditarEtapa";

const EtapasTabla = ({ etapas, handleEditEtapa, handleDeleteEtapa }) => {
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [selectedEtapaIndex, setSelectedEtapaIndex] = useState(null);

  const handleEditClick = (index) => {
    setSelectedEtapaIndex(index);
    setShowEditarModal(true);
  };

  const handleEditarEtapaClose = () => {
    setShowEditarModal(false);
    setSelectedEtapaIndex(null);
  };

  const handleEditarEtapaSave = (editedEtapaData) => {
    handleEditEtapa(selectedEtapaIndex, editedEtapaData);
    handleEditarEtapaClose();
  };

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
            <div
              onClick={() => handleEditClick(index)}
              className="etapa-editar"
            >
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

      {showEditarModal && (
        <div className="modal">
          <div className="modal-content">
            <EditarEtapa
              onClose={handleEditarEtapaClose}
              etapaData={etapas[selectedEtapaIndex]}
              onSave={handleEditarEtapaSave}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EtapasTabla;
