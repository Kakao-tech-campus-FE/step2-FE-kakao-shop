import { useUserSelector } from '../hooks/store';
import { navigator } from './navigator';

export const checkLogin = () => {
  const user = useUserSelector((state) => state.user);

  if (!user.isLogin) {
    const response = window.confirm('로그인이 필요한 서비스입니다. 로그인 하시겠습니까?');
    if (response) {
      navigator('/login');
    }

    return false;
  }

  return true;
};
