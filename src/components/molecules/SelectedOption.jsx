import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, subtractItem, updateSumPrice } from "../../redux/cartRedux";

const SelectedOption = ({ selectedOption, className }) => {
  const dispatch = useDispatch();

  const [optionCount, setOptionCount] = useState(1);
  const [buttonValid, setButtonValid] = useState(true);
  
  const handleCountClick = (count) => {
    if(count === -1 && optionCount <= 0) {
      return;
    } else if(count === -1 && optionCount === 1) {
      dispatch(subtractItem({optionId: selectedOption.optionId}));
      dispatch(updateSumPrice(selectedOption.price));
      setOptionCount(prev => prev + count);
      setButtonValid(false);
      return;
    } else {
      dispatch(addItem({optionId: selectedOption.optionId}));
      dispatch(updateSumPrice(selectedOption.price));
      setButtonValid(true);
      setOptionCount(prev => prev + count);
    }
  }

  return (
    <li className={className}>
      <div key={selectedOption.optionName}>
        <span>선택한 상품:</span>
        <span>{selectedOption.optionName}</span>
        <div className="w-4/5 border-t mx-auto my-2"/>
        <div className="flex justify-between">
          <div className="flex my-2 items-center">
            <button 
              onClick={() => handleCountClick(-1)}
              className={`${buttonValid ? '' : 'text-gray-200'} border mx-1 bg-gray-100 border-gray-500 rounded-md w-5 h-5 flex justify-center items-center`}
            >
              <div>-</div>
            </button>
            <div className="h-full text-center w-5 mx-auto">{optionCount}</div>
            <button 
              onClick={() => handleCountClick(1)}
              className="border mx-1 bg-gray-100 border-gray-500 rounded-md w-5 h-5 flex justify-center items-center"
            >
              <div>+</div>
            </button>
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