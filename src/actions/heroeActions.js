import {
  AGREGAR_HEROE,
  AGREGAR_HEROE_EXITO,
  AGREGAR_HEROE_ERROR,
  COMENZAR_DESCARGA_HEROES,
  DESCARGA_HEROES_EXITO,
  DESCARGA_HEROES_ERROR,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function agregarHeroeAction(hero) {
  return async (dispatch) => {
    dispatch(agregarHeroe());

    try {
      await clienteAxios.post("/heroes", hero);
      dispatch(agregarHeroeExito(hero));
      Swal.fire("Exito!", "El heroe se agregó correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarHeroeError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error,intenta de nuevo",
      });
    }
  };
}

const agregarHeroe = () => ({
  type: AGREGAR_HEROE,
  payload: true,
});

const agregarHeroeExito = (hero) => ({
  type: AGREGAR_HEROE_EXITO,
  payload: hero,
});

const agregarHeroeError = (estado) => ({
  type: AGREGAR_HEROE_ERROR,
  payload: estado,
});

export function obtenerHeroesAction() {
  return async (dispatch) => {
    dispatch(descargarHeroes());

    try {
      const respuesta = await clienteAxios.get("/heroes");
      dispatch(descargaHeroesExitosa(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(descargaHeroesError());
    }
  };
}

const descargarHeroes = () => ({
  type: COMENZAR_DESCARGA_HEROES,
  payload: true,
});

const descargaHeroesExitosa = (heroes) => ({
  type: DESCARGA_HEROES_EXITO,
  payload: heroes,
});

const descargaHeroesError = () => ({
  type: DESCARGA_HEROES_ERROR,
  payload: true,
});
