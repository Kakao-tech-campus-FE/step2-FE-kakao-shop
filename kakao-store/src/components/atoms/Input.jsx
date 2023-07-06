import PropTypes from "prop-types";

const Input = ({ type, value, name, onChange, placeholder, className, id }) => {
  return (
    <input
      id={id}
      name={name}
      className={`w-full  rounded border border-gray-400 p-2 ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string, //  input 요소의 타입 (예: "username", "email", "password" 등)
  value: PropTypes.string, // input 요소의 값
  name: PropTypes.string, // input 요소의 이름 속성
  onChange: PropTypes.func, // input 값 변경 이벤트 핸들러
  placeholder: PropTypes.string, // input 요소의 플레이스홀더 텍스트
  className: PropTypes.string, // CSS 클래스
  id: PropTypes.string, // input 요소의 ID
};

export default Input;
