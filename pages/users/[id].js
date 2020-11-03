import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { useUsersActions } from "../../state/modules/users"
import { useCurrentUserActions } from "../../state/modules/current-user"
import { useEffect } from 'react'
import UserProfile from '../../components/user-profile'
import Spinner from '../../components/spinner'


export default function userDetails() {
  const router = useRouter()
  const {id} = router.query
  const users = useSelector((state) => state.users);
  const { fetchUsers } = useUsersActions()
  const { setCurrentUser } = useCurrentUserActions()
  const currentUser = useSelector((state) => state.currentUser);
  
  useEffect(() => {
    if(Array.isArray(users) && !users.length){
      fetchUsers()
    }
    if(Array.isArray(users) && users.length){
      setCurrentUser(users[id -1])
    }
  }, [users])

  return <div className="container mx-auto p-3">
    <h1 className="font-bold text-3xl mb-3">
      User Details
    </h1>
    { currentUser 
      ? 
      <UserProfile user={currentUser}/> 
      : 
      <Spinner color='bg-blue-500' />
    }
  </div>;
}
