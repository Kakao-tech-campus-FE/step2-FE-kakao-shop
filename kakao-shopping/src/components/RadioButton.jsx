import { useState } from "react";
import "../style/RadioButton.css";

const RadioButton = () => {
  const [inputStatus, setInputStatus] = useState("");

  const handleClickRadioButton = (radioBtnName) => {
    setInputStatus(radioBtnName);
  };
  return (
    <>
      <div className="radio-contatiner">
        <input
          type="radio"
          id="radio1"
          checked={inputStatus === "radio1"}
          onClick={() => handleClickRadioButton("radio1")}
        />
        <label htmlFor="radio">Radio1</label>

        <input
          type="radio"
          id="radio2"
          checked={inputStatus === "radio2"}
          onClick={() => handleClickRadioButton("radio2")}
        />
        <label htmlFor="radio">Radio2</label>

        <input
          type="radio"
          id="radio3"
          checked={inputStatus === "radio3"}
          onClick={() => handleClickRadioButton("radio3")}
        />
        <label htmlFor="radio">Radio3</label>
      </div>
    </>
  );
};

export default RadioButton;
