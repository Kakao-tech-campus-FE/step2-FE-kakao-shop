const Input = ({
    type = "", // Input 타입
    value = "", // Input 값
    name = "", // Input name
    onChange, // Input의 값이 바뀌었을 때의 handler
    placeholder = "", // Input의 placeholder
    className = "", // class
    ...props
}) => {
    return (
        <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`input py-2 ${className}`}
            {...props}
        ></input>
    );
};

export default Input;
