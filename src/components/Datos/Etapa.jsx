import React, { useState } from "react";
import agregar from "../../img/agregar.svg";
import AgregarEtapa from "./AgregarEtapa";
import MostrarEtapas from "./MostrarEtapas";

const Etapa = () => {
  const [showAgregarEtapa, setShowAgregarEtapa] = useState(false);
  const [etapas, setEtapas] = useState([]);
  const [formData, setFormData] = useState({
    initiativeTitle: "",
    stageDescription: "",
    stageDeliverable: "",
    startDate: "",
    endDate: "",
  });

  console.log(etapas);
  console.log(formData);

  const handleClickAgregar = () => {
    setShowAgregarEtapa(true);
  };

  const handleCloseAgregarEtapa = () => {
    setShowAgregarEtapa(false);
  };

  const handleOutsideClick = (e) => {
    if (showAgregarEtapa && !e.target.closest(".modal-content")) {
      setShowAgregarEtapa(false);
    }
  };

  const handleFormSubmit = (etapaData) => {
    setEtapas([...etapas, etapaData]);
    handleCloseAgregarEtapa();
  };

  const handleDeleteEtapa = (index) => {
    const updatedEtapas = etapas.filter((_, i) => i !== index);
    setEtapas(updatedEtapas);
  };

  return (
    <div className="etapa-container" onClick={handleOutsideClick}>
      <div className="agregar-etapa" onClick={handleClickAgregar}>
        <img src={agregar} alt="agregar icono" />
        <div>Agregar etapa</div>
      </div>
      {showAgregarEtapa && (
        <div className="modal">
          <div className="modal-content">
            <AgregarEtapa
              onClose={handleCloseAgregarEtapa}
              setFormData={setFormData}
              formData={formData}
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}
      {etapas.length > 0 && (
        <MostrarEtapas etapas={etapas} handleDeleteEtapa={handleDeleteEtapa} />
      )}
    </div>
  );
};

export default Etapa;
