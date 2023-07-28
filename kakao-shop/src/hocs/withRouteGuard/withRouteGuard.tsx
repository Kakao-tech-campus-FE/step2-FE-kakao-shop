import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withRouteGuard = (replaceUrl: string, Page: () => JSX.Element) => {
  return () => {
    const isLogin = useSelector((state: RootState) => state.signIn.isLogin);

    if (!isLogin) {
      return <Navigate to={replaceUrl} replace />;
    }

    return <Page />;
  };
};

export default withRouteGuard;
