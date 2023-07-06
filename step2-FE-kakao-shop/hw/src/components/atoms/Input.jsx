// type = 인풋 타입, name = 이름, value = 입력값
// placeholder = 그대로, className = 클래스이름, id = 아이디
const Input = ({ type, name, value, onChange, placeholder, className, id }) => {
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

export default Input;
