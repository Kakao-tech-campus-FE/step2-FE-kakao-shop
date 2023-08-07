import React from 'react'

const RadioItem = ( { id, checked, onChange, label } ) => {

  return (
    <div className='flex items-center'>
      <input 
        type="radio" className='mr-3' id={id}
        checked={checked} onChange={onChange} /> 
      <label htmlFor={id}> {label} </label>
    </div>
  )
}

export default RadioItem