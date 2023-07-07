const Box = ({ children, className }) => { // 박스: 내용과 속성
  return <div className={`box ${className}`}>{children}</div>
};

export default Box;