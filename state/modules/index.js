import { countReducer } from "./count-store";
import { usersReducer } from "./users-store";
import { combineReducers } from "redux";

export default combineReducers({
  counter: countReducer,
  users: usersReducer,
});
