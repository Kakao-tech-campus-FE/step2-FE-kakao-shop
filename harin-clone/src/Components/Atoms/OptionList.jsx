import { comma } from "../../Utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <div className="bg-white">
      <ol>
        {options.map((option, index) => (
          <li key={option.id} className="border-b-[1.5px] p-2" onClick={() => onClick(option)}>
            <div className="name">
              {index + 1}, {option.optionName}
            </div>
            <div className="price">{comma(option.price)}원</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default OptionList;
