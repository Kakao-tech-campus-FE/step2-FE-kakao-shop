import {useState} from 'react'
import Button from './Button'

const Counter = ({
  onIncrease, //수량 증가시 호출되는 함수
  onDecrease // 수량 감소시 호출되는 함수
}) => {
  const [count, setCount] = useState(1)

  const handleOnIncrease = () => {
    setCount((prev) => {
      onIncrease (prev + 1)
      return prev + 1
    })
  }

  const handleOnDecrease = () => {
    setCount((prev) => {
      onDecrease (prev - 1)
      return prev - 1
    })
  }

  return (
    <div className='counter'>
      <Button onClick={handleOnDecrease}>-</Button>
      <span className='count'>{count}</span>
      <Button onClick={handleOnIncrease}>+</Button>
    </div>
  )
}

export default Counter