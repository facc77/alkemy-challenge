import React from "react";
import Logo from "../img/heroLogo.png";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
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
