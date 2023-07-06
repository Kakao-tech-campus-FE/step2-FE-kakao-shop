const Input = ({
    type,
    value,
    onChange,
    placeholder,
    className,
    id
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            id={id}>

        </input>
    );
}

export default Input