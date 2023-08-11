// htmlFor: label과 연결된 입력 필드의 ID
// children: label의 내용
// className: label 클래스명

const Label = ({ htmlFor, children, className }) => {
  return (
    // label의 for 속성, id 값을 넣게되면 라벨이 클릭되는 효과
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
