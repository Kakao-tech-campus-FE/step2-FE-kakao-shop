/** 입력 필드
 *
 * @param {string} id - 고유 식별자
 * @param {string} type - 입력 필드 타입
 * @param {string} name - 입력 필드 이름
 * @param {string} value - 입력 필드 값
 * @param {string} placeholder - 입력 필드 플레이스홀더
 * @param {string} className - 입력 필드에 적용할 스타일
 * @param {function} onChange - 버튼 클릭 시 실행할 함수
 * @return {JSX.Element}
 */
const Input = ({
  id,
  type,
  name,
  value,
  placeholder,
  className = "",
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
