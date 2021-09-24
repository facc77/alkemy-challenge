import {
  COMENZAR_VERIFICADO_LOGIN,
  VERIFICADO_LOGIN_EXITO,
  VERIFICADO_LOGIN_ERROR,
} from "../types";

const initialState = {
  login: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
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
      };
    case VERIFICADO_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
