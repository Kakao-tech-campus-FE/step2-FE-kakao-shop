import "../../styles/Toggle.scss";
import React, { useState } from "react";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(false);
  const ClickedToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <div
        className={`toggleBox ${toggleState ? "afterToggle" : "beforeToggle"}`}
        onClick={() => ClickedToggle()}
      >
        <div className="toggleButton"></div>
      </div>
    </>
  );
};

export default Toggle;
