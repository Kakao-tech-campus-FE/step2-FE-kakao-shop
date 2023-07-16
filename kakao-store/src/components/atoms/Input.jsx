/**
 * 입력 필드 컴포넌트
 *
 * @param {string} type - 입력 필드 타입
 * @param {string} value - 입력 필드의 값
 * @param {string} name - 입력 필드의 이름
 * @param {function} onChange - 입력 필드 값 변경 이벤트 핸들러
 * @param {string} placeholder - 입력 필드의 placeholder
 * @param {string} className - 입력 필드에 추가할 클래스
 * @param {string} id - 입력 필드의 id
 * @returns {JSX.Element} - 입력 필드
 */

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

export default Input;
