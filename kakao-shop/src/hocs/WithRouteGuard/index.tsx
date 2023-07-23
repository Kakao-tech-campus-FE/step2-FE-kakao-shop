import { Navigate } from 'react-router-dom';

import { getCookie } from '@utils/cookie';

const WithRouteGuard = (replaceUrl: string, Page: () => JSX.Element) => {
  if (!getCookie('accessToken')) {
    return () => <Navigate to={replaceUrl} replace />;
  }

  return Page;
};

export default WithRouteGuard;
