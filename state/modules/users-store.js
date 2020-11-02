import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import axios from 'axios'

// reducers
export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return action.data.results;
    default:
      return state;
  }
};

// actions
export const useUsersActions = () => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const fetchUsers = () => {
    const url = 'https://randomuser.me/api/?results=50'
    useEffect(() => {
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
    }, [url])
  }

  return { usersData, fetchUsers };
};
