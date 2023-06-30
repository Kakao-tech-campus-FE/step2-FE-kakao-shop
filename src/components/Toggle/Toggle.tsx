import React from 'react';
import './Toggle.css';

const Toggle = () => {
  return (
    <div>
      <label htmlFor='toggle-switch'>
        <input id='toggle-switch' type='checkbox' className='toggle-switch' />
      </label>
    </div>
  );
};

export default Toggle;
