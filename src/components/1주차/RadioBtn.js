import React, { useState } from "react";
const RadioBtn = () => {
  const [radioVal, setRadioVal] = useState("Heart1");
  const onChange = (e) => {
    setRadioVal(e.target.value);
  };

  return (
    <div className="RadioBtn">
      <h3>라디오버튼</h3>
      <label className="radio">
        <span>❤️</span>
        <input
          type="radio"
          value="Heart1"
          checked={radioVal === "Heart1"}
          onChange={onChange}
        />
      </label>
      <label className="radio">
        <span>🧡</span>
        <input
          type="radio"
          value="Heart2"
          checked={radioVal === "Heart2"}
          onChange={onChange}
        />
      </label>
      <label className="radio">
        <span>💛</span>
        <input
          type="radio"
          value="Heart3"
          checked={radioVal === "Heart3"}
          onChange={onChange}
        />
      </label>
      <label className="radio">
        <span>💚</span>
        <input
          type="radio"
          value="Heart4"
          checked={radioVal === "Heart4"}
          onChange={onChange}
        />
      </label>
      <label className="radio">
        <span>💙</span>
        <input
          type="radio"
          value="Heart5"
          checked={radioVal === "Heart5"}
          onChange={onChange}
        />
      </label>
      <div className="pickHeart">
        나의 pick 하트는 <strong>{radioVal}!</strong>
      </div>
    </div>
  );
};

export default RadioBtn;
