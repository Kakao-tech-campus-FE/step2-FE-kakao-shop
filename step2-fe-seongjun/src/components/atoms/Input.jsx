

const Input = ({
  type, // 입력 필드의 타입(text, email, password)
  value, // 입력 받은 값
  onChange, // 입력 값이 변경 될때마다 실행되는 함수
  placeholder,  // 입력 해야할 값에 대한 정보를 위한 임시 텍스트
  className, // css 클래스
  id, // id 속성, label 연결
  name, // name 속성, 입력값에 대한 validation 때 필요
  onBlur // 포커스를 잃었을 때 실행되는 이벤트 함수(value 검증)
}) => {
  return (
    <input
      id={id} /* label과 연결해서 쓸 때 유용*/
      name= {name}
      className = {className}
      type = {type}
      value = {value}
      onChange = {onChange}
      placeholder = {placeholder}
      onBlur={onBlur}
    />
  );
};

export default Input;