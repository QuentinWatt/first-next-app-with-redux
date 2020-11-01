import { useSelector, useDispatch } from "react-redux";

// state
export const countState = {
  count: 0,
};

// reducers (mutators as I understand them from Vuex)
export const countReducer = (state = countState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: countState.count,
      };
    default:
      return state;
  }
};

// actions
export const useCounter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () =>
    dispatch({
      type: "INCREMENT",
    });
  const decrement = () =>
    dispatch({
      type: "DECREMENT",
    });
  const reset = () =>
    dispatch({
      type: "RESET",
    });
  return { count, increment, decrement, reset };
};
