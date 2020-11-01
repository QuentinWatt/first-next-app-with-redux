import UserList from "../components/user-list";
import { useUsersActions } from "../state/modules/users-store"

export default function Users() {
  const { fetchUsers } = useUsersActions();
  fetchUsers();


  return (
    <div className="container mx-auto">
      <UserList />
    </div>
  );
}