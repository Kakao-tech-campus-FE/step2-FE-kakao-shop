import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartRedux";

const OptionsList = ({options, selectedOptions, setSelectedOptions}) => {
  const dispatch = useDispatch();

  const handleOptionClick = ({optionName, optionId, price}) => {
    const existing = selectedOptions.filter((selectedOption) => selectedOption.optionName === optionName);
    if(existing.length > 0) return;
    dispatch(addItem({optionId, quantity: 1}));
    const newItem = {
      optionName,
      optionId,
      price,
      sumCount: 1,
      sumPrice: price,
    }
    setSelectedOptions(prev => [...prev, newItem]);
  }

  return (
    <div className="w-full">
    <div className="my-2">옵션 선택</div>
    <ul className="flex flex-col items-start">
      {options.map((option, index) => 
        <button 
          key={option.id} 
          onClick={() => handleOptionClick({
            optionName: option.optionName,
            optionId: option.id,
            price: option.price,
          })}
          className="border border-b-0 1px first:rounded-t-lg last:rounded-b-lg last:border-b w-full "
        >
          <div>{index + 1}. {option.optionName}</div>
          <div>{option.price}원</div>
        </button>
      )}
    </ul>
  </div>
  )
}

export default OptionsList;