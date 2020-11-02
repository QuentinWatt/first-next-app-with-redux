import UserListItem from "./user-list-item";
import { useUsersGetters } from "../state/modules/users"

const Users = () => {
  const { users } = useUsersGetters();
  let usersList = null;

  if (Array.isArray(users) && users.length) {
    usersList = users.map((user, key) => (
      <div key={key} className="mb-3">
        <UserListItem user={user} />
      </div>
    ));
  }

  return (
    <div>
      {usersList}
    </div>
  );
};

export default Users;
