import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className={"option-list w-full"}>
      {options.map((option) => {
        return (
          <li
            key={option.id}
            onClick={() => onClick(option)}
            className={
              "box-border flex w-full cursor-pointer flex-col items-start border border-solid border-gray-500 p-1"
            }
          >
            <span
              className={
                "w-full overflow-hidden text-ellipsis whitespace-nowrap p-0.5 text-justify"
              }
            >
              {option.optionName}
            </span>
            <span className={"block p-0.5 text-sm"}>
              {comma(option.price)}원
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default OptionList;
