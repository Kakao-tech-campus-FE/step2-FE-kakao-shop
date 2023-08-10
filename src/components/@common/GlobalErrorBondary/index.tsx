import { AxiosError } from 'axios';
import React, { Fragment, PropsWithChildren } from 'react';

import NotFound from '@pages/404';
import Error from '@pages/500';
import Login from '@pages/Login';

import { Toast } from '@components/atom';

import { deleteCookie } from '@utils/cookie';

type ErrorBoundaryState = {
  type: AxiosError | 'EVENT' | null; // 에러 타입을 AxiosError(네트워크 에러) , EVENT(이벤트 에러)로 나누었습니다. 이벤트 에러는 에러 바운더리에서 잡히지 않기때문에 따로 throw 해줘야합니다.
  status: number | null;
  method: string | null;
};

export class GlobalErrorBoundary extends React.Component<PropsWithChildren> {
  state: ErrorBoundaryState = {
    type: null,
    status: null,
    method: null,
  };

  // 실행 순서 getDerivedStateFrom → render → componentDidCatch
  static getDerivedStateFromError(error: Error) {
    //  Error로부터 상태를 업데이트하는 메서드입니다.

    if (error instanceof AxiosError) {
      return { type: AxiosError, status: error.response?.status, method: error.config?.method };
    }

    return { type: 'EVENT', status: null, method: null };
  }

  componentDidCatch() {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    // render 가 실행된 후 실행되는 메서드입니다.
    const { status } = this.state;

    if (status === 400) {
      Toast.show(<Fragment>잘못된 요청입니다.</Fragment>);

      return;
    }

    if (status === 401) {
      deleteCookie('access_token');
      Toast.show(<Fragment>다시 로그인 해주세요.</Fragment>);
      return;
    }
  }

  render() {
    const { children } = this.props;
    const { type, status, method } = this.state;

    if (method === 'get' && status === 401) {
      location.href = '/401';
      return <Login />;
    }

    if (status === 404) {
      location.replace('/404'); // react-router-dom의 Navigate를 사용하면 제대로 동작이 되지않아 location.href를 사용했습니다.
      return <NotFound />;
    }

    if (status !== null && status >= 500 && status < 600) {
      location.href = '/500';
      return <Error />;
    }

    if (type === 'EVENT') {
      location.href = '/500';
      return <Error />;
    }

    return children;
  }
}
