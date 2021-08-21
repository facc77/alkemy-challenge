import React from "react";
import Logo from "../img/heroLogo.png";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
const Header = ({ login }) => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const cerrarSesion = () => {
    localStorage.setItem("token", "");
    history.push("/");
  };

  {
    /* <nav className="navbar navbar-light bg-light d-flex justify-content-between">
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
        {login ? (
          <div className="buttonContainer">
            <Link to={"/home"} className="btn btn-danger m-1">
              Chequear Equipo
            </Link>
            <button
              onClick={() => cerrarSesion()}
              className="btn btn-danger m-1"
            >
              Cerrar Sesion
            </button>
            <button onClick={() => goBack()} className="btn btn-danger m-1">
              Regresar
            </button>
          </div>
        ) : null}
      </div>
    </nav> */
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="cont1">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          SuperHeroApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          {login ? (
            <Nav>
              <Button href="/home" variant="danger">
                Chequear Equipo
              </Button>
              <Button onClick={() => cerrarSesion()} variant="danger">
                Cerrar Sesion
              </Button>
              <Button onClick={() => goBack()} variant="danger">
                Regresar
              </Button>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
