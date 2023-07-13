const Container = ({ children, className }) => { // 컨테이너: 내용, 속성
  return <div className={`mx-auto w-1/3 h-2/3 align-middle ${className}`}>{children}</div>
};

export default Container;