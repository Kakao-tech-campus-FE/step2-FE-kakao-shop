import styled from "styled-components";

const InputBox = styled.input`
  display: block;
  width: 32rem;
  padding: 0.6rem;
  margin: 0.6rem 0;

  border: 1px solid #979797;
  border-radius: 6px;
`;
const Input = ({ id, name, type, value, placeholder, onChange }) => {
  // id: input 컴포넌트 고유의 id 지정
  // name: input 요소 이름
  // type: input 컨트롤 유형
  // value: input 컴포넌트의 현재 값
  // placeholder: 아무 내용도 입력되지 않았을 때 보이는 내용
  // onChange: input 컴포넌트의 변화가 일어났을 때 동작 지정
  return (
    <InputBox
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
