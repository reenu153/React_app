
import Button from "../components/Button";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../store/slices/counterSlice"

const Counter=()=>{
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
    
        <>
        <Button label="Increment" handleClick={() => dispatch(increment())} />
        <Button label="Decrement" handleClick={() => dispatch(decrement())} />
        <span>{count}</span>
        </>
    )
}
export default Counter