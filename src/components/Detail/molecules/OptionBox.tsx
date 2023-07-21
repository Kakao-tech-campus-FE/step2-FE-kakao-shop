import React from 'react';
import { styled } from 'styled-components';
import type { ProductDetail } from '../../../types/Product';
import colors from '../../../constants/colors';
import OptionCard from '../atoms/OptionCard';

function OptionBox({ options }: Pick<ProductDetail, 'options'>) {
  return (
    <>
      <Title>옵션 선택</Title>
      <Wrap>
        {options.map((option, index) => (
          <OptionCard key={option.id} id={option.id} index={index + 1} optionName={option.optionName} price={option.price} />
        ))}
      </Wrap>
    </>
  );
}

export default OptionBox;

const Wrap = styled.ul`
  border: 1px solid ${colors.gray};
  padding: 0;
`;
const Title = styled.span`
  display: inline-block;
  margin-bottom: 10px;
`;
