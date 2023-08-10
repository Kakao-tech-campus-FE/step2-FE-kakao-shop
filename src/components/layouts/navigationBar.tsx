import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { login, logout } from '../../store/slices/userSlice';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO } from '../../utils/common';
import { useUserDispatch, useUserSelector } from '../../hooks/store';
import Photo from '../atoms/photo';
import { staticServerUri } from '../../utils/serverUri';

export default function NavigationBar() {
  const user = useUserSelector((state) => state.user);
  const dispatch = useUserDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
    if (token === null) {
      dispatch(logout());

      return;
    }

    const userInfoString = localStorage.getItem(LOCALSTORAGE_KEY_USERINFO);
    if (userInfoString === null) {
      dispatch(logout());

      return;
    }

    const userInfo = JSON.parse(userInfoString);
    dispatch(login({
      isLogin: true,
      email: userInfo.email,
    }));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigator('/');
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4">
      <Link to="/">
        <div className="h-10">
          <Photo src={`${staticServerUri}/logoKakao.png`} alt="카카오톡 쇼핑하기" />
        </div>
      </Link>
      <div className="flex items-center gap-6">
        {user.isLogin ? (
          <>
            <div>
              Welcome,
              {' '}
              {user.email}
              !
            </div>
            <div>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={icon({ name: 'cart-shopping' })}
                  size="lg"
                  title="장바구니"
                />
              </Link>
            </div>
            <div>
              <button onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          </>
        ) : (
          <div>
            <Link to="/login">
              로그인
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
