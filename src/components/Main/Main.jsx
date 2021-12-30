import * as React from "react";
import './Main.css'

const Main = () => {
  return (
    <div className="container">
      {/* Seccion que ofrecemos */}
      <article id="que_ofrecemos" className="main__article">
        <button
          className="main--collapse btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_que_ofrecemos"
          aria-controls="collapse_que_ofrecemos"
        >
          <h2 className="article__title">¿Qué ofrecemos?</h2>
        </button>
        <section
          className="main--collapsed collapse show"
          id="collapse_que_ofrecemos"
        >
          <p className="card card-body article__text">
            Contador Simple ofrece una amplia gama de servicios de consultoría
            en materia impositiva, financiera y de administración. Trabajamos
            junto con nuestros clientes de principio a fin centrándonos en sus
            necesidades a la vez que producimos nuevas ideas, desarrollamos
            estrategias efectivas y diseñamos solucionaes escalables de alta
            calidad.
            <span className="bold">Contáctenos para obtener más información. </span>
          </p>
        </section>
      </article>
      {/* Seccion quienes somos  */}
      <article id="quienes_somos" className="main__article">
        <button
          className="main--collapse btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_quienes_somos"
          aria-controls="collapse_quienes_somos"
        >
          <h2 className="article__title">¿Quiénes somos?</h2>
        </button>
        <section
          className="main--collapsed collapse show"
          id="collapse_quienes_somos"
        >
          <p className="card card-body article__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh id
            tellus odio quis. Ullamcorper in condimentum aliquet quam vel
            aliquam ornare. Imperdiet pharetra risus proin sed. Molestie massa
            urna gravida fringilla vulputate ultrices egestas. Eget egestas
            proin nunc, proin sodales congue. A massa pretium nisl, risus leo
            morbi iaculis. Dictumst quisque netus quam nec aliquet. Tellus fusce
            purus urna sagittis.
          </p>
          <p className="card card-body article__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh id
            tellus odio quis. Ullamcorper in condimentum aliquet quam vel
            aliquam ornare. Imperdiet pharetra risus proin sed. Molestie massa
            urna gravida fringilla vulputate ultrices egestas. Eget egestas
            proin nunc, proin sodales congue. A massa pretium nisl, risus leo
            morbi iaculis. Dictumst quisque netus quam nec aliquet. Tellus fusce
            purus urna sagittis.
          </p>
        </section>
      </article>

      {/* Seccion servicios */}
      <section id="servicios" className="main__article">
        <button
          className="main--collapse btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse_servicios"
          aria-controls="collapse_servicios"
        >
          <h2 className="article__title">¿Qué podemos hacer por usted?</h2>
        </button>
        <section
          className="
            main--collapsed
            collapse
            show
            d-flex
            justify-content-evenly
            flex-column
            mx-5
          "
          id="collapse_servicios"
        >
          <div
            className="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              mt-5
            "
          >
            <img src={require("../../media/persona_fisica.png")} alt="personas fisicas" />
            <h3 className="my-4">PERSONAS FÍSICAS</h3>
            <p>
              <span className="d-block">Asesoramiento Tributario.</span>
              Ahorra con una mejor planificación fiscal y disfruta de lo que más
              te gusta hacer, que nosotros nos encargamos de tus impuestos.
              <span className="bold">
                Monotributo - Impuesto a las Ganancias - Bienes Personales
              </span>
            </p>
          </div>
          <div
            className="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              mt-5
            "
          >
            <img src={require("../../media/pymes.png")} alt="pymes" />
            <h3 className="my-4">PYMES</h3>
            <p>
              <span className="d-block">Haga crecer su negocio.</span> Contador
              Simple te asesora y te apoya en todo el recorrido. Nuestros
              servicios flexibles y personalizados a cada empresa o negocio se
              adaptan a cualquier escenario al que se enfrente tu
              emprendimiento.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Main;
