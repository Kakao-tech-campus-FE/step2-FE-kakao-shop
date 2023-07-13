import "../../styles/atoms/Container.css";

// children: Container에 감싸진 자식 요소
// className: style 적용을 위한 props
const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
