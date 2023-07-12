import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/button';
import { login, logout } from '../../store/slices/userSlice';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO } from '../../utils/common';
import { useUserDispatch, useUserSelector } from '../../hooks/store';
import LinkButton from '../atoms/linkButton';

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
    <div className="flex items-center justify-between border border-b-stone-300 px-6 py-4">
      <LinkButton href="/">메인 페이지</LinkButton>
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
              <Button onClick={handleLogout}>
                로그아웃
              </Button>
            </div>
          </>
        ) : (
          <div>
            <Button onClick={() => {
              navigator('/login');
            }}
            >
              로그인
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
