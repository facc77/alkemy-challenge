import { combineReducers } from "redux";
import heroesReducer from "./heroesReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  heroes: heroesReducer,
  login: loginReducer,
});
