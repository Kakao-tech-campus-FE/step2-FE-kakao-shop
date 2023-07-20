import { useState, } from 'react'

function Counter({ 
  onIncrease, // 수량 증가 함수
  onDecrease, //수량 감소 함수
}) {
  const [count, setCount] = useState(1)

  const handleOnIncrease = () => {
    setCount(prev => {
      onIncrease(count + 1)
      return prev + 1
    })
  }

  const handleOnDecrease = () => {
    setCount(prev => {
      onDecrease(count - 1)
      return prev - 1
    })
  }

  return (
    <div>
      <button onClick={handleOnDecrease}>-</button>
      <button onClick={handleOnIncrease}>+</button>
    </div>
  )
}

export default Counter