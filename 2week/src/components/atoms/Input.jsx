const Input = ({ type, value, onChange, placeholder, className, id }) => {
  return (
    <>
      <input
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
		id={id}
		// id를 포함시키는 이유는 label이라는 element와 연결해서 사용할 때 유용하기 때문
      />
    </>
  );
};

export default Input;