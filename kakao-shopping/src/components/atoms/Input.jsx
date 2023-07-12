const Input = ({
    type, // Input 타입
    value, // Input 값
    name, // Input name
    onChange, // Input의 값이 바뀌었을 때의 handler
    placeholder, // Input의 placeholder
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    return (
        <input
            type={type ? type : ""}
            value={value ? value : ""}
            name={name ? name : ""}
            onChange={onChange}
            placeholder={placeholder ? placeholder : ""}
            className={`input py-2 ${className}`}
            id={id}
            style={style}
        ></input>
    );
};

export default Input;
