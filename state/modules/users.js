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
  const url = buildApiUrl();

  const fetchUsers = () => {
    console.log(url)

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

const buildApiUrl = () => {
  let results = useSelector((state) => state.usersFilters.results)
  let gender = useSelector((state) => state.usersFilters.gender)
  let nat = useSelector((state) => state.usersFilters.nat)
  let url = 'https://randomuser.me/api/'
  let params = []

  if(results){
    params.push(`results=${results}`)
  }
  if(gender){
    params.push(`gender=${gender}`)
  }
  if(nat){
    params.push(`nat=${nat}`)
  }

  if(params.length){
    url = `${url}?${params.join('&')}`
  }

  return url
}