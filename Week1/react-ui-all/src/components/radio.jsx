import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import "./radio.css";
export const Radiobutton = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radios">
      <label>
        <input
          type="radio"
          value="Samsung"
          checked={selectedOption === "Samsung"}
          onChange={handleOptionChange}
        />
        Samsung
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="WD"
          checked={selectedOption === "WD"}
          onChange={handleOptionChange}
        />
        WD
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Seagate"
          checked={selectedOption === "Seagate"}
          onChange={handleOptionChange}
        />
        Segate
      </label>
    </div>
  );
};
