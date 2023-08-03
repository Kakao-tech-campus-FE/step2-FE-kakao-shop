/**
 * 
 * @param {Object} props - 입력 필드 컴포넌트의 속성들
 * @param {string} props.type - 입력 필드의 타입 (ex. text, email, password)
 * @param {string} props.value - 입력 필드의 값
 * @param {string} props.name - 입력 필드의 이름
 * @param {Function} props.onChange - 입력 값 변경 이벤트 핸들러 함수
 * @param {string} props.placeholder - 입력 필드의 placeholder 텍스트
 * @param {string} [props.className=""] - 추가 CSS 클래스 이름
 * @param {string} props.id - 입력 필드의 고유 ID
 * 
 * @returns {JSX.Element} - Input Component
 */
const Input = ({ type, value, name, onChange, placeholder, className = "", id }) => {
    return (
      <input
        id={id}
        name={name}
        className={`mt-5 h-8 ${className}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
};

export default Input;
