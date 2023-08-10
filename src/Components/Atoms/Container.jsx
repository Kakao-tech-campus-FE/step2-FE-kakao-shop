const Container = ({ children, className }) => {
  // 컨테이너: 내용, 속성
  return <div className={className}>{children}</div>;
};

export default Container;
