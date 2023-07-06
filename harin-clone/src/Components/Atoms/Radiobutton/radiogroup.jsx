import React from "react";
import RadioButton from "./radiobutton";

const RadiobButtonGroup = () => {
  const contents = ['radio', 'button']
  
  return (
    <div>
        {contents.map((item)=>(
          <RadioButton name='rad' item={item} />
        ))}
    </div>
  )
}

export default RadiobButtonGroup