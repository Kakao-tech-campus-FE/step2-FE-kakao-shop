import {comma} from "../../utils/convert"

const OptionList = ({options, onClick}) => {
    // console.log("options", options)
    // console.log("onClick", onClick)
    return (
        <ol className={"option-list"}>
            {options.map((option) => {
                    return (
                        <li key={option.id} onClick={() => onClick(option)}>
                            <span>{option.optionName}</span>
                            <span>{comma(option.price)}원</span>
                        </li>
                    )
                }
            )}
        </ol>
    )
}

export default OptionList;