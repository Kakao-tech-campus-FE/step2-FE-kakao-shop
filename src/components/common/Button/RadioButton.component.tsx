import { ChangeEvent, FC, useId } from "react";

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  name,
  value,
  onChange,
  checked,
}) => {
  const uid = useId();
  const onPreventDefaultChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (onChange) onChange(e);
  };

  return (
    <div>
      <input
        className={`hidden peer`}
        type="radio"
        id={uid}
        name={name}
        value={value}
        onChange={onPreventDefaultChange}
        checked={checked}
      />
      <label
        className={`inline-block py-4 px-2 transition-all bg-white first-of-type:rounded-tl-md first-of-type:rounded-bl-md last-of-type:rounded-tr-md last-of-type:rounded-br-md hover:bg-gray-100 cursor-pointer peer-checked:bg-[#0038FF] peer-checked:text-white`}
        htmlFor={uid}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
