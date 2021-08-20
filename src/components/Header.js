import React from "react";
import Logo from "../img/heroLogo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  const cerrarSesion = () => {
    localStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between">
      <div className="container-fluid">
        <button className="navbar-brand logo bg-light" href="#">
          <img
            src={Logo}
            alt=""
            width="40"
            height="35"
            className="d-inline-block align-text-top"
          />
          Superhero Team
        </button>
        <div className="">
          <Link to={"/home"} className="btn btn-danger">
            Chequear Equipo
          </Link>
          <button onClick={() => cerrarSesion()} className="btn btn-danger">
            Cerrar Sesion
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
