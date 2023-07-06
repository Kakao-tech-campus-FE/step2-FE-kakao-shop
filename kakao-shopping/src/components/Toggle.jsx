import React, { useState } from "react";
import "../style/Toggle.css";

const Toggle = () => {
  const [isChecked, setCheck] = useState(false);
  const title = "This is a Title";
  const content = "This is a Content";
  return (
    <>
      <div className="">
        <h3 className="title">{title}</h3>
        <button
          onClick={() => {
            setCheck((e) => !e);
          }}
        >
          {isChecked ? "-" : "+"}
        </button>
      </div>
      {isChecked && <div className="content">{content}</div>}
    </>
  );
};

export default Toggle;
