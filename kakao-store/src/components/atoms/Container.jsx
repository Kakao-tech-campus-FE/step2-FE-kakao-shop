/**
 * 여러 컴포넌트를 담을 수 있는 컨테이너 컴포넌트
 *
 * @param {React.ReactNode} children - 컨테이너에 담길 내용
 * @param {string} className - 컨테이너에 추가할 클래스
 * @returns {JSX.Element} - 컨테이너
 */
const Container = ({ children, className }) => {
  return <div className={`container mx-auto w-3/5 px-4 ${className}`}>{children}</div>;
};

export default Container;
