import { useSelector, useDispatch } from 'react-redux'

// Reducer or Mutator
export const usersReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

// Actions
export const useUsersActions = () => {
  const dispatch = useDispatch()
  
  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })

  const decrement = () =>
    dispatch({
      type: 'DECREMENT',
    })

  const reset = () =>
    dispatch({
      type: 'RESET',
    })
    
  return { increment, decrement, reset }
}

// Getters or "State Selectors"
export const useUsersGetters = () => {
  const count = useSelector((state) => state.count)
  return { count }
}