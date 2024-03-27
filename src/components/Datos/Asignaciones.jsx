import React from "react";

const Asignaciones = () => {
  return (
    <div className="datos-asignaciones">
      <section>
        <div>Responsables del proyecto</div>
        <input placeholder="Agregar Responsable del proyecto..." />
      </section>
      <section>
        <div>Administrador</div>
        <select defaultValue="objetivo" id="mySelect">
          <option value="objetivo" disabled hidden>
            Agregar al administrador...
          </option>
          <option value="IA" className="admin-user">
            <div>Israel Ayala Vazquez</div>
          </option>
          <option value="AL" className="admin-user">
            <div>Adrian Laurel Isidor</div>
          </option>
        </select>
      </section>
      <section>
        <div>Involucrados (opcional)</div>
        <input placeholder="Agregar Involucrado..." />
      </section>
    </div>
  );
};

export default Asignaciones;
