// package
import { useState, useEffect } from "react";

// css
import "../styles/RadioButton.css";

export default function RadioButton({ radios }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setSelectedIndex(Number(e.target.id));
  };

  return (
    <div>
      {radios.map((radio, index) => (
        <div>
          <input
            id={index}
            type="radio"
            onClick={handleClick}
            checked={selectedIndex === index}
          />
          <label htmlFor={index}>{radio}</label>
        </div>
      ))}
    </div>
  );
}
