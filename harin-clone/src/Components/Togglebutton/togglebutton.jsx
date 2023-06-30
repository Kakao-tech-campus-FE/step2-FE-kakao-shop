// import { useState } from "react";


export const ToggleButton = () => {
  // const [isOn, setOn] = useState(false)
  
  // const toggleHandler = () => {
  //   setOn(!isOn)
  //   console.log(isOn)
  // }

  return (
    <>
      <input
      type="checkbox"
      id="toggle"
      hidden
      />
      <label htmlFor='toggle' className="toggleContainer">
        <span className="toggleButton"></span>
      </label>
    </>
  )
}