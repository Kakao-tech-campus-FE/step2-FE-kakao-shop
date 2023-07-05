import React from "react";

// props
// onClick: 버튼 클릭 시 실행될 콜백
// children: 버튼 라벨
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
