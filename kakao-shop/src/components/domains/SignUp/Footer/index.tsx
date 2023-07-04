import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <S.Root>
      <S.Strong>서비스 이용정보</S.Strong>
      <S.Info>
        <S.Link to="/">이용약관</S.Link>
        <S.Link to="/">
          <strong>개인정보처리방침</strong>
        </S.Link>
        <S.Link to="/">운영정책</S.Link>
        <S.Link to="/">고객센터</S.Link>
        <S.Link to="/">공지사항</S.Link>
      </S.Info>
      <S.Small>
        Copyright ©
        <Link to="/">
          <b> Kakao Corp.</b>
        </Link>{' '}
        All rights reserved.
      </S.Small>
    </S.Root>
  );
};

export default Footer;

const S = {
  Root: styled.footer`
    display: block;

    padding-bottom: 50px;

    text-align: center;
    white-space: nowrap;
  `,
  Strong: styled.strong`
    position: absolute;

    overflow: hidden;

    width: 0;
    height: 0;

    line-height: 0;
    text-indent: -9999px;
  `,
  Info: styled.div`
    &:first-of-type {
      margin-left: 0;
    }
  `,
  Link: styled(Link)`
    margin-left: 5px;
    padding: 0 5px;

    font-size: 14px;
    color: #4c4c4c;
  `,
  Small: styled.small`
    display: flex;
    justify-content: center;
    padding-top: 6px;

    font-size: 11px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
  `,
};
