import Button from "../atoms/Button";
import { useState } from "react";
import SelectedOption from "../molecules/SelectedOption";

const ProductOptions = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sumOptionPrice, setSumOptionPrice] = useState(0);
  const [sumOptionCount, setSumOptionCount] = useState(0);

  const options = product.options;

  const handleOptionClick = ({optionName, price}) => {
    if(selectedOptions.some((selectedOption) => selectedOption.optionName === optionName)) return;
    setSumOptionCount(prev => prev + 1);
    setSumOptionPrice(prev => prev + price);
    setSelectedOptions(prev => [...prev, {optionName, price}]);
  }
  console.log(selectedOptions);
  return (
    <div className="flex flex-col">
      <div>옵션 선택</div>
      {options.map((option, index) => 
        <Button key={option.id} onClick={() => handleOptionClick({
          optionName: option.optionName,
          price: option.price,
        })}>
          <div>{index + 1}. {option.optionName}</div>
          <div>{option.price}원</div>
        </Button>
      )}

      <span>배송 방법</span>
      <span>택배배송</span>
      <div>배송비</div>
      <div>무료배송</div>
      <div>제주 추가 3,000원, 제주 외 도서지역 추가 6,000원</div>
      <div className="w-4/5 border-t"/>

      <div>총 수량: 0개</div>
      <div>총 주문금액: 0원</div>

      <div>
        {selectedOptions.map((selectedOption, index) => 
          <SelectedOption 
            key={index}
            selectedOption={selectedOption} 
            setSumOptionCount={setSumOptionCount} 
            setSumOptionPrice={setSumOptionPrice} 
          />
        )}
      </div>
      <div>
        <span>총 수량: {sumOptionCount}개</span>
        <span>총 주문금액: {sumOptionPrice}원</span>
      </div>
    </div>
  )
}

export default ProductOptions;