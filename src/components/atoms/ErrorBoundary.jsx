import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const staticServerUrl = process.env.REACT_APP_PATH || "";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // 여기서 에러를 처리하거나 로그를 출력하거나 기타 작업을 수행할 수 있습니다.
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    
    if (this.state.hasError) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <h1>에러가 발생했습니다.</h1>
          <button><Link to={staticServerUrl + '/'}>홈으로</Link></button>
        </div>
      )
      // 에러가 발생했을 때 보여줄 컴포넌트나 메시지를 반환합니다.
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
