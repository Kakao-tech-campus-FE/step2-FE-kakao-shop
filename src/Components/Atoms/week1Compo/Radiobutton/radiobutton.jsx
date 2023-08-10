import React, {useState} from "react";

const RadioButton = props => {
  const [isChecked, setChecked] = useState(false) //초기값, 변하는 값

  const checkE = () => {
    setChecked(!isChecked)
    console.log(isChecked)
  }

  return (
    <label>
      <input
        type='radio'
        name={props.name} 
        value={setChecked}
        onChange={(e)=>{
          checkE()
        }}
      />
      {props.item}

    </label>

  )
}

export default RadioButton