import React, { Fragment, PropsWithChildren } from 'react';

import NotFound from '@pages/404';
import Error from '@pages/500';

import { Toast } from '@components/atom';

type ErrorBoundaryState = {
  status: number | null;
  method: string | null;
};

export class ErrorBoundary extends React.Component<PropsWithChildren> {
  state: ErrorBoundaryState = {
    status: null,
    method: null,
  };

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { status: error.status, method: error.method };
  }

  componentDidCatch() {
    const { status, method } = this.state;

    if (status === 401) {
      Toast.show(<Fragment>다시 로그인 해주세요.</Fragment>);
      return;
    }

    if (status === 400) {
      Toast.show(<Fragment>잘못된 요청입니다.</Fragment>);

      return;
    }

    // You can also log the error to an error reporting service
  }

  render() {
    const { children } = this.props;
    const { status, method } = this.state;

    if (status === 404) {
      location.href = '/404'; // react-router-dom의 Navigate를 사용하면 제대로 동작이 되지않아 location.href를 사용했습니다.
      return <NotFound />;
    }

    if (status === 500) {
      location.href = '/500';
      return <Error />;
    }

    return children;
  }
}
