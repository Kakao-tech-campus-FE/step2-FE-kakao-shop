const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  id,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      id={id} // id는 label과 함께 사용할때 유용하기 때문에 꼭 넣어준다
      name={name} // name은 event.target.name으로 체크하여 다양하게 사용하기 위해 넣었다
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
export default Input;
