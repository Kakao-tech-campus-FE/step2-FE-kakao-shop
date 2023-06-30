import React, { useState } from 'react';

const CheckList = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const handleInputChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const handleAddItem = () => {
    if (currentItem.trim() !== '') {
      setItems([...items, currentItem]);
      setCurrentItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={currentItem}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>추가</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;