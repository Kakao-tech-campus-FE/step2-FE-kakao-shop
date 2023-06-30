import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <ToggleSwitch>
        <SwitchInput type="checkbox" checked={isChecked} onChange={handleToggle} />
        <SwitchSlider>
          <SliderHandle checked={isChecked} />
        </SwitchSlider>
      </ToggleSwitch>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: pink;
  }

  &:checked + span::before {
    transform: translateX(26px);
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bbb;
  border-radius: 17px;
  transition: background-color 0.3s;
  cursor: pointer;
`;

const SliderHandle = styled.span`
  text-align: center;
  position: absolute;
  content: '';
  width: 32px;
  height: 32px;
  top: 1px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: ${(props) => (props.checked ? 'translateX(26px)' : 'translateX(0)')};
`;

export default Toggle;
