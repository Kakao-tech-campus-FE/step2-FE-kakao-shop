import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <div className="h-40 overflow-y-auto">
      <ol className="option-list text-left border-2 h-300 border-zinc-300 overflow-y-auto">
        <h4 className="text-left font-bold border-zinc-300 border-b-2">구성</h4>
        {options.map((option, index) => (
          <li
            key={option.id}
            className="option px-3 py-3 border-zinc-300 border-b-2 "
            onClick={() => onClick(option)}
          >
            <div className="">
              <span className="name mr-3 boarder-b-4 border-solid boarder-slate-300">
                {index + 1}. {option.optionName}
              </span>
            </div>
            <div className="font-bold">
              <span className="price">{comma(option.price)}원</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default OptionList;
