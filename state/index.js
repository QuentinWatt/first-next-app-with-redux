import { countState } from "./count";
import { usersState } from "./users";

const initialState = {
  ...countState,
  ...usersState,
};

export default initialState;
