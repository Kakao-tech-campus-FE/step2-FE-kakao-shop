/**
 * 메인 레이아웃의 요소들을 담는 컨테이너 컴포넌트
 *
 * @param {React.ReactNode} children - 컨테이너에 담길 내용
 * @param {string} className - 컨테이너에 추가할 클래스
 * @returns {JSX.Element} - 컨테이너 컴포넌트의 JSX 요소
 */
const MainContainer = ({ children, className }) => {
  return (
    <div className={`main-container mx-auto w-5/6 min-w-[1024px] ${className}`}>
      {children}
    </div>
  );
};

export default MainContainer;
