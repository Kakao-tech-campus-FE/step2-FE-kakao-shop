import Radio from "../components/Radio";
import React, { useState } from "react";

export default function RadioTest() {
  const [checked, setChecked] = useState("");

  const options = [
    { value: "red", text: "❤️" },
    { value: "yellow", text: "💛" },
    { value: "green", text: "💚" },
    { value: "blue", text: "💙" },
    { value: "purple", text: "💜" },
  ];

  const handleRadioChange = (event) => {
    setChecked(event.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <Radio
          key={option.value}
          option={option}
          onChange={handleRadioChange}
          checked={checked}
        />
      ))}

      <p>Selected item: {checked}</p>
    </>
  );
}
