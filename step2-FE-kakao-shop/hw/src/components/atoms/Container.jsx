import "../../styles/atoms/Container.css";

// children = 안에 담길 내용들, className = 클래스이름 (undifined 없애려고 초기화)
const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
