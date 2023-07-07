import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import "./checklist.css";
export const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: "cable", checked: false },
    { id: 2, text: "driver", checked: false },
    { id: 3, text: "screw", checked: false },
  ]);

  const handleToggle = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { id: item.id, text: item.text, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="checklists">
      {items.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleToggle(item.id)}
          />
          {item.text}
          <br />
        </label>
      ))}
    </div>
  );
};
