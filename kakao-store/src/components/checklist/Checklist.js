import React, { useState } from 'react';
import './Checklist.css';
/*
1. Checklist 컴포넌트에서는 배열을 순회하며 각 요소를 label로 하는 체크박스를 렌더링
2. 체크박스를 클릭하면 handleChecklistChange 함수가 실행되며, 체크된 항목들을 인자로 전달
*/
const Checklist = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="checklist">
      {items.map((item, index) => (
        <label key={index} className="checklist-item">
          <input
            type="checkbox"
            name={item}
            checked={checkedItems[item] || false}
            onChange={handleCheckboxChange}
          />
          <span className="checklist-text">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default Checklist;
