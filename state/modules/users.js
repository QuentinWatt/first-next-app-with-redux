import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'

// Reducers
export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return action.data.results;
    default:
      return state;
  }
};

// Actions
export const useUsersActions = () => {
  const dispatch = useDispatch();

  const fetchUsers = () => {
    const url = 'https://randomuser.me/api/?results=50'
    axios.get(url)
      .then(response => {
          dispatch({
            type: "SET_USERS_DATA",
            data: response.data
          });
      })
      .catch(() => {
        dispatch({
          type: "SET_USERS_DATA",
          data: response.data
        });
      })
  }

  return { fetchUsers };
};

// Getters
export const useUsersGetters = () => {
  const users = useSelector((state) => state.users);
  return { users }
}