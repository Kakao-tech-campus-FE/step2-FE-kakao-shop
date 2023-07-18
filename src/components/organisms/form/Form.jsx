import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import styled from "styled-components";
import LabeledInput from "@/components/molecules/labled-input/LabeledInput.jsx";

const Styled = {
  Form: styled.form`
    padding: 0 0.5rem;
  `,
};

function Form({
  onSubmit,
  onError,
  defaultValues,
  inputInformations,
  style,
  children,
}) {
  const methods = useForm({ mode: "onTouched", defaultValues: defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit, onError)} style={style}>
        {inputInformations.map((input) => (
          <LabeledInput
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            validation={input.validation}
            errorMsg={errors?.[input.id]?.message}
            requireMsg={input?.requireMsg}
          />
        ))}
        {children}
      </Styled.Form>
    </FormProvider>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func,
  defaultValues: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
  inputInformations: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      validation: PropTypes.object,
      requireMsg: PropTypes.string,
    })
  ),
  style: PropTypes.object,
  children: PropTypes.node,
};

Form.defaultProps = {
  onSubmit: (data) => {
    console.log(data);
  },
  onError: (err) => {
    console.log(err);
  },
  defaultValues: { userId: "" },
  inputInformations: [
    {
      id: "userId",
      label: "아이디",
      type: "text",
      validation: { required: "아이디를 입력해 주세요" },
      requireMsg: null,
    },
  ],
  style: {},
};

export default Form;
