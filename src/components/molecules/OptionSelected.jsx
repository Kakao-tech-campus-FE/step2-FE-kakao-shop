import React from 'react'
import strPrice from 'utils/price'

const OptionSelected = (props) => {
  return (
    <div className='flex-column bg-gray-100 p-3 mb-2'>
      <div className='flex'>
        <span>{props.optionName}</span>
        <div className='ml-auto' onClick={props.clearOnClick}>x</div>
      </div>
      <div className='flex mt-3'>
        <div className='
          bg-white
          border border-solid border-black 
          w-[72px] h-[24px]
          inline-grid grid-cols-3 
          divide-x divide-black'
        >
          <button onClick={props.subOnClick} disabled={props.subDisabled}>-</button>
          <input value={props.quantity} onChange={props.onChange}></input>
          <button onClick={props.addOnClick}>+</button>
        </div>
        <div className='ml-auto'>{strPrice(props.price)}</div>
      </div>
    </div>
  )
}

export default OptionSelected