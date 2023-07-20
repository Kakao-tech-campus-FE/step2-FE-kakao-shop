/**
 * 라벨 컴포넌트
 *
 * @param {React.ReactNode} children - 라벨에 담길 내용
 * @param {string} htmlfor - 라벨과 연결될 input 요소의 id
 * @param {string} className - 라벨에 추가할 클래스
 * @returns {JSX.Element} - 라벨
 */

const Label = ({ children, htmlfor, className }) => {
  return (
    <label htmlfor={htmlfor} className={`font-semibold ${className}`}>
      {children}
    </label>
  );
};

export default Label;
