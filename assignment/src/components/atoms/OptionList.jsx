import React from 'react';
import { comma } from '../../utils/convert';

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li
          key={option.id}
          className="option"
          style={{ border: '1px solid #f3f3f3' }}
          onClick={() => onClick(option)}
        >
          <span className="name">
            {index + 1}.{option.optionName}
          </span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
