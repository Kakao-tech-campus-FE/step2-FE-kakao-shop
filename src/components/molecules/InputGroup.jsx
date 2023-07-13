import { styled } from "styled-components";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

// title: label의 텍스트
const InputGroup = ({ id, title, type, placeholder, register }) => {
  return (
    <Container>
      <Label id={id}>{title}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        register={register}
      />
    </Container>
  );
};

export default InputGroup;
