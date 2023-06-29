import React from "react";
import "../styles/Toggle.css";

// isOn: boolean, 스위치가 제어할 상태값
// onClick: function, 스위치를 클릭했을 때 실행할 함수(상태값을 변경하는 함수)
// color: string(css color), on 했을 때 배경색과 테두리 색
export default function Toggle({ isOn, onClick, color }) {
  const containerStyle = {
    backgroundColor: isOn && color,
    borderColor: isOn && color,
  };

  return (
    <div className={isOn ? "on" : "off"}>
      <label className="toggle-container" style={containerStyle}>
        <button className="toggle-circle" onClick={onClick}></button>
      </label>
    </div>
  );
}
