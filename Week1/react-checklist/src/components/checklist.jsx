import React, { useState } from "react"; // eslint-disable-line no-unused-vars

export const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: "list 1", checked: false },
    { id: 2, text: "list 2", checked: false },
    { id: 3, text: "list 3", checked: false },
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
    <div>
      {items.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleToggle(item.id)}
          />
          {item.text}
        </label>
      ))}
    </div>
  );
};
