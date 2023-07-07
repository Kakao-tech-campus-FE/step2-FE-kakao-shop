import styled from '@emotion/styled';
import { signOutRequest } from '@store/Login/reducers';
import hideWithA11y from '@styles/a11y';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLogin } = useSelector((state: any) => state.signIn);
  const dispatch = useDispatch();

  return (
    <S.Root>
      <S.Container>
        <S.TitleLogo>
          <Link to="/">
            <S.Image
              src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230705/152013/assets/images/pc/pc_logo.png"
              alt="톡쇼핑하기"
            />
          </Link>
        </S.TitleLogo>

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

        <S.MenuUtil>
          <Link to="/">
            <span>장바구니</span>
          </Link>
        </S.MenuUtil>

        <S.MenuMy>
          {isLogin ? (
            <button
              onClick={() => {
                dispatch(signOutRequest());
              }}>
              로그아웃
            </button>
          ) : (
            <Link to="/login">로그인</Link>
          )}{' '}
        </S.MenuMy>
      </S.Container>
    </S.Root>
  );
};

export default Header;

const S = {
  Root: styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 11000;

    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
  `,
  Container: styled.div`
    display: flex;

    width: 1280px;
    height: 79px;
    margin: 0 auto;
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

      background: url('https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230705/152013/ico_store_pc.82c1fd4bf8ec030b.svg')
        no-repeat;
      background-size: 800px 500px;
      background-position: -60px 0;

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
};
