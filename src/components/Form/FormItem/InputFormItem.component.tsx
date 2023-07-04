import { FC, useId } from "react";

interface InputFormItemProps {
  label: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isWrong?: boolean;
  wrongMessage?: string;
  minlength?: number;
  maxlength?: number;
}

const InputFormItem: FC<InputFormItemProps> = ({
  label,
  type,
  placeholder = "",
  value,
  onChange,
  isWrong,
  wrongMessage,
  ...inputProps
}) => {
  const uid = useId();

  return (
    <div className="relative">
      <label
        className="w-full block text-gray-700 text-sm font-bold mb-2"
        htmlFor={uid}
      >
        {label}
      </label>
      {isWrong && (
        <p className="text-red-500 text-sm mb-2 absolute right-0 -top-1">
          {wrongMessage ?? "잘못된 형식입니다."}
        </p>
      )}
      <input
        className="w-full rounded-lg py-4 px-8 bg-gray-100 hover:bg-gray-200"
        id={uid}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};

export default InputFormItem;
