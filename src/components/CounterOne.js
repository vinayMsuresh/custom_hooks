import React,{useState} from 'react'
import useDocumentTitle from '../utils/useDocumentTitle';

function CounterOne() {
    const [count, setCount] = useState(0);
    useDocumentTitle(count);
  return (
    <button onClick={() => setCount(count=> count + 1)}>Count - {count}</button>
  )
}

export default CounterOne