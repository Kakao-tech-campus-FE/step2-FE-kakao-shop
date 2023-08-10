import {priceFormat} from "../../util/Format";

const OptionList = ({options, onSelected}) => {
    return (
        <div className="divide-y divide-slate-200 w-full ">
            {options.map((option, index) => {
                const {id, optionName, price} = option;
                return (
                    <button id={"option-" + id} key={index} className="p-3 block w-full text-left"
                            onClick={() => onSelected(id)}>
                        <h3>
                            {optionName}
                        </h3>
                        <p>{priceFormat(price)}</p>
                    </button>);
            })}
        </div>
    )
}

export default OptionList;