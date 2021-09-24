import {
  COMENZAR_VERIFICADO_LOGIN,
  VERIFICADO_LOGIN_EXITO,
  VERIFICADO_LOGIN_ERROR,
} from "../types";
import axios from "axios";
import Swal from "sweetalert2";

export function verificarLoginAction(values) {
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
          window.location.href = "/home";
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
