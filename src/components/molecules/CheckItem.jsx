import React from 'react'

const CheckItem = ( props ) => {

  return (
    <div className='flex items-center'>
      <input 
        type="checkbox" className='mr-3' id={props.id}
        checked={props.checked} onChange={props.onChange} /> 
      <label htmlFor={props.id}> {props.label} </label>
      {props.children}
    </div>
  )
}

export default CheckItem