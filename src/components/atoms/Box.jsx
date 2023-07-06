// className의 기본 값을 빈 string으로 주어 엉뚱한(undefined)같은 className이 적용되지 않도록
const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};
export default Box;
