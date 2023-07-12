import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    font-size: 18px;
    // min-height: 45px;
    line-height: 25px;
    border: 0;
    border-bottom: solid 2px lightgray;
    // padding: 10px 0 8px;
    margin: 10px 0 30px 0;
    outline: none;
    &:focus {
        border-color: black;
    }
`;


const Input = ({ type, value, name, onChange, onBlur, placeholder, className="", id }) => {
    return (
        <StyledInput
            id={id}
            name={name}
            className={className}
            type={type}
            value={value}
            onChange={onChange} // Change 이벤트 리스너
            onBlur={onBlur} // FocusOut 이벤트 리스너
            placeholder={placeholder}
        />
    )
}

export default Input;