import React from 'react';
import Picture from '../../common/atoms/Picture';
import type { Product } from '../../../types/Product';
import colors from '../../../constants/colors';
import { styled } from 'styled-components';

interface MainSectionProps extends Product {
  starCount: number;
}

function MainSection({ description, image, price, starCount, productName }: MainSectionProps) {
  return (
    <Wrap>
      <Picture src={process.env.REACT_APP_API_URL + image} alt={productName + '이미지'} width={300} height={300} />
      <Content>
        <Star>{'★'.repeat(starCount)}</Star>
        <Title>{productName}</Title>
        <PriceWrap>톡딜가 {price.toLocaleString('ko-kr')}원 ~</PriceWrap>
      </Content>
    </Wrap>
  );
}

export default MainSection;

const Wrap = styled.div`
  display: flex;
  padding: 20px;
`;
const Content = styled.div`
  padding-left: 20px;
`;
const Star = styled.span`
  color: ${colors.purple};
  font-size: 30px;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const PriceWrap = styled.span`
  display: inline-block;
  background-color: ${colors.yellow};
  font-weight: bold;
  font-size: 18px;
  border-radius: 30px;
  padding: 16px;
`;
