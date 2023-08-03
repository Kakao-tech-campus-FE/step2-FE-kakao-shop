import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "@/components/atoms/label/Label.jsx";
import { useFormContext } from "react-hook-form";

const Styled = {
  Container: styled.div`
    height: 84px;
    margin: 1rem 0;
  `,
  Input: styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.4rem;

    color: ${({ theme }) => theme.color.black};
    font-family: ${({ theme }) => theme.fontFamily.main};
    font-size: 0.9rem;

    background-color: ${({ theme }) => theme.color.inputBg};
    border: 1px solid #ebebeb;
    border-radius: 0.1rem;
    outline: none;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: #757575;
    }

    &:focus {
      background-color: white;
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
  validation,
  ...props
}) {
  const { register, getValues } = useFormContext();

  return (
    <Styled.Container>
      <Label htmlFor={id}>{label}</Label>
      <Styled.Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={errorMsg && "error"}
        {...register(id, validation)}
        {...props}
      />
      {errorMsg ? (
        <Styled.Message className="error-message">{errorMsg}</Styled.Message>
      ) : (
        !getValues(id) && (
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
