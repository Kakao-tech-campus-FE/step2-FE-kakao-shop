const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

/** htmlFor: Label이 연결될 입력 요소의 id
      children: Label 내부에 표시될 내용
      className:클래스 이름 */

export default Label;
