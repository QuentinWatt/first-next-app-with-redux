import { useSelector } from "react-redux";

const useUsers = () => {
  const users = useSelector((state) => state.users);
  return { users };
};

const Users = () => {
  const { users } = useUsers();
  return (
    <div>
      <h1>
        Users:
        <span>
          {users[0].name} {users[0].surname}
        </span>
      </h1>
    </div>
  );
};

export default Users;
