import React, { useState } from "react";
import information from "../../img/informacion.svg";

const AgregarEtapa = ({ onClose, setFormData, formData, onFormSubmit }) => {
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.initiativeTitle ||
      !formData.stageDescription ||
      !formData.startDate ||
      !formData.endDate
    ) {
      alert("Please fill in all mandatory fields");
      return;
    }
    onFormSubmit(formData);
    onClose();
    setFormData({
      initiativeTitle: "",
      stageDescription: "",
      stageDeliverable: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="agregar-modal">
      <h5>Agregar etapa</h5>
      <form onSubmit={handleSubmit}>
        <section className="agregar-gap">
          <div>
            Título de la iniciativa: <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            name="initiativeTitle"
            value={formData.initiativeTitle}
            onChange={handleChange}
          />
        </section>
        <section className="agregar-gap" style={{ marginTop: "5px" }}>
          <div>
            Descripción de la etapa: <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            name="stageDescription"
            value={formData.stageDescription}
            onChange={handleChange}
            className="modal-descripcion agregar-gap"
          />
        </section>
        <section>
          <div className="etapa-infoIcon">
            <div>Entregable de la etapa:</div>
            <img
              src={information}
              alt="information icon"
              className="etapa-Icon"
            />
          </div>
          <input
            type="text"
            name="stageDeliverable"
            value={formData.stageDeliverable}
            onChange={handleChange}
          />
        </section>
        <section>
          <div className="etapa-infoIcon">
            <div>
              Fecha inicio: <span style={{ color: "red" }}>*</span>
            </div>
            <img
              src={information}
              alt="information icon"
              className="etapa-Icon"
            />
          </div>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </section>
        <section>
          <div className="etapa-infoIcon">
            <div>
              Fecha fin: <span style={{ color: "red" }}>*</span>
            </div>
            <img
              src={information}
              alt="information icon"
              className="etapa-Icon"
            />
          </div>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </section>
        <section className="etapa-enviar">
          <button
            type="button"
            className="etapa-cancelar"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button type="submit" className="etapa-enviar-agregar">
            Agregar
          </button>
        </section>
      </form>
    </div>
  );
};

export default AgregarEtapa;
