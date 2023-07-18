import "../../styles/atoms/Box.css";

const Box = ({ children, className = "" }) => {
  /** children: 박스 내부에 표시될 내용, className: 클래스 이름 */
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
