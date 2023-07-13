import React, { useState } from 'react';
import '../styles/check.css';

const CheckboxGroup = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: '초코비', isChecked: false },
    { id: 2, label: '피망', isChecked: false },
    { id: 3, label: '액션가면', isChecked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return {
          ...checkbox,
          isChecked: !checkbox.isChecked,
        };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="CheckboxGroup">
      {checkboxes.map((checkbox) => (
        <label className="CheckboxLabel" key={checkbox.id}>
          <input
            type="checkbox"
            checked={checkbox.isChecked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          <span className="CheckboxCustom"></span>
          {checkbox.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
