/**
 * 여러 컴포넌트를 담을 수 있는 컨테이너 컴포넌트
 * 공통 스타일에 대한 감이 잡히지 않아 프로젝트 진행하면서 수정 예정
 *
 * @param {React.ReactNode} children - 컨테이너에 담길 내용
 * @param {string} className - 컨테이너에 추가할 클래스
 * @returns {JSX.Element} - 컨테이너 컴포넌트의 JSX 요소
 */
const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto max-w-4xl ${className}`}>{children}</div>
  );
};

export default Container;
