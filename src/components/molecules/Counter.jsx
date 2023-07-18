import React from 'react'
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const Counter = (props) => {
  return (
    <div className={`
        bg-white
        border border-solid border-black 
        w-[72px] h-[24px]
        inline-grid grid-cols-3 
        divide-x divide-black
        `}> 

        <button onClick={props.sub} disabled={props.quantity === 1}>
            <RiSubtractFill className='w-3 h-3 m-auto' />
        </button>

        <input className='text-center' value={props.quantity} onChange={props.change}></input>

        <button onClick={props.add}>
            <RiAddFill className='w-3 h-3 m-auto' />
        </button>
    </div>
  )
}

export default Counter