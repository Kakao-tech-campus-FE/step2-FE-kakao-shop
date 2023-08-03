import "../../styles/atoms/Container.css";

const Container = ({ children, className = "" }) => {
  // children 컨테이너 내부에 표시할 내용을 나타냅니다.
  // className 추가적인 스타일을 적용하기 위한 클래스 이름
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
