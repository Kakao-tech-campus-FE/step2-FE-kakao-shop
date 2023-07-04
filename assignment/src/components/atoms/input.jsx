// Input 컴포넌트 만들기
const Input = ({ type, value, onChange, placeholder, id}) => {
    return (
    <input
        id = {id}
        className = {className}
        type={type}
        value={value} 
        onChange={onChange}  
        placeholder={placeholder}
        />
    );
}

export default Input;