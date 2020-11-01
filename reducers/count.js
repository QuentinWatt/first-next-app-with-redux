import { countState } from "../state/count";

export const countReducer = (state = countState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: countState.count,
      };
    default:
      return state;
  }
};
