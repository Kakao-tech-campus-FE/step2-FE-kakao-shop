import styled from "styled-components";

const InputField = styled.input`
    width: 25rem;
    height: 2.5rem;

    size: 10;
    border-radius:5px;
    border:0.5px solid #a0a0a0;
    padding-left: 1rem;
    &::placeholder{
        color: #b3b3b3;
    }

`
// input 박스 
// type은 input의 타입(텍스트, 패스워드 등),name 은 이메일이나 닉네임 등의 인풋 박스의 이름,
// value는 인풋 박스에 입력되는 값, onChange는 인풋 박스가 변경될 때 실행되는 함수로, 값이 입력될때마다 정규표현식 검사를 해준다.
//placeholder 은 인풋 박스 안에 값을 입력하기 전 보이는 글씨를 넘겨준다.
//id는 name 과 같으며, htmlfor을 위한 값.
const Input = ({ type, name, value, onChange, placeholder, id }) => {
    return (
        <InputField
            id={id}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />

    );
}

export default Input;
