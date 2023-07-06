import React from 'react'

function Input(
  {
    id,
    type,
    value,
    onChange,
    placeholder,
    name,
  }
) {
  return (
    <input 
      id={id}
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      name={name}/>
  )
}

export default Input

