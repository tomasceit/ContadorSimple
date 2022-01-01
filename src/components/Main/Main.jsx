import * as React from "react";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './Main.css'

const Main = () => {
  return (
    <main className="container">
      {/* Sección que ofrecemos */}
      <article id="que_ofrecemos" className="main__article">
        <h2 className="main__title">¿Qué ofrecemos?</h2>
        <p className="p-3 article__text">
          Contador Simple ofrece una amplia gama de servicios de consultoría
          en materia impositiva, financiera y de administración. Trabajamos
          junto con nuestros clientes de principio a fin centrándonos en sus
          necesidades a la vez que producimos nuevas ideas, desarrollamos
          estrategias efectivas y diseñamos solucionaes escalables de alta
          calidad.
          <span className="bold">Contáctenos para obtener más información. </span>
        </p>
      </article>
      {/* Sección quienes somos */}
      <section id="quienes_somos" className="main__article">
        <div className="row py-3">
          <img src={require("../../media/about-us.png")} alt="personas fisicas" />
        </div>
        <article className="mt-2">
          <h2 className="main__title">¿Quiénes somos?</h2>
          <p className="p-3 pb-0 article__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh id
            tellus odio quis. Ullamcorper in condimentum aliquet quam vel
            aliquam ornare. Imperdiet pharetra risus proin sed. Molestie massa
            urna gravida fringilla vulputate ultrices egestas. Eget egestas
            proin nunc, proin sodales congue. A massa pretium nisl, risus leo
            morbi iaculis. Dictumst quisque netus quam nec aliquet. Tellus fusce
            purus urna sagittis.
          </p>
          <p className="p-3  article__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh id
            tellus odio quis. Ullamcorper in condimentum aliquet quam vel
            aliquam ornare. Imperdiet pharetra risus proin sed. Molestie massa
            urna gravida fringilla vulputate ultrices egestas. Eget egestas
            proin nunc, proin sodales congue. A massa pretium nisl, risus leo
            morbi iaculis. Dictumst quisque netus quam nec aliquet. Tellus fusce
            purus urna sagittis.
          </p>
        </article>
      </section>

      {/* Sección servicios */}
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
            <img src={require("../../media/persona_fisica.png")} className="w-100" alt="personas fisicas" />
            <h3 className="my-4">PERSONAS FÍSICAS</h3>
            <p className="text-align-justify">
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
              align-items-center
              my-5
              px-3
            "
          >
            <img src={require("../../media/pymes.png")} className="w-100" alt="pymes" />
            <h3 className="my-4">PYMES</h3>
            <p className="text-align-justify">
              <span className="d-block">Haga crecer su negocio.</span> Contador
              Simple te asesora y te apoya en todo el recorrido. Nuestros
              servicios flexibles y personalizados a cada empresa o negocio se
              adaptan a cualquier escenario al que se enfrente tu
              emprendimiento.
            </p>
          </div>
        </section>
      </section>

      {/* Sección nuestro Blog */}
      <section id="blog" className="main__article">
        <h2 className="main__title">Nuestro Blog</h2>
        <section className="p-4 m-md-5 mx-2 my-5 position-relative border border-dark">
          <h3 className="">Lorem Impsum</h3>
          <p className="article__text mr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh id
            tellus odio quis. Ullamcorper in condimentum aliquet quam vel
            aliquam ornare. Imperdiet pharetra risus proin sed. Molestie massa
            urna gravida fringilla vulputate ultrices egestas. Eget egestas
            proin nunc, proin sodales congue. A massa pretium nisl, risus leo
            morbi iaculis. Dictumst quisque netus quam nec aliquet. Tellus fusce
            purus urna sagittis.
          </p>
          <i className="icon-heart"><span><AiOutlineHeart/></span><span><AiFillHeart/></span></i>
        </section>
      </section>
    </main>
  );
};

export default Main;
