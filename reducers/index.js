import { countReducer } from "./count";
import { combineReducers } from "redux";

export default combineReducers({
  counter: countReducer,
});
