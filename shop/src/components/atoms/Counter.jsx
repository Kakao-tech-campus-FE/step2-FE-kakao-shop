import {useState,useEffect} from 'react'
import Button from './Button'

const Counter = ({
  onIncrease, //수량 증가시 호출되는 함수
  onDecrease, // 수량 감소시 호출되는 함수
  quantity // 이전 quantity 값
}) => {
  const [count, setCount] = useState(quantity)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    // quantity 값이 변경되면 count 값을 업데이트합니다.
    setCount(quantity);
  }, [quantity]);

  const handleOnIncrease = () => {
    setCount((prev) => {
      onIncrease (prev + 1)
      return prev + 1
    })
    setIsDisabled(false)
  }

  const handleOnDecrease = () => {
    setCount((prev) => {
      onDecrease (prev - 1)
      return prev - 1
    })
    if(count <= 2){ //??? 왜 2일떄 비활성화 되지 않고 1일떄부터 비활성화될까
      setIsDisabled(true)
    }
  }

  return (
    <div className='mt-1'>
      <Button className="btn-counter" disabled={isDisabled} onClick={handleOnDecrease}>-</Button>
      <span className='px-6 py-1 border-2'>{count}</span>
      <Button className="btn-counter" onClick={handleOnIncrease}>+</Button>
    </div>
  )
}

export default Counter