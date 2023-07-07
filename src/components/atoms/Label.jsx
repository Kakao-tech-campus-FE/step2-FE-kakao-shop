/** 라벨
 *
 * @param {string} htmlFor - 라벨이 참조하는 id
 * @param {React.ReactNode} children - 라벨에 들어갈 내용
 * @param {string} className - 라벨에 적용할 스타일
 * @return {JSX.Element}
 */
const Label = ({ htmlFor, children, className = "" }) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {children}
    </label>
  );
};

export default Label;
