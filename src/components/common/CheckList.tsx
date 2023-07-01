import styled from 'styled-components';

interface IData {
  name: string;
  value: string;
}
interface ICheckList {
  datas: IData[];
  axis: 'column' | 'row';
  bgcolor: string;
  color: string;
  width: number;
  height: number;
}
interface ICheckBox {
  bgcolor: string;
  color: string;
  width: number;
  height: number;
}
function CheckList({ datas, axis, bgcolor, color, width, height }: ICheckList) {
  return (
    <Wrap axis={axis}>
      {datas.map((data) => (
        <Label htmlFor={data.value} key={data.value}>
          {data.value}
          <CheckBox
            id={data.value}
            name={data.name}
            value={data.value}
            bgcolor={bgcolor}
            color={color}
            width={width}
            height={height}
            type="checkbox"
          />
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
  margin: 5px;
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
    background-color: ${(props) => props.bgcolor};
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
