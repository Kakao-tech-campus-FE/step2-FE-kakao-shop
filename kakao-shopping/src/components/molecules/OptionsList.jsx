import Container from "../atoms/Container";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartRedux";

const OptionsList = ({options, selectedOptions, setSumOptionCount,setSumOptionPrice, setSelectedOptions}) => {
  const dispatch = useDispatch();

  const handleOptionClick = ({optionName, optionId, price}) => {
    if(selectedOptions.some((selectedOption) => selectedOption.optionName === optionName)) return;
    dispatch(addItem({optionId, quantity: 1}));
    setSumOptionCount(prev => prev + 1);
    setSumOptionPrice(prev => prev + price);
    setSelectedOptions(prev => [...prev, {optionName, price, optionId}]);
  }

  return (
    <Container className="w-full">
    <div className="my-2">옵션 선택</div>
    <ul className="flex flex-col items-start">
      {options.map((option, index) => 
        <Button 
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
        </Button>
      )}
    </ul>
  </Container>
  )
}

export default OptionsList;