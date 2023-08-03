import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div``;
const Button = styled.button`
  position: relative;
  width: 4rem;
  height: 2rem;

  border-radius: 2rem;
  background-color: rgb(200, 200, 200);
  border: none;
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &.toggle-true {
    background-color: ${({ color }) => color};
    transition: all 0.5s ease-in-out;
  }
`;

const Circle = styled.span`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  transition: all 0.5s ease-in-out;

  width: 1.6rem;
  height: 1.6rem;
  border-radius: 9999px;
  background-color: white;

  &.toggle-true {
    transform: translateX(2rem);
    transition: all 0.5s ease-in-out;
  }
`;

function ToggleButton({ isTrue, color }) {
  const [isToggleTrue, setIsToggleTrue] = useState(false);
  const handleToggleClick = () => {
    setIsToggleTrue((prev) => !prev);
  };
  useEffect(() => {
    setIsToggleTrue(isTrue);
  }, [isTrue]);
  return (
    <Wrapper>
      <Button
        onClick={handleToggleClick}
        className={isToggleTrue && "toggle-true"}
        color={color}
      >
        <Circle className={isToggleTrue && "toggle-true"} />
      </Button>
    </Wrapper>
  );
}

ToggleButton.propTypes = {
  isTrue: PropTypes.bool,
  color: PropTypes.string,
};

ToggleButton.defaultProps = {
  isTrue: false,
  color: "forestgreen",
};

export default ToggleButton;
