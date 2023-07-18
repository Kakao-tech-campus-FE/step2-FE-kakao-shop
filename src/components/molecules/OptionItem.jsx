import React from 'react'

const OptionItem = (props) => {
  return (
    <div className={`
        p-2
        ${props.summary ? "bg-gray-50" : "hover:bg-gray-100"}
        text-sm
      `}
      onClick={props.onClick}
    >
      {props.children}
      <div className='text-xs' >{props.optionPrice}</div>
    </div>
  )
}

export default OptionItem