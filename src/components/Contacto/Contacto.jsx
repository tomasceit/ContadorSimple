import * as React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <section id="contacto">
      <div className="container">
        <button className="main--collapse btn btn-primary" type="button">
          <h2 className="article__title">Haga su consulta aquí</h2>
        </button>
        <form
          action="https://formsubmit.co/26529d4aa9ba9c3dc15fc20805efc4ce"
          method="POST"
        >
          <div className="d-flex flex-column">
            <div className="d-flex my-3 justify-content-between w-100">
              <div className="form-floating">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="contactName"
                  placeholder="Nombre *"
                  required
                />
                <label htmlFor="contactName">Nombre</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  name="apellido"
                  className="form-control"
                  id="contactLastName"
                  placeholder="Apellido *"
                  required
                />
                <label htmlFor="contactLastName">Apellido</label>
              </div>
              <div className="d-none">
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/home#banner"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva consulta para Contador Simple!"
                />
                <input type="hidden" name="_captcha" value="false" />
              </div>
            </div>
            <div className="d-flex my-3 justify-content-between w-100">
              <div className="form-floating">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="contactEmail"
                  placeholder="Email *"
                  required
                />
                <label htmlFor="contactEmail">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="tel"
                  name="tel"
                  className="form-control"
                  id="contactTel"
                  placeholder="Telefono *"
                  required
                />
                <label htmlFor="contactTel">Telefono</label>
              </div>
            </div>
            <label htmlFor="contactMessage" className="d-none">
              Message
            </label>
            <textarea
              placeholder="Escriba su consulta"
              name="message"
              id="contactMessage"
              cols="30"
              rows="5"
              className="form-control my-3"
            ></textarea>
            <button type="submit" className="btn btn-contacto my-3">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
