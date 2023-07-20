import { ProductOptionData } from '@api/dto';
import comma from '@utils/commaUtils';
import React from 'react';
import TextButton from './button/TextButton';

interface OptionListProps {
  options: ProductOptionData[];
  onClick: (option: ProductOptionData) => void;
}

const OptionList = ({ options, onClick }: OptionListProps) => {
  return (
    <ol>
      {options.map((option: ProductOptionData, index: number) => {
        return (
          <li>
            <TextButton onClick={() => onClick(option)}>
              <span>
                {index + 1}.{option.optionName}
              </span>
              <span>{comma(option.price)}원</span>
            </TextButton>
          </li>
        );
      })}
    </ol>
  );
};

export default OptionList;
