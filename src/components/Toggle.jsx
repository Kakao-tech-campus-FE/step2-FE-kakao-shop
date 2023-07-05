
import React, { useRef } from 'react';

const Toggle = () => {
  const toggleRef = useRef(false);

  const handleToggle = () => {
    toggleRef.current = !toggleRef.current; //true, false 반전
    console.log(toggleRef.current); 
  };

  return (
    <div>
        <h1>{toggleRef.current}</h1>
      <button onClick={handleToggle}>
        Button
      </button>
    </div>
  );
};

export default Toggle;