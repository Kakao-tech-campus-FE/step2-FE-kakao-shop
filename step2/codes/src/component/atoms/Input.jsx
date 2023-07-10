const Input = ({type, value, name, onChange, placeholder, className, id, onBlur}
    ) => {
        return <input 
        className ={className}
        id={id}
        name={name}
        type={type} 
        value={value}
        onChange={onChange}
        placeholder = {placeholder}
        onBlur = {onBlur}
        />;
    };
    
    export default Input;