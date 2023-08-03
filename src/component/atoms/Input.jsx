import '../../styles/Input.css';
const Input = ({
    type,
    value,
    onChange,
    placeholder,
    className,
    id,
    name
}) => {
    return (
    <input 
    name={name}
    id={id}
    className={className}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
    );
};


export default Input;