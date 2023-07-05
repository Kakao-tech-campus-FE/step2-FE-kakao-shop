import styled from "styled-components";
import { useState } from "react";

const SwitchBox = styled.input`
  appearance: none;
  width: 2.25em;
  height: 1.25em;
  border: max(2px, 0.1em) solid gray;
  border-radius: 1.25em;
  transition: background-color 250ms linear;

  &::before {
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: gray;
    transition: background-color 250ms linear;
  }

  &:checked {
    background-color: #ffee00;
    border-color: #ffee00;
  }

  &:checked::before {
    background-color: white;
    left: 1.5em;
  }
`;

const ToogleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToogle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <SwitchBox
        role="switch"
        type="checkbox"
        checked={isOn}
        onClick={handleToogle}
      />
      {isOn ? "ON" : "OFF"}
    </div>
  );
};

export default ToogleButton;
