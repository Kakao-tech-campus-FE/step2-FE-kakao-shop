/**
 * 
 * @param {Object} props - 제목 컴포넌트의 속성들
 * @param {React.ReactNode} props.children - 제목에 표시될 내용
 * @param {string} [props.className=""] - 추가 CSS 클래스 이름
 * 
 * @returns {JSX.Element} - Title Component
 */
const Title = ({ children, className = "" }) => {
    return <h1 className={`title text-2xl mb-2 ${className}`}>{children}</h1>;
  };
  
  export default Title;