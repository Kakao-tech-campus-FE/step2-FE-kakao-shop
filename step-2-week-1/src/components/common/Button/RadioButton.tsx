import { FC } from "react";
import "@/components/common/Button/radio-button.css";

export interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  name,
  value,
  onChange,
  checked,
}) => {
  const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);

  return (
    <div className="radio-button">
      <input
        type="radio"
        id={uid}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={uid}>{label}</label>
    </div>
  );
};

export default RadioButton;
