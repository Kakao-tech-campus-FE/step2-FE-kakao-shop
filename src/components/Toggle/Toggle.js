/* eslint-disable */
import '../../styles/Toggle.scss';
import React, { useEffect, useState } from 'react';

const Toggle = ({ setToggleValue }) => {
  const [toggleState, setToggleState] = useState(false);
  const ClickedToggle = () => {
    setToggleState(!toggleState);
  };

  useEffect(() => {
    setToggleValue(toggleState);
  }, [toggleState]);

  return (
    <>
      <div className={`toggleBox ${toggleState ? 'afterToggle' : 'beforeToggle'}`} onClick={() => ClickedToggle()}>
        <div className="toggleButton"></div>
      </div>
      <div style={{ textAlign: 'center' }}>토스트용 토글</div>
    </>
  );
};

export default Toggle;
