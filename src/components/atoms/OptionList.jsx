import {comma} from "../../utils/convert"

const OptionList = ({options, onClick}) => {
    return (
        <ol className={"option-list w-full"}>
            {options.map((option) => {
                    return (
                        <li key={option.id} onClick={() => onClick(option)}
                            className={"w-full p-1 flex flex-col items-start box-border border-solid border border-gray-500 box-s cursor-pointer" }>
                            <span className={"p-0.5 w-full text-ellipsis text-justify whitespace-nowrap overflow-hidden"}>{option.optionName}</span>
                            <span className={"p-0.5 block text-sm"}>{comma(option.price)}원</span>
                        </li>
                    )
                }
            )}
        </ol>
    )
}

export default OptionList;