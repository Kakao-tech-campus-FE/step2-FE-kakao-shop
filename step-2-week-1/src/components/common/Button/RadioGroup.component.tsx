import { FC, useState } from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton.component";
import "@/components/common/Button/radio-group.css";

interface RadioGroupProps {
  radioButtons: Omit<RadioButtonProps, "name" | "checked" | "onChange">[];
  name: string;
}
const RadioGroup: FC<RadioGroupProps> = ({ radioButtons, name }) => {
  const [value, onChange] = useState(radioButtons[0].value);

  return (
    <div className="radio-group">
      {radioButtons.map((radioButton, index) => (
        <RadioButton
          key={index}
          {...radioButton}
          name={name}
          checked={radioButton.value === value}
          onChange={() => onChange(radioButton.value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
