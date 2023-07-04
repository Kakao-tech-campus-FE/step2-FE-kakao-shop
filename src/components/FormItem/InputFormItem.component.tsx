import { FC, useId } from "react";

interface InputFormItemProps {
  label: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFormItem: FC<InputFormItemProps> = ({
  label,
  type,
  placeholder = "",
  value,
  onChange,
}) => {
  const uid = useId();
  return (
    <>
      <label htmlFor={uid}>{label}</label>
      <input
        id={uid}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputFormItem;
