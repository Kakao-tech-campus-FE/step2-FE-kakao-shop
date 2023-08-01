import { FC, useState } from "react";
import RadioButton, {
  RadioButtonProps,
} from "@components/common/Button/RadioButton.component";

interface RadioGroupProps {
  radioButtons: Omit<RadioButtonProps, "name" | "checked" | "onChange">[];
  name: string;
}
const RadioGroup: FC<RadioGroupProps> = ({ radioButtons, name }) => {
  const [value, onChange] = useState(radioButtons[0].value);

  return (
    <div className="flex w-fit items-baseline rounded-xl border border-[#0038FF]">
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
