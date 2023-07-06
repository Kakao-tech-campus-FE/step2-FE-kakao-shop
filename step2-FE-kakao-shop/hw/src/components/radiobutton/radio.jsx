import React, { useState } from "react";

const Radio = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <label>
        <p>옵션을 선택하세요</p>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
        />
        Option 3
      </label>
    </div>
  );
};

export default Radio;
