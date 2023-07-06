const Input = ({
                   id, type, value, placeholder, onChange
               }) => (<input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            onChange(e);
        }}
    />);

export default Input;