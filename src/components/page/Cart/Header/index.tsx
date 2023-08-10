import styled from '@emotion/styled';

const Header = () => {
  return <S.Root>장바구니</S.Root>;
};

export default Header;

const S = {
  Root: styled.h2`
    background-color: #fff;
    border-top: 1px solid #ebebeb;

    line-height: 44px;
    color: #333;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    vertical-align: top;

    &::after {
      content: '';

      display: block;
      box-sizing: border-box;

      height: 12px;

      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      background-color: #f2f3f5;
    }
  `,
};
