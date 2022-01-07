import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center p-3 flex-wrap footer">
      <p className="m-0 d-flex gap-2">
        <span className="my-auto icon-argentina">
          <i className="d-flex">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M2.77783 9.44446H37.2223V30.5556H2.77783V9.44446Z"
                fill="white"
              />
              <path
                d="M2.77783 23.3333H37.2223V30.5556H2.77783V23.3333Z"
                fill="#61B2E4"
              />
              <path
                d="M2.77783 9.44446H37.2223V16.6667H2.77783V9.44446Z"
                fill="#61B2E4"
              />
              <path
                d="M20.0001 18.8317L20.6867 17.7778L20.6534 19.055L21.7978 18.6267L21.0567 19.6389L22.2223 20L21.0567 20.3611L21.7978 21.3733L20.6534 20.945L20.6867 22.2222L20.0001 21.1683L19.3134 22.2222L19.3467 20.945L18.2023 21.3733L18.9434 20.3611L17.7778 20L18.9434 19.6389L18.2023 18.6267L19.3467 19.055L19.3134 17.7778L20.0001 18.8317Z"
                fill="#F1B31C"
                stroke="#F1B31C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </span>
        <span className="my-auto">Santa Fe, Argentina</span>
      </p>
      <p className="m-0 d-flex gap-2">
        <span className="my-auto icon-whatsapp">
          <i className="d-flex"><AiOutlineWhatsApp /></i>
        </span>
        <span className="my-auto">+54 9 3406 42-5031</span>
      </p>
      <p className="m-0 d-flex gap-2">
        <span className="my-auto icon-email">
          <i className="d-flex"><AiOutlineMail /></i>
        </span>
        <span className="my-auto">contadorsimple@gmail.com</span>
      </p>
    </footer>
  );
};

export default Footer;