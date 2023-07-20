import { ProductInfoData, ProductOptionData } from '@api/dto';
import OptionList from '@components/atoms/OptionList';
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

  return (
    <>
      <h3>옵션 선택</h3>
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <hr />
      <div>
        <span>총 상품금액</span>
      </div>
      <div>
        ...옵션표기
        <div />
      </div>
    </>
  );
};

export default OptionColumn;
