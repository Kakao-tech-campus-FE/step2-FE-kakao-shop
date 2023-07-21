import { AxiosError } from 'axios';
import React, { PropsWithChildren, FunctionComponent } from 'react';

interface ErrorBoundaryProps {
  fallback: FunctionComponent<{ resetErrorBoundary: () => void }>;
}

type ErrorBoundaryState = {
  type: AxiosError | 'ERROR' | null;
  status: number | null;
  method: string | null;
};

export class FallbackErrorBoundary extends React.Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    type: null,
    status: null,
    method: null,
  };

  resetErrorBoundary = () => {
    this.setState({
      status: null,
      method: null,
    });
  };

  // getDerivedStateFrom → render → componentDidCatch
  static getDerivedStateFromError(error: Error) {
    //  Error로부터 상태를 업데이트하는 메서드입니다.
    if (error instanceof AxiosError) {
      return { type: AxiosError, status: error.response?.status, method: error.config?.method };
    }

    return { type: 'ERROR', status: null, method: null };
  }

  componentDidCatch(error: Error) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.  // render 가 실행된 후 실행되는 메서드입니다.
    const { type } = this.state;

    if (type === 'ERROR') throw error;
  }

  render() {
    const { children, fallback: FallbackComponent } = this.props;
    const { method } = this.state;

    if (method === 'get') {
      return <FallbackComponent resetErrorBoundary={this.resetErrorBoundary} />;
    }

    return children;
  }
}
