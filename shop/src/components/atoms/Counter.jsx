import {useState,useEffect} from 'react'
import Button from './Button'

const Counter = ({
  onIncrease, //수량 증가시 호출되는 함수
  onDecrease, // 수량 감소시 호출되는 함수
  quantity, // 이전 quantity 값
  optionId
}) => {
  const [count, setCount] = useState(quantity)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    // quantity 값이 변경되면 count 초기 값을 업데이트합니다.
    setCount(quantity);
    setIsDisabled(quantity <= 1);
    // console.log("quantity:", quantity)
    // console.log("count:", count)

  }, [quantity]);

  const handleOnIncrease = () => {
    setCount(count+1)
    onIncrease(count+1, optionId)
    setIsDisabled(false)

  }

  const handleOnDecrease = () => {
    setCount(count-1)
    onDecrease(count-1, optionId)
    setIsDisabled(count <= 2)

  }

  return (
    <div className='mt-1'>
      <Button className="btn-counter px-3" disabled={isDisabled} onClick={handleOnDecrease}>-</Button>
      <span className='px-6 py-1'>{count}</span>
      <Button className="btn-counter px-2" onClick={handleOnIncrease}>+</Button>
    </div>
  )
}

export default Counter