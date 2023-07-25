import React from 'react'

const OptionListBox = (props) => {
  return (
    <div className={`
      grid 
      grid-cols-1 
      divide-y 
      divide-solid
      divide-gray-300
      rounded
      border-solid 
      border 
      ${props.open ? "border-black" : "border-gray-300"}
      my-4 
      `} 
    >
      {props.children}
    </div>
  )
}

export default OptionListBox