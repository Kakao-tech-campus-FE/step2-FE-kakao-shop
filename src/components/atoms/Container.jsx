/** 컴포넌트들을 담을 컨테이너
 *
 * @param {React.ReactNode} children - 컨테이너에 들어갈 내용
 * @param {string} className - 컨테이너에 적용할 스타일
 * @return {JSX.Element}
 */
const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
일;
