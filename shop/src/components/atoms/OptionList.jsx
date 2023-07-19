import React from 'react'
import { comma } from '../../utils/convert'

const OptionList = ({options, onClick}) => {
  return (
    <ol className='option-list ' style={{width:'450px'}}>
      {options.map((option, index)=>(
        <li key={option.id} className='option border-2 px-4 py-2 cursor-pointer border-slate-200 rounded-sm text-lg mb-2 divide-x-0 divide-gray-300 last:mb-6' onClick={()=>onClick(option)}>
          <span>
            {index + 1}. {option.optionName}
          </span>
          <div className='price font-semibold'>{comma(option.price)}원</div>
        </li>
      ))}
    </ol>
  )
}

export default OptionList