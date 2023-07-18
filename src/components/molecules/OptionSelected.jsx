import React from 'react'
import { RiAddFill, RiSubtractFill, RiCloseFill } from "react-icons/ri";


const OptionSelected = (props) => {
  return (
    <div className='flex-column bg-gray-100 p-3 mb-2'>
      <div className='flex'>
        <span>{props.optionName}</span>
        <button className='ml-auto' onClick={props.clearOnClick} >
          <RiCloseFill className='w-5 h-5 m-[-4px]'/>
        </button>

      </div>
      <div className='flex mt-3'>
        <div className='
          bg-white
          border border-solid border-black 
          w-[72px] h-[24px]
          inline-grid grid-cols-3 
          divide-x divide-black'
        > 
          <button onClick={props.subOnClick} disabled={props.subDisabled}>
            <RiSubtractFill className='w-3 h-3 m-auto' />
          </button>
          <input className='text-center' value={props.quantity} onChange={props.onChange}></input>
          <button onClick={props.addOnClick}>
            <RiAddFill className='w-3 h-3 m-auto' />
          </button>
        </div>
        <div className='ml-auto'>{props.price}</div>
      </div>
    </div>
  )
}

export default OptionSelected