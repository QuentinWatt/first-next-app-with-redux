import { countState } from "./modules/count-store";
import { usersState } from "./modules/users-store";

const initialState = {
  ...countState,
  ...usersState,
};

export default initialState;
