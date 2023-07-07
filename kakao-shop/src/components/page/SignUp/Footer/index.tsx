import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <S.Root>
      <S.Strong>서비스 이용정보</S.Strong>
      <S.Info>
        <S.Link to="/" tabIndex={0}>
          <span>이용약관</span>
        </S.Link>
        <S.Link to="/" tabIndex={0}>
          <span>
            <strong>개인정보처리방침</strong>
          </span>
        </S.Link>
        <S.Link to="/" tabIndex={0}>
          <span>운영정책</span>
        </S.Link>
        <S.Link to="/" tabIndex={0}>
          <span>고객센터</span>
        </S.Link>
        <S.Link to="/" tabIndex={0}>
          <span>공지사항</span>
        </S.Link>
      </S.Info>
      <S.Small>
        Copyright ©
        <Link to="/" tabIndex={0}>
          <span>
            <b> Kakao Corp.</b>
          </span>
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
    box-sizing: border-box;

    &:first-of-type {
      margin-left: 0;
    }
  `,
  Link: styled(Link)`
    margin-left: 5px;
    padding: 0 5px;

    font-size: 14px;
    color: #4c4c4c;

    & > span {
      border: 2px solid transparent;
    }

    &:focus > span {
      border: 2px solid #0047ab;
    }
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
