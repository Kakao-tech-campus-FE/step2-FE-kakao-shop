import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../../atoms/label/Label.jsx";

const Styled = {
  Container: styled.div``,
  Input: styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.4rem;

    font-family: ${({ theme }) => theme.fontFamily.main};
    font-size: 0.9rem;

    border: 1px solid #ebebeb;
    border-radius: 0.1rem;

    &::placeholder {
      color: #757575;
    }

    &.error {
      border: 1px solid ${({ theme }) => theme.color.alert};
    }
  `,
  Message: styled.div`
    height: 13px;
    margin-top: 5px;
    text-align: right;
    font-size: 0.85rem;
    font-weight: 400;

    &.error-message {
      color: ${({ theme }) => theme.color.alert};
    }

    &.require-message {
      color: ${({ theme }) => theme.color.highlight};
    }
  `,
};

function LabeledInput({
  id,
  label,
  type,
  placeholder,
  errorMsg,
  requireMsg,
  value,
  ...props
}) {
  return (
    <Styled.Container>
      <Label htmlFor={id}>{label}</Label>
      <Styled.Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={errorMsg && "error"}
        {...props}
      />
      {errorMsg ? (
        <Styled.Message className="error-message">{errorMsg}</Styled.Message>
      ) : (
        !value && (
          <Styled.Message className="require-message">
            {requireMsg}
          </Styled.Message>
        )
      )}
    </Styled.Container>
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.object,
  errorMsg: PropTypes.string,
  requireMsg: PropTypes.string,
  value: PropTypes.string,
};

LabeledInput.defaultProps = {
  label: "label",
  id: "input-1",
  type: "text",
  placeholder: "placeholder",
  validation: undefined,
  errorMsg: "",
  requireMsg: "",
};

export default LabeledInput;
