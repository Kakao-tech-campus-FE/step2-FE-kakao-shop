import Toggle from "../components/Toggle";
import React, { useState } from "react";

export default function ToggleTest() {
  // smile toggle
  const [isSmile, setIsSmile] = useState(false);

  // toggle color
  const [color, setColor] = useState("black");

  const handleClick = () => {
    setIsSmile(!isSmile);
  };

  const handleColorChange = (color) => {
    setColor(color.target.value);
  };

  return (
    <>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <p style={{ textAlign: "left" }}>{isSmile ? ":)" : ":("}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginRight: "3rem" }}>smile</p>
          <Toggle isOn={isSmile} color={color} onClick={handleClick}></Toggle>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <p style={{ display: "inline", marginRight: "1rem" }}>
          You can change the color, if you want
        </p>
        <input type="color" value={color} onChange={handleColorChange}></input>
      </div>
    </>
  );
}
