const Input = ({name, id, type, value, onChange, className, placeholder}) => {
    return (
        <input
            name={name}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
        />
    );
}

export default Input;