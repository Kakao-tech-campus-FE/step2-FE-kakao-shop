import { Component, ReactNode } from 'react';
import { AxiosError } from 'axios';
import ErrorPage from '../pages/errorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: AxiosError<any, any> | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: AxiosError) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorPage
          errorMessage={error?.response?.data.error.message}
          resetError={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return children;
  }
}
