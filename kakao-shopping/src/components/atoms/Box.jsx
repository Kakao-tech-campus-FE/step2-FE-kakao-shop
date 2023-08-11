// children: 내용 텍스트
// className: 추가 클래스명

import "../../styles/atoms/Box.css";

const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
