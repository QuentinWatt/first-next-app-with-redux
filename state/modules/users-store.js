import { useSelector, useDispatch } from "react-redux";
import { useAxiosGet } from '../../hooks/HttpRequests'

// state
export const usersState = {
  usersData: null,
  usersErrors: null, 
  usersLoading: null
};

// reducers
export const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "SET_USERS_DATA":
      return {
        usersData: action.data.data,
        usersErrors: action.data.error, 
        usersLoading: action.data.loading
      };
    default:
      return state;
  }
};

// actions
export const useUsersActions = () => {
  const users = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  const fetchUsers = () => {
    let usersData = useAxiosGet('https://randomuser.me/api/?results=50')
    dispatch({
      type: "SET_USERS_DATA",
      data: usersData
    });
  }
  return { users, fetchUsers };
};
