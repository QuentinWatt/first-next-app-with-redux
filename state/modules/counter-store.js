import { useSelector, useDispatch } from 'react-redux'

// Reducer or Mutator
export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    default:
      return state
  }
}

// Actions
export const useCountActions = () => {
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
export const useCountGetters = () => {
  const count = useSelector((state) => state.count)
  return { count }
}