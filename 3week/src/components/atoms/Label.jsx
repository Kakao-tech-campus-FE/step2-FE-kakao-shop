const Label = ({ htmlFor, children, className }) => {
  // htmlFor 레이블과 연결된 input 요소의 id 속성값
  // children 레이블 내부에 표시할 내용
  // className 추가적인 스타일을 적용하기 위한 클래스 이름
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
