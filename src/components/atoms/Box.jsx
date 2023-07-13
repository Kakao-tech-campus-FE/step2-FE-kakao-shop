/** 박스
 *
 * @param {React.ReactNode} children : 박스에-담길-내용
 * @param {string} className : 박스에-추가할-스타일
 * @return {JSX.Element}
 */
const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
