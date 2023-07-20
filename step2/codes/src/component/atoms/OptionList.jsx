import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
    return (
        <ol className="option-list">
            {options.map((option) => (
                <li key={option.id} className="border border-black border-solidc p-2 m-1" onClick={() => onClick(option)}>
                    <div className="name">
                        {option.optionName}
                    </div>
                    <div className="font-bold">{comma(option.price)}원</div>
                </li>
            ))}
        </ol>
    )
}

export default OptionList;