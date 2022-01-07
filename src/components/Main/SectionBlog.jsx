import Blog from "../Blog/Blog";

const SectionBlog = ({ notas }) => {
  return (
    <section id="blog" className="main__article">
      <h2 className="main__title">Nuestro Blog</h2>
      {notas.length !== 0 &&
        notas.map((nota) => (
          <Blog
            key={nota.id}
            id={nota.id}
            titulo={nota.titulo}
            cuerpo={nota.cuerpo}
          />
        ))}
    </section>
  );
};

export default SectionBlog;