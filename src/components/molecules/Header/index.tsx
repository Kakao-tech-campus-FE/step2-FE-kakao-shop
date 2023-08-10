import styled from '@emotion/styled';
import { getCartsRequestAction } from '@store/Cart/reducers';
import { signOutAction } from '@store/Login/reducers';
import { RootState } from '@store/index';
import hideWithA11y from '@styles/a11y';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useViewport from '@hooks/@common/useViewport';

const Header = () => {
  const { isMobile } = useViewport();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.signIn.isLogin);
  const cartProducts = useSelector((state: RootState) => state.cart.cart);
  const totalQuantity = cartProducts.reduce((count, product) => {
    const sumOfQuantities = product.carts.reduce((acc, cart) => acc + cart.quantity, 0);
    return count + (sumOfQuantities !== 0 ? 1 : 0);
  }, 0);

  useEffect(() => {
    dispatch(getCartsRequestAction());
  }, [dispatch]);

  const logout = () => {
    dispatch(signOutAction());
    window.location.href = '/'; // 전역 state 초기화를 위해서
  };

  return (
    <Fragment>
      <S.Root isMobile={isMobile}>
        <S.Container isMobile={isMobile}>
          <S.TitleLogo>
            <Link to="/">
              <S.Image
                src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230705/152013/assets/images/pc/pc_logo.png"
                alt="톡쇼핑하기"
              />
            </Link>
          </S.TitleLogo>

          {!isMobile && (
            <S.GnbMenu>
              <S.A11yMenuDesc css={hideWithA11y}>쇼핑하기 메인 메뉴</S.A11yMenuDesc>
              <S.MenuList>
                <li>
                  <Link to="/">
                    <span>홈</span>
                  </Link>
                </li>
              </S.MenuList>
            </S.GnbMenu>
          )}

          <S.MenuUtil>
            <Link to="/cart">
              <span>장바구니</span>
            </Link>
            {!!totalQuantity && <S.CartCount>{totalQuantity}</S.CartCount>}
          </S.MenuUtil>

          <S.MenuMy>{isLogin ? <button onClick={logout}>로그아웃</button> : <Link to="/login">로그인</Link>}</S.MenuMy>
        </S.Container>
      </S.Root>
      {!isMobile && <S.HeaderTrick />}
      {/* 헤더가 fixed 이므로 아래에 div 를 하나 배치하여 레이아웃 잡기 편하도록 하기위해서 */}
    </Fragment>
  );
};

export default Header;

const S = {
  Root: styled.nav<{ isMobile: boolean }>`
    position: ${({ isMobile }) => (isMobile ? 'static' : 'fixed')};
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;

    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
  `,

  Container: styled.div<{ isMobile: boolean }>`
    display: flex;

    width: ${({ isMobile }) => (isMobile ? 'calc(100vw - 12px)' : '1280px')};
    height: 79px;
    margin: 0 auto;
    padding: ${({ isMobile }) => (isMobile ? '0 6px' : '0')};
  `,

  TitleLogo: styled.h1`
    padding-top: 31px;
  `,

  Image: styled.img`
    display: block;

    width: 90px;
    height: 20px;
  `,

  GnbMenu: styled.div`
    padding: 0 8px 0 38px;
  `,

  A11yMenuDesc: styled.h2``,

  MenuList: styled.ul`
    & > li > a {
      display: block;

      margin-top: 2px;
      padding: 31px 12px 29px;

      font-size: 18px;
      color: #000;
      font-weight: 700;
      line-height: 17px;
    }

    & > li > a > span {
      display: block;

      position: relative;
    }

    & > li > a:hover > span:after {
      content: '';

      position: absolute;
      left: 0;
      right: 0;
      bottom: -32px;

      height: 3px;

      background-color: #222;
    }
  `,

  MenuUtil: styled.div`
    position: relative;

    margin-left: auto;
    padding: 14px 40px 0 0;

    & > a {
      display: block;
      position: relative;
      width: 28px;
      height: 28px;
      padding: 12px;
    }

    & > a > span {
      display: inline-block;
      overflow: hidden;

      width: 30px;
      height: 30px;

      background: url('https://d32iktdt9peqz2.cloudfront.net/shopping-cart.webp') no-repeat;
      background-size: 26px 26px;

      font-size: 0;
      line-height: 0;
      text-indent: -9999px;
      vertical-align: top;
    }

    &::after {
      content: '';

      position: absolute;
      right: 0;
      top: 29px;

      width: 1px;
      height: 22px;

      background-color: rgba(34, 34, 34, 0.2);
    }
  `,

  MenuMy: styled.div`
    position: relative;

    padding: 13px 0 13px 24px;

    & > a {
      display: block;

      padding: 12px 0;

      font-size: 16px;
      line-height: 30px;
      color: #000;
    }

    & > button {
      display: block;

      padding: 12px 0;

      border: none;
      background-color: transparent;

      font-size: 16px;
      line-height: 30px;
      color: #000;

      cursor: pointer;
    }
  `,

  HeaderTrick: styled.div`
    height: 79px;
  `,

  CartCount: styled.span`
    position: absolute;
    left: 29px;
    top: 23px;

    box-sizing: border-box;
    min-width: 17px;
    height: 17px;

    padding: 0 5px;

    background-color: #fc5252;
    border-radius: 17px;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    text-align: center;
  `,
};
