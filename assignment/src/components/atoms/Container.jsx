import "./../../styles/atoms/Container.css";

// Container
// props : children : 담을 내용
const Container = ({ children, className }) => {
  return <div className={`container ${className}`}> {children} </div>;
};

export default Container;
