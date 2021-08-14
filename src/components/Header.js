import React from "react";
import Logo from "../img/heroLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light d-flex justify-content-between">
      <div class="container-fluid">
        <button class="navbar-brand logo bg-light" href="#">
          <img
            src={Logo}
            alt=""
            width="40"
            height="35"
            class="d-inline-block align-text-top"
          />
          Superhero Team
        </button>
        <div className="">
          <Link to={"/home"} className="btn btn-danger">
            Chequear Equipo
          </Link>
          <Link to={"/"} className="btn btn-danger">
            Cerrar Sesion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
