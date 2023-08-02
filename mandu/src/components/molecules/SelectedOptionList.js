import {priceFormat} from "../../util/Format";

const SelectedOptionList = ({selectedOptions, rawOptions, onIncrease, onRemove, onDecrease}) => {
    return (
        <div className="">
            {selectedOptions.map((selectedOption) => {
                const {optionId, quantity} = selectedOption;
                const option = rawOptions.find((option) => option.id === optionId);
                const {optionName, price} = option;
                return (
                    <div key={"selectedOption_" + optionId} className="bg-gray-200 mb-4 p-2">
                        <div className="flex justify-between">
                            <h3>{optionName}</h3>
                            <button onClick={() => onRemove(optionId)}>X</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <button className="px-2 m-2" onClick={() => onDecrease(optionId)}>-</button>
                                <p id={`option-${optionId}-quantity`} className="px-2">{quantity}</p>
                                <button className="px-2 m-2" onClick={() => onIncrease(optionId)}>+</button>
                            </div>
                            <p>{priceFormat(price * quantity)}</p>
                        </div>
                    </div>
                );
            })}
        </div>

    );
}

export default SelectedOptionList;