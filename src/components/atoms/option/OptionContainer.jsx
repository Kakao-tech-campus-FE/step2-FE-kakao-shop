import React from 'react'


const OptionContainer = (props) => {
  return (
    <div className='
      flex
      flex-col
      '>  
      {props.children}
    </div>
  )
}

export default OptionContainer