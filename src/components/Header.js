import React from "react";
import Logo from "../img/heroLogo.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verificarDeslogueoAction } from "../actions/loginActions";
import { Navbar, Nav, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Header = ({ login }) => {
  const dispatch = useDispatch();

  let history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  const goBack = () => {
    history.goBack();
  };

  const cerrarSesion = () => {
    dispatch(verificarDeslogueoAction());
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
        {login ? (
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button onClick={() => handleClick()} variant="danger">
                Chequear Equipo
              </Button>
              <Button onClick={() => cerrarSesion()} variant="danger">
                Cerrar Sesion
              </Button>
              <Button onClick={() => goBack()} variant="danger">
                Regresar
              </Button>
            </Nav>
          </Navbar.Collapse>
        ) : null}
      </Container>
    </Navbar>
  );
};

export default Header;
