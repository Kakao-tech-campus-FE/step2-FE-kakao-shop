import withRouteGuard from '@hocs/withRouteGuard/withRouteGuard';
import { Fragment, useEffect } from 'react';

const Cancel = withRouteGuard('/login', () => {
  useEffect(() => {
    window.close();
  }, []);

  return <Fragment />;
});

export default Cancel;
