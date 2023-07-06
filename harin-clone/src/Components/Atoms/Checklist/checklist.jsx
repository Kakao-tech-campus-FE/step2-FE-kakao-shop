import React, {useState} from "react";
import CheckBox from "./checkbox";

const CheckBoxList = () => {
  const contents = ['hello', 'this', 'is', 'checklist']

  // to manage state of each checkbox...
  const [checkedItems, setCheckedItems] = useState(new Set())

  // handler for each checkbox.
  const checkedItemHandler = (id, isChecked) => { 
    if (isChecked) {
      checkedItems.add(id)
      setCheckedItems(checkedItems)
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
    }   
  }

  return (
    <>
      {contents.map((item, index) => (
        <CheckBox key={index} item={item} checkedItemHandler={checkedItemHandler} />
      ))}
    </>
  )
}


export default CheckBoxList;