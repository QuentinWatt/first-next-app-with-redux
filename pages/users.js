import UserList from "../components/user-list";
import { useUsersActions } from "../state/modules/users-store"

export default function Users() {
  const { users, fetchUsers } = useUsersActions();
  fetchUsers()
  console.log(users)

  return (
    <div className="container mx-auto">
      <UserList />
    </div>
  );
}