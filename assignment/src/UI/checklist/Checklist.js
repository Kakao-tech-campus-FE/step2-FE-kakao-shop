import React, { useState } from 'react';
import './Checklist.css';

function Checklist({ items }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems((prevState) => ({ ...prevState, [item]: isChecked }));
  };

  return (
    <>
      <h3> 중복구매 </h3>
      <div className="checklist">
        {items.map((item, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={item}
              checked={checkedItems[item] || false}
              onChange={handleCheckboxChange}
            />
            {item}
          </label>
        ))}
      </div>
    </>
  );
}

export default Checklist;
