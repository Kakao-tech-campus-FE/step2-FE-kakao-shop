import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [Off, setOff] = useState(true);

  return (
    <>
    <h1>Toggle button</h1>
    <button className={Off ? 'button on' : 'button off'} onClick = {() => setOff(!Off)} >
    {Off ? 'ON' : 'OFF'}
      </button> 
      </>
    );
}

export default Toggle;
