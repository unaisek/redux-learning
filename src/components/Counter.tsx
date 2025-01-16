import { decrement, increment } from "../state/counter/counterSlice";
import { RootState } from "../state/store"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
  <div>
    <h2>{count}</h2>
    <div>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
    </div>
  </div>
  )
}


export default Counter