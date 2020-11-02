import UserListItem from "./user-list-item";
import { useUsersActions } from "../state/modules/users-store"

const Users = () => {
  const { usersData } = useUsersActions();
  let usersList = null;

  if (Array.isArray(usersData) && usersData.length) {
    usersList = usersData.map((user, key) => (
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
