/**
 * 라벨 컴포넌트
 *
 * @param {React.ReactNode} children - label에 들어갈 내용
 * @param {string} className - 추가할 클래스 이름
 * @param {string} htmlFor - 라벨이 참조하는 입력 필드의 id
 * @returns {JSX.Element} - 라벨 컴포넌트의 JSX 요소
 */
const Label = ({ children, className, htmlFor }) => {
  return (
    <label className={`label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
