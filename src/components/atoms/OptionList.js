import { convertToPrice } from "utils/convert.js";

export default function OptionList({ options, onClick }) {
  return (
    <details className="mb-2 text-left">
      <summary className="flex w-full px-3 py-2 bg-gray-100 border justify-between select-none">
        <span>옵션선택</span>
        <span className="text-gray-300">▼</span>
      </summary>
      <ol className="text-sm">
        {options.map((option) => (
          <li
            key={option.id}
            className="w-full px-3 py-2 border-x border-b"
            onClick={() => onClick(option)}
          >
            <p className="">{option.optionName}</p>
            <p className="">{convertToPrice(option.price)}</p>
          </li>
        ))}
      </ol>
    </details>
  );
}
