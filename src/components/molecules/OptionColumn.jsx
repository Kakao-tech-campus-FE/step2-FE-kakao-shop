import React from 'react';
import OptionList from '../atoms/OptionList';

export default function OptionColumn({ product }) {
  return (
    <div>
      <h3>옵션 선택</h3>
      <OptionList />
      <hr />
      <div>
        <span>총 상품금액</span>
      </div>
      <div>버튼</div>
    </div>
  );
}
