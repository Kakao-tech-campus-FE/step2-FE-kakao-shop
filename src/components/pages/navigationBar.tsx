import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkButton from '../atoms/linkButton';
import { RootState } from '../../store';
import Button from '../atoms/button';
import { login, logout } from '../../store/slices/userSlice';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO } from '../../utils/common';

export default function NavigationBar() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
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
    <div className="my-4 text-center">
      {user.isLogin ? (
        <>
          <div>
            Welcome,
            {' '}
            {user.email}
            !
          </div>
          <div>
            <Button handleClick={handleLogout}>
              로그아웃
            </Button>
          </div>
        </>
      ) : (
        <LinkButton href="/login">
          로그인
        </LinkButton>
      )}
    </div>
  );
}
