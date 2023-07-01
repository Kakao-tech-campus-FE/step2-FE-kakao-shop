import { styled } from 'styled-components';

interface IToggleBox {
  color: string;
  bgcolor: string;
  width: number;
  height: number;
}
interface ToggleProps {
  title: string;
  bgcolor: string;
  color: string;
  width: number;
  height: number;
  onChange: (e: React.ChangeEvent) => void;
}
function Toggle({ title, bgcolor, width, height, color, onChange }: ToggleProps) {
  return (
    <Label htmlFor={title}>
      <ToggleBox
        id={title}
        name={title}
        type="checkbox"
        role="switch"
        width={width}
        height={height}
        color={color}
        bgcolor={bgcolor}
        onChange={onChange}
      />
      <span>{title}</span>
    </Label>
  );
}

export default Toggle;

const Label = styled.label`
  display: flex;
  align-items: center;
`;
const ToggleBox = styled.input<IToggleBox>`
  box-shadow: 0 0 5px gray;
  margin-right: 5px;
  padding: 0;
  cursor: pointer;
  appearance: none;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.height}px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border-radius: 100%;
    width: ${(props) => props.height}px;
    height: ${(props) => props.height}px;
    background-color: gray;
    transition: 0.25s linear;
  }
  &:checked::before {
    background-color: ${(props) => props.color};
    transform: translateX(${(props) => props.width - props.height}px);
    transition: 0.25s linear;
  }
  &:checked {
    background-color: ${(props) => props.bgcolor};
    transition: 0.25s linear;
  }
  &:hover {
    opacity: 0.8;
  }
`;
