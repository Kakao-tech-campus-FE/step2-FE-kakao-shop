const Input = ({ id, className="", name, type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        id={id}
        className={`tf_g ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;