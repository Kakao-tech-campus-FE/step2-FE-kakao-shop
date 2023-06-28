import { styled } from 'styled-components';

function Toggle({ title, color }: { title: string; color: string }) {
  return (
    <Label htmlFor={title}>
      <ToggleBox id={title} name={title} type="checkbox" role="switch" />
      {title}
    </Label>
  );
}

export default Toggle;

const Label = styled.label`
  display: flex;
  align-items: center;
`;
const ToggleBox = styled.input`
  margin-right: 5px;
  cursor: pointer;
  appearance: none;
  border: 1px solid gray;
  width: 50px;
  height: 20px;
  border-radius: 15px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    top: 2.5px;
    left: 2.5px;
    background-color: gray;
    transition: 0.25s linear;
  }
  &:checked::before {
    background-color: white;
    transform: translateX(30px);
    transition: 0.25s linear;
  }
  &:checked {
    border: none;
    background-color: yellow;
    transition: 0.25s linear;
  }
  &:hover {
    box-shadow: 0 0 5px gray;
  }
`;
