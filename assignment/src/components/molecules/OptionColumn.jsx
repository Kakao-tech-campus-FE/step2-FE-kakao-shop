import React from 'react';
import OptionList from '../atoms/OptionList';

const OptionColumn = ({ project }) => {
  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      <OptionList />
      <hr />
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      <div className="button-group" />
    </div>
  );
};

export default OptionColumn;
