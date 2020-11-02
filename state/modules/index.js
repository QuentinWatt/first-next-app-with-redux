import { combineReducers } from 'redux'
import { countReducer } from './counter-store'
import { usersReducer } from './users-store'

export const rootReducer = combineReducers({
  count: countReducer,
  users: usersReducer
})

export default rootReducer
