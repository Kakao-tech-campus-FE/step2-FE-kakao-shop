import Checklist from "../components/Checklist";
import React, { useState } from "react";

export default function ChecklistTest() {
  const [checked, setChecked] = useState([
    { id: 1, checked: false, text: "Apple" },
    { id: 2, checked: false, text: "Orange" },
    { id: 3, checked: false, text: "Grape" },
    { id: 4, checked: false, text: "Banana" },
  ]);

  const handleChecklistChange = (itemId) => {
    const updatedChecked = checked.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setChecked(updatedChecked);
  };

  const checkedItem = checked.filter((item) => item.checked === true);

  return (
    <>
      {checked.map((item) => (
        <Checklist key={item.id} item={item} onChange={handleChecklistChange} />
      ))}

      {checkedItem.length > 0 && (
        <p>
          Selected item:{" "}
          {checkedItem.map((item) => (
            <span key={item.id}>{item.text} </span>
          ))}
        </p>
      )}
    </>
  );
}
