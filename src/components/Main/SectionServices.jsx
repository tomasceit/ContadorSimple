const SectionServices = () => {
  return (
      <section id="servicios" className="main__article">
        <h2 className="main__title">¿Qué podemos hacer por usted?</h2>
        <section
          className="
          main--collapsed
          d-flex
          justify-content-evenly
          flex-wrap
        "
        >
          <div
            className="
            d-flex
            flex-column
            align-items-center
            my-5
            px-3
          "
          >
            <img
              src={require("../../media/persona_fisica.webp")}
              alt="personas fisicas"
            />
            <h3 className="my-4">PERSONAS FÍSICAS</h3>
            <p className="text-align-justify">
              <span className="d-block">Asesoramiento Tributario.</span>
              <span className="d-block">Ahorra con una mejor planificación fiscal y disfruta de lo que
              más te gusta hacer, que nosotros nos encargamos de tus
              impuestos.</span>
              <span className="bold">
                Monotributo - Impuesto a las Ganancias - Bienes Personales
              </span>
            </p>
          </div>
          <div
            className="
            d-flex
            flex-column
            align-items-center
            my-5
            px-3
          "
          >
            <img
              src={require("../../media/pymes.webp")}
              alt="pymes"
            />
            <h3 className="my-4">PYMES</h3>
            <p className="text-align-justify">
              <span className="d-block">Haga crecer su negocio.</span>{" "}
              Contador Simple te asesora y te apoya en todo el recorrido.
              Nuestros servicios flexibles y personalizados a cada empresa o
              negocio se adaptan a cualquier escenario al que se enfrente tu
              emprendimiento.
            </p>
          </div>
        </section>
      </section>
  );
}

export default SectionServices;
