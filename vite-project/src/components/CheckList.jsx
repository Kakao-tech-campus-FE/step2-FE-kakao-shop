import React, { useState } from 'react';

function Checklist() {
  const [items, setItems] = useState([
    { id: 1, text: '항목 1', checked: false },
    { id: 2, text: '항목 2', checked: true },
    { id: 3, text: '항목 3', checked: false }
  ]);

  const handleToggle = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleToggle(item.id)}
          />
          <label>{item.text}</label>
        </div>
      ))}
    </div>
  );
}

export default Checklist;