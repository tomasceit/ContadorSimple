import "./Contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="py-5">
      <section className="my-5">
        <section className="container">
          <h2 className="main__title py-3">Haga su consulta aquí</h2>
          <form
            action="https://formsubmit.co/26529d4aa9ba9c3dc15fc20805efc4ce"
            method="POST"
          >
            <section className="d-flex flex-column">
              <section className="d-flex my-3 justify-content-between w-100">
                <section className="form-floating">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    id="contactName"
                    placeholder="Nombre *"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="contactName">Nombre</label>
                </section>
                <section className="form-floating">
                  <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    id="contactLastName"
                    placeholder="Apellido *"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="contactLastName">Apellido</label>
                </section>
                <section className="d-none">
                  <input
                    type="hidden"
                    name="_next"
                    value="https://contador-simple.netlify.app/"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva consulta para Contador Simple!"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                </section>
              </section>
              <section className="d-flex my-3 justify-content-between w-100">
                <section className="form-floating">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder="Email *"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="contactEmail">Email</label>
                </section>
                <section className="form-floating">
                  <input
                    type="tel"
                    name="tel"
                    className="form-control"
                    id="contactTel"
                    placeholder="Telefono *"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="contactTel">Telefono</label>
                </section>
              </section>
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
            </section>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Contacto;