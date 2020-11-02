import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import axios from 'axios'

// state
export const usersState = {
  users: null,
};

// reducers
export const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return {
        ...usersState,
        users: action.data.results,
      };
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
