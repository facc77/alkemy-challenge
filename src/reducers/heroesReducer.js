import {
  AGREGAR_HEROE,
  AGREGAR_HEROE_EXITO,
  AGREGAR_HEROE_ERROR,
  COMENZAR_DESCARGA_HEROES,
  DESCARGA_HEROES_EXITO,
  DESCARGA_HEROES_ERROR,
} from "../types";

const initialState = {
  heroes: [],
  error: null,
  loading: false,
  heroeEliminar: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_HEROES:
    case AGREGAR_HEROE:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_HEROE_EXITO:
      return {
        ...state,
        loading: false,
        heroes: [...state.heroes, action.payload],
      };
    case DESCARGA_HEROES_ERROR:
    case AGREGAR_HEROE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DESCARGA_HEROES_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        heroes: action.payload,
      };
    default:
      return state;
  }
}
