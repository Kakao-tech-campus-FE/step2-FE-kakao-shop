import { useState } from "react";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { addItem, subtractItem } from "../../redux/cartRedux";
import { useSelector } from "react-redux";

const SelectedOption = ({ selectedOption, setSumOptionCount, setSumOptionPrice, className }) => {
  const dispatch = useDispatch();

  const [optionCount, setOptionCount] = useState(1);
  const [buttonValid, setButtonValid] = useState(false);
  
  const handleCountClick = (count) => {
    if(count === -1 && optionCount === 1) {
      dispatch(subtractItem({optionId: selectedOption.optionId}));
      setButtonValid(false);
      return;
    } else if(count === -1 && optionCount === 2) {
      dispatch(subtractItem({optionId: selectedOption.optionId}));
      setButtonValid(false);
      setOptionCount(prev => prev + count);
      setSumOptionCount(prev => prev + count);
      setSumOptionPrice(prev => prev + count * selectedOption.price);  
    } else {
      dispatch(addItem({optionId: selectedOption.optionId}));
      setButtonValid(true);
      setOptionCount(prev => prev + count);
      setSumOptionCount(prev => prev + count);
      setSumOptionPrice(prev => prev + count * selectedOption.price);
    }
  }
  const cart = useSelector((state) => state.cart);
  
  return (
    <li className={className}>
      <div key={selectedOption.optionName}>
        <span>선택한 상품:</span>
        <span>{selectedOption.optionName}</span>
        <div className="w-4/5 border-t mx-auto my-2"/>
        <div className="flex justify-between">
          <div className="flex my-2 items-center">
            <Button 
              onClick={() => handleCountClick(-1)}
              className={`${buttonValid ? '' : 'text-gray-200'} border mx-1 bg-gray-100 border-gray-500 rounded-md w-5 h-5 flex justify-center items-center`}
            >
              <div>-</div>
            </Button>
            <div className="h-full text-center w-5 mx-auto">{optionCount}</div>
            <Button 
              onClick={() => handleCountClick(1)}
              className="border mx-1 bg-gray-100 border-gray-500 rounded-md w-5 h-5 flex justify-center items-center"
            >
              <div>+</div>
            </Button>
          </div>
          <div className="my-2">
            {selectedOption.price}원
          </div>
        </div>
      </div>
    </li>
  )
}

export default SelectedOption;