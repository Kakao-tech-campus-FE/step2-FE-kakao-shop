import React, { useEffect, useState } from 'react'
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const Counter = (props) => {

  const [state, setState] = useState(props.quantity)

  useEffect(()=> {
    const number = parseInt(state)
    if (Number.isNaN(number)) {
      setState(prev => props.quantity)
    }
    else if (typeof state === 'string') {
      setState(prev=> number)
    }
  }, [state])

  const handlerOnBlur = () => {
    if (state === 0) {
      setState(prev => props.quantity)
    }
    if (state !== props.quantity) {
      props.changeQuantity(props.optionId, state)
    }
  }

  const handlerBtn = (dx) => {
    props.changeQuantity(props.optionId, state + dx)
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

        <button onClick={() => handlerBtn(-1)} disabled={state === 1}>
            <RiSubtractFill className='w-3 h-3 m-auto' />
        </button>

        <input className='text-center' 
          value={state} 
          onChange={event => setState(prev => event.target.value)}
          onBlur={handlerOnBlur}
        />

        <button onClick={() => handlerBtn(1)} >
            <RiAddFill className='w-3 h-3 m-auto' />
        </button>
    </div>
  )
}

export default Counter