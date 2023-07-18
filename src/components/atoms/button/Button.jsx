import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Button: styled.button`
    padding: 0.75rem;

    font-size: 1rem;
    font-weight: 500;
    line-height: 100%;
    color: white;

    border-radius: 0.1rem;
    background-color: ${({ color }) => color};
  `,
};

function Button({ onClick, type, color, children, ...props }) {
  return (
    <Styled.Button onClick={onClick} type={type} color={color} {...props}>
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  color: "#535bf2",
  children: "버튼",
};

export default Button;
