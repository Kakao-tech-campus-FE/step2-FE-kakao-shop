import React from 'react';
import { comma } from '../../utils/convert';

export default function OptionList({ options, onClick }) {
  return (
    <ol>
      {options.map((option, index) => (
        <li key={option.id} onClick={() => onClick(option)}>
          <span>
            {index + 1}. {option.optionName}
          </span>
          <span>{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
}
