import React, { useState } from 'react'

const CheckBox = (props) => {

  const [isChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => { // target = event
    setChecked(!isChecked) // 상태 갱신?
    props.checkedItemHandler(target.id, target.checked) // 전체 set에 대해
  }
  
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          checkHandler(e)
          console.log(isChecked)
        }}
        
      />
      {props.item}
    </label>
  )
};

export default CheckBox;