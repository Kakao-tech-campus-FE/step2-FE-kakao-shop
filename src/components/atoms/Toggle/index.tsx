import { useState } from "react";
import { styled } from "styled-components";

interface Background {
  offColor: string;
  onColor: string;
}

interface CheckedProps {
  checked: boolean;
}

interface Props {
  background: Background;
}

const Toggle = ({ background }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Wrapper>
      <Check
        checked={isChecked}
        background={background}
        onClick={() => {
          setIsChecked((prev) => !prev);
        }}
      />
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Check = styled.div<CheckedProps & Props>`
  position: relative;
  width: 5em;
  height: 2em;
  border-radius: 2em;
  background-color: ${({ checked, background }) =>
    checked ? background.onColor : background.offColor};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 2px;
    width: calc(2em - 2px);
    height: calc(2em - 2px);
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: transform 0.3s ease;
    transform: ${({ checked }) =>
      checked ? "translateX(calc(3em - 2px))" : "translateX(0)"};
  }
};
`;
