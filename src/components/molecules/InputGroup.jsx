import { styled } from "styled-components";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const InputGroup = ({ id, title, name, type, placeholder, register }) => {
  return (
    <Container>
      <Label id={id}>{title}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
      />
    </Container>
  );
};

export default InputGroup;
