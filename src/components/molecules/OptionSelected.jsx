import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import Counter from './Counter';


const OptionSelected = (props) => {
  return (
    <>
      <div className='flex'>
        <span>{props.optionName}</span>
        <button className='ml-auto' onClick={props.clear} >
          <RiCloseFill className='w-5 h-5 m-[-4px]'/>
        </button>
      </div>

      <div className='flex mt-3'>
        <Counter 
          quantity={props.quantity}
          changeQuantity={props.changeQuantity}
          optionId={props.optionId}
        />

        <div className='ml-auto'>{props.price}</div>
      </div>
    </>
  )
}

export default OptionSelected