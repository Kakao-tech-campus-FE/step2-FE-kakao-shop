import React, { useState } from 'react';
import './Checklist.css';

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
