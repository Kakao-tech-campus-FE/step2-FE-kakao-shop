import React from "react";
// import "../../styles/atoms/Container.css";

// props
// className: CSS 스타일 적용 시 활용할 클래스 이름
// children: Container 안에 들어갈 내용
const Container = ({ className = "", children }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
