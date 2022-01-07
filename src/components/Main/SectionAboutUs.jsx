const SectionAboutUs = () => {
  return (
    <section id="quienes_somos" className="main__article">
      <picture className="row py-3">
        <img
          src={require("../../media/about-us.webp")}
          alt="personas fisicas"
        />
      </picture>
      <article className="mt-2">
        <h2 className="main__title">¿Quiénes somos?</h2>
        <p className="p-3 pb-0 article__text">
          Somos una empresa joven formada especializada en el asesoramiento
          empresarial y en el desarrollo de emprendimientos. Nos gusta trabajar
          a la par de nuestros clientes logrando una gestión clara, sencilla y
          confiable. En este contexto cada vez más complejo, si necesitas un
          contador, que sea <span className="bold">simple</span>.
        </p>
        <p className="p-3 pt-2 pb-0 article__text">
          <span className="article__text--green" aria-valuetext="MISIÓN">
            MISIÓN
          </span>
          . Facilitar el desarrollo sostenible de un negocio.
        </p>
        <p className="p-3 pt-2 pb-0 article__text">
          <span className="article__text--green" aria-valuetext="VISIÓN">
            VISIÓN
          </span>
          . Ser la empresa más enfocada en simplificar la gestión y la
          consecuente evolución de un proyecto.
        </p>
        <p className="p-3 pt-2 article__text">
          <span className="article__text--green" aria-valuetext="VALORES">
            VALORES
          </span>
          . Compromiso, innovación, sustentabilidad, resiliencia, empatía,
          responsabilidad.
        </p>
      </article>
    </section>
  );
};

export default SectionAboutUs;