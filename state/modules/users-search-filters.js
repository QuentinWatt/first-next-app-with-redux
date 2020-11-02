import { useSelector, useDispatch } from "react-redux";
import { initialState } from "../state"

// reducers (mutators as I understand them from Vuex)
export const usersFiltersReducer = (state = initialState.usersFilters, action) => {
  switch (action.type) {
    case "SET_FILTERS":
      return {
        gender: 'male',
        nat: 'uk',
        results: 10
      };
    default:
      return state;
  }
};

// actions
export const useUsersFiltersActions = () => {
  const dispatch = useDispatch();
  const setFilters = () =>
    dispatch({
      type: "SET_FILTERS",
    });
  return { setFilters };
};

// Getters
export const useUsersFiltersGetters = () => {
  const usersFilters = useSelector((state) => state.usersFilters);
  return { usersFilters }
}