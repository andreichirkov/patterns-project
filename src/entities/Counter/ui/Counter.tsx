import { Button } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { counterActions } from "../model/slice/counterSlice"

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1>value - {counterValue}</h1>
      <Button onClick={increment}>incr</Button>
      <Button onClick={decrement}>decr</Button>
    </div>
  )
}
