import { countState } from "./modules/count";
import { usersState } from "./modules/users";

const initialState = {
  ...countState,
  ...usersState,
};

export default initialState;
