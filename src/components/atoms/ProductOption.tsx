import React from 'react';
import { OptionInfo } from '../../dto/productDto';
import { comma } from '../../utils/convert';

interface ProductOptionProps {
  optionInfo: OptionInfo;
}

const ProductOption = ({ optionInfo }: ProductOptionProps) => {
  return (
    <>
      <p>{optionInfo.optionName}</p>
      <p>{comma(optionInfo.price)}</p>
    </>
  );
};

export default ProductOption;
