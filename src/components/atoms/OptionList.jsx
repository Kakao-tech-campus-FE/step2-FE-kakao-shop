import React from 'react'
import { comma } from '../../utils/convert'

function OptionList({ options, onClick }) {
  return (
  <div className=''> 
    <ol className='border border-slate-600 border-solid rounded-e'>
      {options.map((option, index) => (
        <li className='border-b-2 border-solid border-gray-300 text-base px-[14px] py-[2px] w-[300px]' key={option.id} onClick={()=> onClick(option)}>
          <div className='py-[9px]  leading-4 '>
            {index + 1}. {option.optionName}
          </div>
          <span>{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  </div>
  )
}

export default OptionList