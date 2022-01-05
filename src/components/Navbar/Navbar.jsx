import * as React from "react";
import "./Navbar.css";

const Navbar = () => {

  const [scroll, setScroll] = React.useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  })

  return (
    <nav
      id="navbar"
      className={scroll ? "navbar navbar-expand-lg position-absolute bg-light shadow px-1 w-100" : "navbar navbar-expand-lg position-absolute px-1 w-100"}
    >
      <div className="container-fluid justify-content-center px-1">
        <a href="index.html" className="navbar-brand">
          <img id="logo" className={scroll ? "main-logo-scroll" : "main-logo"} src={require("../../media/Logo.webp")} alt="logo" />
        </a>
        <div className="navbar-content justify-content-end w-100">
          <ul className="navbar-nav flex-row justify-content-around">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#banner">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quienes_somos">
                Quiénes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-contacto" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
