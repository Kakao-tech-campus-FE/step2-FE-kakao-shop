import { ProductInfoData, ProductOptionData } from '@api/dto';
import Counter from '@components/atoms/Counter';
import OptionList from '@components/atoms/OptionList';
import comma from '@utils/commaUtils';
import React, { useState } from 'react';

interface OptionColumnProps {
  product: ProductInfoData;
}

type DictionaryItem = {
  optionId: number;
  quantity: number;
  price: string;
  name: string;
};

const OptionColumn = ({ product }: OptionColumnProps) => {
  const [selectedOptions, setSelectedOptions] = useState<DictionaryItem[]>([]);

  const handleOnClickOption = (option: ProductOptionData) => {
    // 이미 선택된 옵션의 선택 방지
    const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);

    if (isOptionSelected) {
      return;
    }

    setSelectedOptions((prev) => [
      ...prev,
      {
        optionId: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName,
      },
    ]);
  };

  const handleOnChange = (count: number, optionId: number) => {
    setSelectedOptions(
      selectedOptions.map((el) => {
        return el.optionId === optionId ? { ...el, quantity: count } : el;
      }),
    );
  };

  return (
    <>
      <h3>옵션 선택</h3>
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <hr />
      <div>
        <span>총 상품금액</span>
      </div>
      <div>
        {selectedOptions.map((option) => (
          <ol key={option.optionId}>
            <Counter
              value={option.quantity}
              onIncrease={(count) => handleOnChange(count, option.optionId)}
              onDecrease={(count) => handleOnChange(count, option.optionId)}
            />
            <span>{option.name}</span>
            <span>{comma(option.price)}원</span>
          </ol>
        ))}
      </div>
    </>
  );
};

export default OptionColumn;
