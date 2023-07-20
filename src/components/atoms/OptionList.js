import { convertToPrice } from "utils/convert";

export default function OptionList({ options, onClick }) {
  return (
    <ol className="">
      {options.map((option) => (
        <li key={option.id} className="" onClick={() => onClick(option)}>
          <span className="">{option.optionName}</span>
          <span className="">{convertToPrice(option.price)}</span>
        </li>
      ))}
    </ol>
  );
}
