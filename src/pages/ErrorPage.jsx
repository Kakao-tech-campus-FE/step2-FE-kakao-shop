const ErrorPage = () => {
  return (
    <div className="errorpage">
      <span className="error">404</span>
      <div className="error-message">페이지를 찾을 수 없습니다‼️</div>
      <a href="/" className="back-home">
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default ErrorPage;
