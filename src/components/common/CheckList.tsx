import styled from 'styled-components';

interface ICheckList {
  names: string[];
  axis: 'column' | 'row';
  bgColor: string;
  color: string;
  width: number;
  height: number;
}
interface ICheckBox {
  bgColor: string;
  color: string;
  width: number;
  height: number;
}
function CheckList({ names, axis, bgColor, color, width, height }: ICheckList) {
  return (
    <Wrap axis={axis}>
      {names.map((name) => (
        <Label htmlFor={name} key={name}>
          {name}
          <CheckBox id={name} name={name} bgColor={bgColor} color={color} width={width} height={height} type="checkbox" />
        </Label>
      ))}
    </Wrap>
  );
}

export default CheckList;

const Wrap = styled.div<{ axis: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${(props) => props.axis};
  justify-content: center;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;
const CheckBox = styled.input<ICheckBox>`
  appearance: none;
  border: 1px solid black;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10%;
  position: relative;
  &:checked {
    border: none;
    background-color: ${(props) => props.bgColor};
  }
  &:checked::before {
    content: 'L';
    color: ${(props) => props.color};
    left: 4px;
    position: absolute;
    display: inline-block;
    transform: rotateY(180deg) rotate(-45deg);
  }
  &:hover {
    opacity: 0.5;
  }
`;
