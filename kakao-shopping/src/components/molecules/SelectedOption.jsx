import { useState } from "react";
import Button from "../atoms/Button";

const SelectedOption = ({ selectedOption, setSumOptionCount, setSumOptionPrice }) => {
  const [optionCount, setOptionCount] = useState(1);

  const handleCountClick = (count) => {
    if(count === -1 && optionCount === 1) return;
    setOptionCount(prev => prev + count);
    setSumOptionCount(prev => prev + count);
    setSumOptionPrice(prev => prev + count * selectedOption.price);
  }

  return (
      <div key={selectedOption.optionName}>
        <span>선택한 상품:</span>
        <span>{selectedOption.optionName}</span>
        <span>{selectedOption.price}원</span>
        <Button onClick={() => handleCountClick(-1)}>-</Button>
        <span>{optionCount}</span>
        <Button onClick={() => handleCountClick(1)}>+</Button>
      </div>
  )
}

export default SelectedOption;