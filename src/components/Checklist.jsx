import React, { useState } from 'react';
import '../styles/Checklist.css';

const Checklist = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemCheck = (item) => {
    const isSelected = selectedItems.includes(item);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="checklist">
      <div className="item-container">
        {items.map((item, index) => (
          <div key={index} className="item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleItemCheck(item)}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p>Select : {selectedItems.join(', ')}</p>
    </div>
  );
};

export default Checklist;
