/**
 * 입력 필드 컴포넌트
 *
 * @param {string} className - 추가할 클래스 이름
 * @param {string} type - 입력 필드의 타입 (예: "text", "password", "email" 등)
 * @param {string} name - 입력 필드의 이름
 * @param {string} id - 입력 필드의 고유 식별자
 * @param {string} value - 입력 필드의 값
 * @param {string} placeholder - 입력 필드에 표시할 플레이스홀더 텍스트 (기본값: 빈 문자열)
 * @param {function} onChange - 입력 값이 변경되었을 때 실행할 함수
 * @param {function} onFocus - 입력 필드가 포커스를 받았을 때 실행할 함수
 * @param {function} onBlur - 입력 필드가 포커스를 잃었을 때 실행할 함수
 * @returns {JSX.Element} - 입력 필드 컴포넌트의 JSX 요소
 */
const Input = ({
  className,
  type,
  name,
  id,
  value,
  placeholder = "",
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      className={`input block py-2 px-0 w-full text-gray-900 font-bold bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer${className}`}
      type={type}
      name={name}
      id={id}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
