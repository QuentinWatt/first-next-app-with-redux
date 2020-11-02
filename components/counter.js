import { useCountActions, useCountGetters } from '../state/modules/counter-store'

const Counter = () => {
  const { count } = useCountGetters()
  const { increment, decrement, reset } = useCountActions()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
