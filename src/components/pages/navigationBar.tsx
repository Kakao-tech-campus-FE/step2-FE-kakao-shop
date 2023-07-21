import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/button';
import { login, logout } from '../../store/slices/userSlice';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO } from '../../utils/common';
import { useUserDispatch, useUserSelector } from '../../hooks/store';
import LinkButton from '../atoms/linkButton';
import Photo from '../atoms/photo';

export default function NavigationBar() {
  const user = useUserSelector((state) => state.user);
  const dispatch = useUserDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);

    if (token === null) {
      localStorage.removeItem(LOCALSTORAGE_KEY_USERINFO);
    } else {
      const userInfoString = localStorage.getItem(LOCALSTORAGE_KEY_USERINFO);
      if (userInfoString !== null) {
        const userInfo = JSON.parse(userInfoString);

        dispatch(login({
          isLogin: true,
          email: userInfo.email,
        }));
      }
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem(LOCALSTORAGE_KEY_TOKEN);
    localStorage.removeItem(LOCALSTORAGE_KEY_USERINFO);
    navigator('/');
  };

  return (
    <div className="sticky inset-x-0 top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4">
      <LinkButton href="/">
        <div className="h-10">
          <Photo src="/logoKakao.png" alt="카카오톡 쇼핑하기" />
        </div>
      </LinkButton>
      <div className="flex items-center gap-4">
        {user.isLogin ? (
          <>
            <div>
              Welcome,
              {' '}
              {user.email}
              !
            </div>
            <div>
              <LinkButton href="/cart">
                장바구니
              </LinkButton>
            </div>
            <div>
              <Button onClick={handleLogout}>
                로그아웃
              </Button>
            </div>
          </>
        ) : (
          <div>
            <LinkButton href="/login">
              로그인
            </LinkButton>
          </div>
        )}
      </div>
    </div>
  );
}
