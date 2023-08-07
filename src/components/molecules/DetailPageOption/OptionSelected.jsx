import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import strPrice from 'utils/price';


const OptionSelected = ( {optionName, clear, counterComponent, price} ) => {
  return (
    <>
      <div className='flex'>
        <span>{optionName}</span>
        <button className='ml-auto' onClick={clear} >
          <RiCloseFill className='w-5 h-5 m-[-4px]'/>
        </button>
      </div>

      <div className='flex mt-3'>
        {counterComponent}

        <div className='ml-auto'>{strPrice(price)}</div>
      </div>
    </>
  )
}

export default OptionSelected