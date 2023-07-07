import React from 'react';
import "../style/radio.css";

const Radio = ({name, id, value, onChange, checked, text}) => {
  return (
    <label htmlFor={id} className='radio-label'>
      <input 
        className='radio-input'
        type='radio'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
        <span className='custom-radio'/>
        {text}
    </label>
  )
}

export default Radio;