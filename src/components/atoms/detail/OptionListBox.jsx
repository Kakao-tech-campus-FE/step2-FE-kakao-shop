import React from 'react'

const OptionListBox = (props) => {
  return (
    <div className="
        grid 
        grid-cols-1 
        divide-y 
        divide-solid
        divide-gray-300
        border-solid 
        border 
        border-black 
        my-4
        ">
        {props.children}
    </div>
  )
}

export default OptionListBox