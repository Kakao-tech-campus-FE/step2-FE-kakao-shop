import Input from "@components/atoms/Input";
import Label from "@components/atoms/Label";
import { styled } from "styled-components";

interface Props {
  // style을 받는 prop과 data처리를 위한 prop, onChange Event
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const InputGroup = ({
  type,
  id,
  name,
  value,
  placeholder,
  width,
  height,
  color,
  fontSize,
  label,
  onChange,
  onBlur,
}: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={id} color={color} fontSize={"12px"}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        height={height}
        fontSize={fontSize}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Wrapper>
  );
};

export default InputGroup;

const Wrapper = styled.div``;
