import React from 'react'

const OptionItem = (props) => {
  return (
    <div className='
      p-2
      hover:bg-gray-100
      text-sm
      '>
      {props.children}
    </div>
  )
}

export default OptionItem