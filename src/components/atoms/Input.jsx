const Input = ({ type, value, name, onChange, placeholder, className, id }) => {
  return (
    <input
      id={id}
      name={name}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

/** 
  type: input 필드의 타입
  value: input 필드의 값
  name: input 필드의 이름
  onChange: input 필드 값이 변경되었을 때 호출되는 함수
  placeholder: input 필드에 표시될 임시 텍스트
  className: 클래스 이름
  id: input 필드의 고유 식별자
*/

export default Input;
