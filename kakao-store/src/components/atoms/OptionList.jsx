import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
    return (
        <ol className="my-4">
            {options.map((option, index) => (
                <ol className="px-4 py-2 mx-2 border">
                    <li key={option.id} className=" w-[350px]" onClick={() => onClick(option)}>
                        <div className="truncate">
                            {index + 1}. {option.optionName}
                        </div>
                        <span className="price">{comma(option.price)}원</span>
                    </li>
                </ol>
            ))}
        </ol>
    );
}

export default OptionList;