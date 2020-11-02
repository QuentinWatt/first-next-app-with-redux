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
        ...countState,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...countState,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...countState,
        count: countState.count,
      };
    default:
      return state;
  }
};

// actions
export const useCounterActions = () => {
  const count = useSelector((state) => state.count.count);
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
  return {count, increment, decrement, reset };
};

// // Getters
// export const useCounterGetters = () => {
  
//   return {  }
// }