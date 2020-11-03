import { useEffect } from "react";
import UserList from "../components/user-list";
import UsersSearchFilters from "../components/users-search-filters";
import { useUsersActions } from "../state/modules/users"
import Spinner from '../components/spinner'

export default function Users() {
  const { fetchUsers } = useUsersActions();
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl mb-3">Users</h1>
      
      <UsersSearchFilters />

      <Spinner />

      <UserList />
    </div>
  );
}