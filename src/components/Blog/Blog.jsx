import * as React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../Main/Main.css";

const Blog = ({
  titulo = "Lorem Impsum",
  cuerpo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh id tellus odio quis. Ullamcorper in condimentum aliquet quam vel aliquamornare. Imperdiet pharetra risus proin sed. Molestie massa urna gravida fringilla vulputate ultrices egestas. Eget egestas proin nunc, proin sodales congue. A massa pretium nisl, risus leo morbi iaculis. Dictumst quisque netus quam nec aliquet. Tellus fusce purus urnasagittis.",
}) => {
  const handleIcon = () => {
    const iconHeartOpacity = document.querySelector("#iconHeartOpacity");
    iconHeartOpacity.classList.toggle("icon-heart--opacity");
  };
  return (
    <section className="p-4 m-md-5 mx-2 my-5 position-relative border border-dark">
      <h3 className="">{titulo}</h3>
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
        <span id="iconHeartOpacity">
          <AiFillHeart />
        </span>
      </label>
    </section>
  );
};

export default Blog;
