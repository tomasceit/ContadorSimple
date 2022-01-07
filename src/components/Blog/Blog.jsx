import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Blog = ({ id, titulo, cuerpo }) => {
  const handleIcon = () => {
    const iconHeartOpacity = document.querySelector(`#iconHeartOpacity-${id}`);
    iconHeartOpacity.classList.toggle("icon-heart--opacity");
  };
  return (
    <section className="p-4 m-md-5 mx-2 my-5 position-relative border border-dark">
      <h3>{titulo}</h3>
      <p className="article__text mr-0">{cuerpo}</p>
      <input type="checkbox" className="d-none" id="iconHeartInput" />
      <label
        className="icon-heart"
        htmlFor="iconHeartInput"
        onClick={handleIcon}
      >
        <span>
          <AiOutlineHeart />
        </span>
        <span id={`iconHeartOpacity-${id}`}>
          <AiFillHeart />
        </span>
      </label>
    </section>
  );
};

export default Blog;