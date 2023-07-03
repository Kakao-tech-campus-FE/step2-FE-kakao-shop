import React, { useState } from 'react';

const Checklist = ({ options }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <div className="checklist">
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name={option}
            checked={checkedItems[option] || false}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Checklist;
