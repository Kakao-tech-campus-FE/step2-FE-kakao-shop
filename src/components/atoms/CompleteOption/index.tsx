import { OptionWithQuantity } from "@components/organisms/CompleteForm";

interface Props {
  options: OptionWithQuantity[];
}

const CompleteOption = ({ options }: Props) => {
  return (
    <>
      {options.map((option, index) => (
        <li key={option.id}>
          <span>{index === 0 ? "옵션" : ""}</span>
          {option.optionName}, {option.quantity}개
        </li>
      ))}
    </>
  );
};

export default CompleteOption;
