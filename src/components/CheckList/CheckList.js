/* eslint-disable */
import '../../styles/Checkbox.scss';
import React, { useState, useEffect } from 'react';

const CheckList = ({ title, item, checkedItemNum, setCheckedItemNum }) => {
  const [checkedNum, setCheckedNum] = useState(0);
  const onChangeChecked = (event) => {
    event.target.checked ? setCheckedNum(checkedNum + 1) : setCheckedNum(checkedNum - 1);
  };
  useEffect(() => {
    setCheckedItemNum(checkedNum);
  }, [checkedNum]);

  return (
    <div className="CheckboxPaper">
      <div className="title">{title}</div>
      {item.map((key) => (
        <div className="item" key={key}>
          <input type="checkbox" id={key} onChange={(event) => onChangeChecked(event)} />
          <label htmlFor={key}>{key}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckList;
