// htmlFor: input과 연결하기 위한 값
// children: Label에 감싸진 자식 요소
// className: style 적용을 위한 class 표시자
const Label = ({ htmlFor = "", children, className }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
