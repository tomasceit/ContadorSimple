import * as React from "react";
import "./Main.css";
import Blog from "../Blog/Blog";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { getFirestore } from "../../firebase";

const Main = () => {
  const [loading, setLoading] = React.useState(true);
  const [notas, setNotas] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const notasCollection = db.collection("notas");

    notasCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.error("No hay entradas al blog todavia");
        } else {
          setNotas(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingIcon />;
  } else {
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
            calidad.{" "}
            <span className="bold">
              Contáctenos para obtener más información.{" "}
            </span>
          </p>
        </article>
        {/* Sección quienes somos */}
        <section id="quienes_somos" className="main__article">
          <div className="row py-3">
            <img
              src={require("../../media/about-us.webp")}
              alt="personas fisicas"
            />
          </div>
          <article className="mt-2">
            <h2 className="main__title">¿Quiénes somos?</h2>
            <p className="p-3 pb-0 article__text">
              Somos una empresa joven formada especializada en el asesoramiento
              empresarial y en el desarrollo de emprendimientos. Nos gusta
              trabajar a la par de nuestros clientes logrando una gestión clara,
              sencilla y confiable. En este contexto cada vez más complejo, si
              necesitas un contador, que sea{" "}
              <span className="bold">simple</span>.
            </p>
            <p className="p-3 pt-2 pb-0 article__text">
              <span className="article__text--green">MISIÓN</span>. Facilitar el
              desarrollo sostenible de un negocio.
            </p>
            <p className="p-3 pt-2 pb-0 article__text">
              <span className="article__text--green">VISIÓN</span>. Ser la
              empresa más enfocada en simplificar la gestión y la consecuente
              evolución de un proyecto.
            </p>
            <p className="p-3 pt-2 article__text">
              <span className="article__text--green">VALORES</span>. Compromiso,
              innovación, sustentabilidad, resiliencia, empatía,
              responsabilidad.
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
              <img
                src={require("../../media/persona_fisica.webp")}
                className="w-100"
                alt="personas fisicas"
              />
              <h3 className="my-4">PERSONAS FÍSICAS</h3>
              <p className="text-align-justify">
                <span className="d-block">Asesoramiento Tributario.</span>
                Ahorra con una mejor planificación fiscal y disfruta de lo que
                más te gusta hacer, que nosotros nos encargamos de tus
                impuestos.
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
                className="w-100"
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

        {/* Sección nuestro Blog */}
        <section id="blog" className="main__article">
          <h2 className="main__title">Nuestro Blog</h2>
          {notas.map(nota => <Blog key={nota.id} titulo={nota.titulo} cuerpo={nota.cuerpo} />)}
        </section>
      </main>
    );
  }
};

export default Main;
