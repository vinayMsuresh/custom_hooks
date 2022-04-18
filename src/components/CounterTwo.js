import React from 'react'
import useCounter from '../utils/useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(0, 2);
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo