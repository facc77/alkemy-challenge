import {
  COMENZAR_VERIFICADO_LOGIN,
  VERIFICADO_LOGIN_EXITO,
  VERIFICADO_LOGIN_ERROR,
  DESLOGUEO,
} from "../types";
import axios from "axios";
import Swal from "sweetalert2";

export function VerificarLoginAction(values, history) {
  return async (dispatch) => {
    dispatch(verificarLogin());
    if (
      values.email === "challenge@alkemy.org" &&
      values.password === "react"
    ) {
      try {
        const fetchData = async () => {
          const res = await axios
            .post("http://challenge-react.alkemy.org/", {
              email: values.email,
              password: values.password,
            })
            .then(dispatch(loginExito()));
          localStorage.setItem("token", res.data.token);
          history.push("home");
        };
        fetchData();
      } catch (error) {
        dispatch(loginError(error));
        console.log(error);
      }
    } else {
      let error = "Email o contrasena incorrectos";
      dispatch(loginError(error));
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Email o contrasena incorrectos",
      });
      return;
    }
  };
}

const verificarLogin = () => ({
  type: COMENZAR_VERIFICADO_LOGIN,
  payload: true,
});

const loginExito = () => ({
  type: VERIFICADO_LOGIN_EXITO,
  payload: false,
});

const loginError = (error) => ({
  type: VERIFICADO_LOGIN_ERROR,
  payload: error,
});

export function verificarDeslogueoAction() {
  return (dispatch) => {
    dispatch(deslogueoAction());
    localStorage.setItem("token", "");
  };
}

const deslogueoAction = () => ({
  type: DESLOGUEO,
  payload: true,
});
