import UserListItem from "./user-list-item";
import { useUsersActions } from "../state/modules/users-store"

const Users = () => {
  const { users } = useUsersActions();
  let userList = null;

  if (Array.isArray(users.usersData) && users.usersData.length) {
    userList = users.usersData.map((user, key) => (
      <div key={key} className="mb-3">
        <UserListItem user={user} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Users</h1>
      {userList}
    </div>
  );
};

export default Users;
