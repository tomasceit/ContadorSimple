import * as React from "react";
import './Contacto.css'

const Contacto = () => {
  return (
    <section id="contacto">
      <h2 className="main__title container">Haga su consulta aquí</h2>
      <div className="p-5 mt-4">
        <div className="container">
          <form className="form">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="contactName"
                placeholder="Nombre *"
                required
              />
              <label htmlFor="contactName">Nombre *</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="contactLastName"
                placeholder="Apellido *"
                required
              />
              <label htmlFor="contactLastName">Apellido *</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                placeholder="Email *"
                required
              />
              <label htmlFor="contactEmail">Email *</label>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="contactTel"
                placeholder="Telefono *"
                required
              />
              <label htmlFor="contactTel">Telefono *</label>
            </div>
            <div className="form__textarea">
              <label htmlFor="contactMessage" className="d-none">
                Example textarea
              </label>
              <textarea
                placeholder="Escriba su consulta"
                id="contactMessage"
                cols="30"
                rows="5"
                className="form-control my-3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-contacto my-3">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
