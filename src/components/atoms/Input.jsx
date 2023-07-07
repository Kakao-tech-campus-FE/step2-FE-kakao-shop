// src/components/atoms/Input.jsx
// Input Componet 입력 필드 
// type: 입력 필드의 타입 (ex. text, email, password)
// value: 입력 필드의 값
// name: 입력 필드의 이름
// onChange: 입력 값 변경 이벤트 핸들러 함수
// placeholder: 입력 필드의 placeholder 텍스트
// className: 추가 CSS 클래스 이름
// id: 입력 필드의 고유 ID
import "../../styles/atoms/Input.css";
const Input = ({type, value, name, onChange, placeholder, className = "", id}) => {
    return (
        <input 
            id={id}
            name={name}
            className='input ${className}'
            type = {type}
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;


