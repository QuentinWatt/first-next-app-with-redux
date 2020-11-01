import { countReducer } from "./count";
import { usersReducer } from "./users";
import { combineReducers } from "redux";

export default combineReducers({
  counter: countReducer,
  users: usersReducer,
});
