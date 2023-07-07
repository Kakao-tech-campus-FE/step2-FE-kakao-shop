import '../../styles/Atoms/Input.css'


const Input = ({ type, value, name, onChange, placeholder, className, id }) => {
    return (
        <input
            id={id}
            type={type}
            className={`input ${className}`}
            onChange={onChange}
            value={value}
            placehrolder={placeholder}
            name={name}
        ></input>
    );
};
export default Input;