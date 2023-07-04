/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Radio.scss';

const Radio = ({ radios, imgURL }) => {
  const defaultSelection = useRef([]);
  const [radioIdx, setRadioIdx] = useState(0);

  const OnChange = (e) => {
    setRadioIdx(e.target.value);
  };

  useEffect(() => {
    setRadioIdx(0);
    defaultSelection.current[0].checked = 'checked';
  }, []);

  return (
    <div className="radio-wrapper">
      <div className="radio">
        {radios.map((key, index) => (
          <div key={key}>
            <input
              type="radio"
              id={key}
              name="radios"
              value={index}
              ref={(el) => {
                defaultSelection.current.push(el);
              }}
              onChange={(event) => OnChange(event)}
            />
            <label htmlFor={key}>{key}</label>
          </div>
        ))}
      </div>
      <img className="radio-img" src={imgURL[radioIdx]} alt="grayCatPic" />
    </div>
  );
};

export default Radio;
