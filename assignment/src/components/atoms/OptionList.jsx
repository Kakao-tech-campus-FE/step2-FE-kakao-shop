import React from 'react';
import { comma } from '../../utils/convert';

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li key={option.id} className="option" onClick={() => onClick(option)}>
          <span className="name">
            {index + 1}.{option.optionName}
          </span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
