import { useState, useEffect } from "react";

export default function RadioList({ items }) {
  const [selectedIndex, setSelectedIndex] = useState("r0");

  const handleChange = (e) => {
    setSelectedIndex(e.target.id);
  };

  useEffect(() => {
    console.log("RadioList: " + selectedIndex);
  }, [selectedIndex]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <input
            id={"r" + index}
            type="radio"
            onChange={handleChange}
            checked={selectedIndex === "r" + index}
          />
          <label htmlFor={"r" + index}>{item}</label>
        </div>
      ))}
    </div>
  );
}
