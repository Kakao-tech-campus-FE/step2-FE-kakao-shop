import Label from "@components/atoms/Label";
import { styled } from "styled-components";

interface Props {
  data: {
    id: string;
    name: string;
    value: string;
  };
  color: string;
  label?: string;
}

const CheckBox = ({ data, color, label }: Props) => {
  const { id, name, value } = data;
  return (
    <Wrapper>
      <CheckButton
        id={id}
        name={name}
        value={value}
        color={color}
        type="checkbox"
      />
      <Label color={"rgba(0,0,0,.7)"} htmlFor={id}>
        {label}
      </Label>
    </Wrapper>
  );
};

export default CheckBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckButton = styled.input<Pick<Props, "color">>`
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  margin: 0 8px 0 0;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  &::before {
    content: "✔";
    position: absolute;
    left: 15%;
    bottom: 0;
    visibility: hidden;
  }

  &:checked {
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};
  }

  &:checked::before {
    visibility: visible;
  }
`;
