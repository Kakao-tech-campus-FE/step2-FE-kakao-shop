import styled from "styled-components";

const Btn = styled.button`
  height: 3rem;

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  width: ${(props) => props.width}||max-width;
  color: ${(props) => colors[props.color]};
  background-color: ${(props) => colors[props.backgroundColor]};
`;

const colors = {
  yellow: "#ffe600",
  black: "#000000",
  white: "#ffffff",
};

const Button = ({ children, onClick, width, color, backgroundColor }) => {
  return (
    <Btn
      onClick={onClick}
      width={width}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </Btn>
  );
};

export default Button;
