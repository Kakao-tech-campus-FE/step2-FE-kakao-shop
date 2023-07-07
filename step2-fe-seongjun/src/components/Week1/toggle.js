import React, {useEffect, useState} from 'react';
import "../style/toggle.css";

const Toggle = () => {
  const [toggleValue, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle((prevToggle) => !prevToggle); 
  }

  useEffect(() => {
    console.log(toggleValue); // 초기 렌더링,handleToggleChange 함수가 호출되어 false가 2번 호출되어 있음
  },[toggleValue]);

  return (
    <label className='toggle-label'>
      <input onChange={handleToggleChange} type='checkbox' checked={toggleValue}/>
      <span className='custom-toggle'/>
    </label>
  )
}

export default Toggle;