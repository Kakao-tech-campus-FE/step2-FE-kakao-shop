import React, { useState } from "react";

export default function RadioExample() {
  const [value, setValue] = useState("1번");

  const handleCheck = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <label>
        <input
          type="radio"
          value="1번"
          checked={value === "1번"}
          onClick={handleCheck}
        />
        1번
      </label>
      <label>
        <input
          type="radio"
          value="2번"
          checked={value === "2번"}
          onClick={handleCheck}
        />
        2번
      </label>
      <label>
        <input
          type="radio"
          value="3번"
          checked={value === "3번"}
          onClick={handleCheck}
        />
        3번
      </label>
    </div>
  );
}
