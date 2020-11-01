import { useDispatch } from "react-redux";
import Counter from "./counter";
import UserList from "./userlist";
import Nav from "./nav";

export default function Page() {
  return (
    <>
      <Nav />
      <Counter />
      {/* <UserList /> */}
    </>
  );
}
