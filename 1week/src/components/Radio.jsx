import React, { useState } from 'react';

const Radio = () => {
  const radio = [
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" }
  ];

  const [selected, setSelected] = useState(1);

  const handleChange = (event) => {
    window.localStorage.setItem("option", event.target.value);
    setSelected(parseInt(event.target.value));
  };

  return (
    <>
      <h1>Radio</h1>
      {radio.map((option) => (
        <label key={option.id}>
          {option.value}
          <input
            type="radio"
            value={option.id}
            checked={selected === option.id}
            onChange={handleChange}
          />
        </label>
      ))}
    </>
  );
};

export default Radio;
