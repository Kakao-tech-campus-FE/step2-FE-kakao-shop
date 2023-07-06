import "../../styles/input.css";
const Input = ({
                   id, type, value, placeholder, onChange, onBlur = () => {
    }
               }) => (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            onChange(e);
        }}
        onBlur={onBlur}
        className={`input ${id}`}
    />);

export default Input;