import { Link, Outlet } from 'react-router-dom';
import { useUserSelector } from '../../hooks/store';

export default function AuthLayout() {
  const { isLogin } = useUserSelector((state) => state.user);

  if (!isLogin) {
    return (
      <section>
        <h1 className="my-4 text-xl font-bold">
          로그인이 필요한 서비스입니다.
        </h1>
        <p className="flex flex-row justify-evenly">
          <Link
            className="rounded-sm bg-kakao px-4 py-2"
            to="/login"
          >
            로그인
          </Link>
          <Link
            className="rounded-sm bg-black px-4 py-2 text-white"
            to="/"
          >
            메인 화면으로
          </Link>
        </p>
      </section>
    );
  }

  return (
    <Outlet />
  );
}
