import "../../styles/atoms/Box.css";

// children = Box 안에 들어갈 컴포넌트들, className = 클래스이름(디폴트 = "")
const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
