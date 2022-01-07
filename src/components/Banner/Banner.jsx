import "./Banner.css";

const Banner = () => {
  return (
    <section
      id="inicio"
      className="
        banner-img
        d-flex
        justify-content-center
        w-100
        text-center
        overflow-hidden
      "
    >
      <article className="banner-content">
        <h2>Hola, somos Contador Simple.</h2>
        <h3>Convertimos tus oportunidades en éxitos.</h3>
        <a href="#que_ofrecemos" role="button" className="btn btn-informacion">
          + Información
        </a>
      </article>
    </section>
  );
};

export default Banner;