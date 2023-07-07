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
