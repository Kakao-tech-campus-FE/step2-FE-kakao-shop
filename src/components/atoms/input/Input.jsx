import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Input: styled.input`
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.main};
    border: 1px solid #ebebeb;

    &::placeholder {
      color: #757575;
    }
  `,
};

function Input({ type, placeholder, ...props }) {
  return <Styled.Input type={type} placeholder={placeholder} {...props} />;
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
};

export default Input;
