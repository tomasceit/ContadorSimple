import * as React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header
      id="banner"
      className="
        banner-img
        d-flex
        justify-content-center
        w-100
        text-center
        overflow-hidden
      "
    >
      <div className="banner-content">
        <h2>Hola, somos Contador Simple.</h2>
        <h3>Convertimos tus oportunidades en éxitos.</h3>
        <a href="#que_ofrecemos">
          <button type="button" className="btn btn-informacion">
            + Información
          </button>
        </a>
      </div>
    </header>
  );
};

export default Banner;
