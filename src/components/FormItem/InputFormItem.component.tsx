import { FC, useId } from "react";

interface InputFormItemProps {
  label: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
}

const InputFormItem: FC<InputFormItemProps> = ({
  label,
  type,
  placeholder = "",
}) => {
  const uid = useId();
  return (
    <>
      <label htmlFor={uid}>{label}</label>
      <input id={uid} type={type} placeholder={placeholder} />
    </>
  );
};

export default InputFormItem;
