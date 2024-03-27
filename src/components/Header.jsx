import React from "react";
import hamburguesa from "../img/hamburguesa.svg";
import home from "../img/home.svg";
import blas from "../img/Blas.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-section1">
        <div className="icon-container">
          <img
            className="header-hamburguesa"
            src={hamburguesa}
            alt="hamburguesa menu"
          />
        </div>
        <div className="icon-container">
          <img className="header-home" src={home} alt="home img" />
        </div>
        <div className="separator"></div>
      </div>
      <div className="header-section2">
        <img className="header-user" src={blas} alt="user profile img" />
      </div>
    </div>
  );
};

export default Header;
