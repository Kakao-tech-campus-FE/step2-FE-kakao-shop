/**
 * 작은 단위를 묶어주는 박스
 * 아직 공통적인 스타일 속성이나 기능이 감이 잡히지 않아서 앞으로 계속 고민하면서 바꿔나갈 예정
 *
 * @param {React.ReactNode} children - 박스에 담길 내용
 * @param {string} className - 박스에 추가할 클래스 (박스에 담기는 요소마다 다른 스타일을 적용할 수 있도록 사용)
 * @returns {JSX.Element} - 박스 컴포넌트의 JSX 요소
 */
const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
