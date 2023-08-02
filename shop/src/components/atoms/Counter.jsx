import {useState,useEffect} from 'react'
import Button from './Button'

const Counter = ({
  onClickIncrease, //수량 증가시 호출되는 함수
  onClickDecrease, // 수량 감소시 호출되는 함수
  quantity, // 이전 quantity 값
  optionId,
  className
}) => {
  const [count, setCount] = useState(quantity)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    // quantity 값이 변경되면 count 초기 값을 업데이트합니다.
    setCount(quantity);
    setIsDisabled(quantity <= 0);
  }, [quantity]);

  const handleClickIncrease = () => {
    setCount(count+1)
    onClickIncrease(count+1, optionId)
    setIsDisabled(false)

  }

  const handleClickDecrease = () => {
    setCount(count-1)
    onClickDecrease(count-1, optionId)
    setIsDisabled(count <= 1)

  }

  return (
    <div className={className}>
      <Button className="btn-counter px-3" disabled={isDisabled} onClick={handleClickDecrease}>-</Button>
      <span className='px-6'>{count}</span>
      <Button className="btn-counter px-2" onClick={handleClickIncrease}>+</Button>
    </div>
  )
}

export default Counter