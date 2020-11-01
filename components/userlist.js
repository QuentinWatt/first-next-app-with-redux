import { useSelector } from "react-redux";

const useUsers = () => {
  const users = useSelector((state) => state.users.usersList);
  return { users };
};

const Users = () => {
  const { users } = useUsers();
  return (
    <div>
      <h1>
        Users:
        <span>
          {users[0].name.first} {users[0].name.last}
        </span>
      </h1>
    </div>
  );
};

export default Users;
