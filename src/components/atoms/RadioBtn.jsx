const RadioBtn = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  onChange,
}) => {
  return (
    <>
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
        />
        {children}
      </label>
    </>
  );
};

export default RadioBtn;
