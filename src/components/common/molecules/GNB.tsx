import React from 'react';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../modules/auth';
import type { RootState } from '../../..';
import logoKakao from '../../../assets/logoKakao.png';
import LinkBtn from '../LinkBtn';
function GNB() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  return (
    <Wrap>
      <img src={logoKakao} width={80} height={30} alt="카카오 쇼핑 로고" />
      {isLogin ? (
        <LogoutBtn type="button" onClick={() => dispatch(logout())}>
          로그아웃
        </LogoutBtn>
      ) : (
        <LinkBtn to="/login">로그인</LinkBtn>
      )}
    </Wrap>
  );
}

export default GNB;

const Wrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray};
`;

const LogoutBtn = styled.button`
  background-color: inherit;
  border: none;
`;
