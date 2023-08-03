/** 타이틀
 *
 * @param {React.ReactNode} children - 타이틀에 쓰일 내용
 * @param {string} className - 타이틀에 적용할 스타일
 * @return {JSX.Element}
 */
const Title = ({ children, className = "" }) => {
  return <span className={`title ${className}`}>{children}</span>;
};

export default Title;
