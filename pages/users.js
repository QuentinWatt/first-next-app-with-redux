import UserList from "../components/user-list";
import UserFilters from "../components/user-filters";
import { useUsersActions } from "../state/modules/users-store"

export default function Users() {
  const { usersData, fetchUsers } = useUsersActions();
  fetchUsers()

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl mb-3">Users</h1>
      
      <UserFilters />
      <UserList />
    </div>
  );
}