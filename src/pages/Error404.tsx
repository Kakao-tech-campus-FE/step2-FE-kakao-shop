import React from 'react';
import { styled } from 'styled-components';
import LinkBtn from '../components/common/LinkBtn';
import colors from '../constants/colors';

function Error404() {
  return (
    <Wrap>
      <Icon>⚒️</Icon>
      <Title>404번 에러가 발생했어요.</Title>
      <Description>존재하지 않는 페이지거나, 잘못된 요청이에요. 다시 시도해주세요</Description>
      <LinkBtn to="/">
        <HomeBtn>홈으로</HomeBtn>
      </LinkBtn>
    </Wrap>
  );
}

export default Error404;

const Wrap = styled.div`
  display: flex;
  margin: -100px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Icon = styled.span`
  font-size: 50px;
`;
const Title = styled.h1`
  color: ${colors.purple};
`;
const Description = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const HomeBtn = styled.span`
  background-color: ${colors.yellow};
  padding: 15px;
  border-radius: 10px;
`;
