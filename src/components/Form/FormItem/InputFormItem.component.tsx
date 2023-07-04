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
      <label
        className="w-full block text-gray-700 text-sm font-bold mb-2"
        htmlFor={uid}
      >
        {label}
      </label>
      <input
        className="w-full rounded-lg py-4 px-8 bg-gray-100 hover:bg-gray-200"
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
