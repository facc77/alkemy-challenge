import {
  COMENZAR_VERIFICADO_LOGIN,
  VERIFICADO_LOGIN_EXITO,
  VERIFICADO_LOGIN_ERROR,
  DESLOGUEO,
} from "../types";

const initialState = {
  login: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case COMENZAR_VERIFICADO_LOGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case VERIFICADO_LOGIN_EXITO:
      return {
        ...state,
        loading: action.payload,
        login: true,
        error: null,
      };
    case VERIFICADO_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DESLOGUEO:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
}
