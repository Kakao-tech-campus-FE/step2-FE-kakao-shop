import styled from '@emotion/styled';

import useToggle from '@hooks/@common/useToggle';

type Props = {
  name: string;
  on?: boolean;
  disabled?: boolean;
  onChange: () => void;
};

const Toggle = ({ name, on = false, disabled = false, onChange, ...props }: Props) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = () => {
    toggle();
    onChange();
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput type="checkbox" name={name} checked={checked} disabled={disabled} onChange={handleChange} />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.label`
  display: inline-block;

  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 54px;
  height: 30px;

  box-sizing: border-box;
  padding: 3px;

  background-color: #ccc;
  border-radius: 15px;

  transition: background-color 150ms;

  &:after {
    content: '';
    display: block;

    position: relative;
    left: 0;

    width: 25px;
    height: 25px;

    background-color: white;
    border-radius: 50%;

    transition: left 150ms;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: #ffe812;
    &:after {
      left: calc(100% - 25px); // 흰색 원 이동
    }
  }
  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed; // 사용할 수 없음을 알림

    &:after {
      opacity: 0.7;
    }
  }
`;
