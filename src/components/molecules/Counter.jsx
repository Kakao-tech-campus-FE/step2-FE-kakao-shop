import React, { useEffect, useState } from 'react'
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

/**
 * 감소버튼 | 입력input | 증가버튼 으로 값을 업데이트하는 컴포넌트
 * @param {interger} value - 받은 값
 * @param {interger} id - 값이 속해있는 id
 * @param {function} valueUpdateHandler - 업데이트된 값을 부모쪽으로 올려주는 함수 
 * @returns 
 */
const Counter = ( {value, id, valueUpdateHandler} ) => {

  const [state, setState] = useState(value)

  // 외부에서 일어나는 값 업데이트를 반영 (새탭에서 항목을 추가했을 때 등)
  useEffect(()=> {
    setState(prev=> value)
  }, [value])

  // input 입력값 val: string 을 int로 변경, 이상한 값 입력시 서버 값으로 초기화 
  const makeValue = (val) => {
    let number = parseInt(val)
    if (Number.isNaN(number) || typeof val !== 'string') {
      number = value
    }
    return number
  }

  const handlerOnBlur = () => {
    if (state === 0) {
      setState(prev => value)
    }
    if (state !== value) {
      valueUpdateHandler(id, state)
    }
  }

  const handlerBtnClick = (dx) => {
    valueUpdateHandler(id, state + dx)
    setState(prev => prev + dx)
  }

  return (
    <div className={`
      bg-white
      border border-solid border-gray-500
      w-[72px] h-[24px]
      inline-grid grid-cols-3 
      divide-x divide-gray-500
    `}> 

        <button onClick={() => handlerBtnClick(-1)} disabled={state <= 1}>
            <RiSubtractFill className='w-3 h-3 m-auto' />
        </button>

        <input className='text-center' 
          value={state} 
          onChange={e => setState(prev => makeValue(e.target.value))}
          onBlur={handlerOnBlur}
        />

        <button onClick={() => handlerBtnClick(1)} >
            <RiAddFill className='w-3 h-3 m-auto' />
        </button>
    </div>
  )
}

export default Counter