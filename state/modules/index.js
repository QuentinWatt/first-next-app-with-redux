import { countReducer } from "./count";
import { usersReducer } from "./users";
import { usersFiltersReducer } from "./users-search-filters";
import { combineReducers } from "redux";

export default combineReducers({
  count: countReducer,
  users: usersReducer,
  usersFilters: usersFiltersReducer
});
