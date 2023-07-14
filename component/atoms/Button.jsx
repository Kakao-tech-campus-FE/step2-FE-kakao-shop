import styled from "styled-components";

const Button = ({ type, children, onClick, ...styles }) => {
  return (
    <Buttons
      type={type}
      {...styles}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </Buttons>
  );
};

export default Button;

const Buttons = styled.button`
  text-align: center;
`;
