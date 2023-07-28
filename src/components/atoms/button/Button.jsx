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
    background-color: ${({ $backgroundColor }) => $backgroundColor};

    &:disabled {
      cursor: not-allowed;
      background-color: gray;
      color: white;
    }
  `,
};

function Button({ onClick, type, backgroundColor, children, ...props }) {
  return (
    <Styled.Button
      onClick={onClick}
      type={type}
      $backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </Styled.Button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  backgroundColor: "#535bf2",
  children: "버튼",
};

export default Button;
