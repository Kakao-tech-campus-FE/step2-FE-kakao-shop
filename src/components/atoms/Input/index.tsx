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
  fontSize?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = ({
  type = "text",
  id,
  name,
  value,
  placeholder,
  width,
  height,
  fontSize,
  onChange,
  onBlur,
}: Props) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      width={width}
      height={height}
      fontSize={fontSize}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;

const StyledInput = styled.input<Props>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  margin-top: 4px;
  padding: 10px 0 8px;
  border: solid #ccc;
  border-width: 0 0 2px;
  background-color: transparent;
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  line-height: 25px;
  outline: none;

  &:focus {
    border-bottom-color: black;
  }
`;
