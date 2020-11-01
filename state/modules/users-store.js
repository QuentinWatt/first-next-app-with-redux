import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import axios from 'axios'

// state
export const usersState = {
  usersData: null,
};

// reducers
export const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      console.log(action)
      return {
        usersData: action.data.results,
      };
    default:
      return state;
  }
};

// actions
export const useUsersActions = () => {
  const users = useSelector((state) => state.users);
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

  return { users, fetchUsers };
};
