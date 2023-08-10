// type: input의 타입 결정
// value: input 값
// onChange: change 핸들러
// placeholder: 텍스트 표시자
// id: Label과 연결하기 위한 id 값
// name: 태그 이름
const Input = ({
  type,
  value,
  onChange,
  placeholder,
  id,
  name,
  className,
  onFocus,
  onBlur,
  ref,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
    />
  );
};

export default Input;
