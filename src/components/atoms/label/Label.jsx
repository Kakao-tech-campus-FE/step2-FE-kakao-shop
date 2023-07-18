import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Label: styled.label`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
    padding: 0.25rem;
  `,
};

function Label({ htmlFor, children, ...props }) {
  return (
    <Styled.Label htmlFor={htmlFor} {...props}>
      {children}
    </Styled.Label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: "input",
  children: "label",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#222222",
};

export default Label;
