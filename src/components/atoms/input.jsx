const Input = ({
    type,
    value,
    onChange,
    placeholder,
    className,
    id,
    name,
}) => {
    return (
        <>
            <input 
            id={id} // labeling을 위해 id 사용
            name={name}
            className={className}
            type={type} 
            value={value}
            onChange={onChange} 
            placeholder={placeholder} /> 
        </>
    );
};

export default Input;