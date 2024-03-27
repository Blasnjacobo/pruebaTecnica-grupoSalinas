import React from "react";
import datos from "../img/datos-generales.svg";
import plan from "../img/plandetrabajo.svg";

const Secciones = ({ setSection }) => {
  const handleDatos = () => {
    setSection("datos");
  };
  const handlePlan = () => {
    setSection("plan");
  };
  return (
    <div className="sections-container">
      <section className="section-option" onClick={handleDatos}>
        <img src={datos} alt="datos generales img" />
        <div>DATOS</div>
      </section>
      <section className="section-option" onClick={handlePlan}>
        <img src={plan} alt="plan de trabajo img" />
        <div>PLAN</div>
      </section>
    </div>
  );
};

export default Secciones;
