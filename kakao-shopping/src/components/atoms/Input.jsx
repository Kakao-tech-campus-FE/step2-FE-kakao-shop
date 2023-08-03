// id: 입력 필드의 id인 동시에, label과 연결된 id
// type: 입력 필드의 타입
// value: 입력 필드의 값
// name: 입력 필드의 이름
// onChange: 입력 값 변경 이벤트 핸들러 함수
// placeholder: placeholder
// className: 추가 클래스명

const Input = ({ id, type, value, name, onChange, placeholder, className }) => {
  return (
const Input = ({ type, value, name, onChange, placeholder, id }) => {
  return;
  <>
    <input
      id={id}
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
    />
  </>;
};

export default Input;
